<template>
  <div>
    <!-- Factor de corrección -->
    <h3>1. FACTORES DE CORRECCIÓN</h3>
    <div>
      <label>Pendiente cuesta arriba:</label>
      <Knob
        v-model="pendiente"
        :min="-2.0"
        :max="1.8"
        :step="0.25"
        :decimal-places="1"
      />
    </div>
    <div>
      <label>Experiencia del operador:</label>
      <Dropdown
        v-model="experiencia"
        :options="experienciaOptions"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <div>
      <label>Presencia de neblina:</label>
      <Checkbox v-model="neblina" />
    </div>
    <div>
      <label>Eficiencia del trabajo:</label>
      <RadioButton
        v-model="eficiencia"
        name="eficiencia"
        value="0.50"
        label="50 min/h"
      />
      <RadioButton
        v-model="eficiencia"
        name="eficiencia"
        value="0.40"
        label="40 min/h"
      />
    </div>
    <div>
      <label>Material:</label>
      <Dropdown
        v-model="material"
        :options="materialOptions"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <div>
      <label>Densidad:</label>
      <Knob
        v-model="densidad"
        :min="0"
        :max="1"
        :step="0.01"
        :decimal-places="2"
      />
    </div>
    <div>
      <label>Factor de carga:</label>
      <Knob
        v-model="factorCarga"
        :min="0"
        :max="1"
        :step="0.01"
        :decimal-places="2"
      />
    </div>
    <Button label="Calcular" @click="calcularProduccion" />

    <!-- Diálogo de resultados -->
    <Dialog v-model="showDialog" header="Resultados">
      <p>Total factores de corrección: {{ totalFactoresCorreccion }}</p>
      <p>Clave del tractor: {{ claveTractor }}</p>
      <p>Producción en yd3 s/h: {{ produccion }}</p>
    </Dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pendiente: 0,
      experiencia: null,
      experienciaOptions: [
        { label: "Excelente", value: 1 },
        { label: "De fragmentación mediana", value: 0.75 },
        { label: "Mal fragmentada", value: 0.6 },
      ],
      neblina: false,
      eficiencia: "50",
      material: null,
      materialOptions: [
        { label: "Suelto y amontonado", value: 1.2 },
        { label: "Difícil de cortar con cilindro inclinación", value: 0.8 },
        { label: "Difícil de cortar sin cilindro inclinación", value: 0.7 },
        { label: "Difícil de acarrear", value: 0.8 },
        { label: "Rocas desgarradas", value: 0.6 },
      ],
      densidad: 0,
      factorCarga: 0,
      totalFactoresCorreccion: 0,
      claveTractor: null,
      produccion: 0,
      showDialog: false,
    };
  },

  methods: {
    calcularProduccion() {
      // Calcular el total de factores de corrección
      this.totalFactoresCorreccion =
        this.pendiente *
        (this.experiencia || 0) *
        (this.neblina ? 0.8 : 1) *
        (this.eficiencia === "50" ? 0.83 : 0.67) *
        (this.material || 1) *
        this.densidad *
        this.factorCarga;

      console.log("Pendiente:", this.pendiente);
      console.log("Experiencia del operador:", this.experiencia);
      console.log("Presencia de neblina:", this.neblina);
      console.log("Eficiencia del trabajo:", this.eficiencia);
      console.log("Material:", this.material);
      console.log("Densidad:", this.densidad);
      console.log("Factor de carga:", this.factorCarga);
      console.log(
        "Total factores de corrección:",
        this.totalFactoresCorreccion
      );

      // Obtener el valor de la clave del tractor
      const clavesTractor = {
        A: 3600,
        B: 2550,
        C: 1750,
        D: 1050,
        E: 900,
        F: 850,
        G: 750,
        H: 500,
      };
      this.claveTractor = clavesTractor[this.claveTractor];

      console.log("Clave del tractor:", this.claveTractor);

      // Calcular la producción en yd3 s/h
      this.produccion = this.totalFactoresCorreccion * this.claveTractor;

      console.log("Producción en yd3 s/h:", this.produccion);

      // Mostrar el diálogo de resultados
      this.showDialog = true;
    },
  },
};
</script>
