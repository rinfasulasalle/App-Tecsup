<template>
  <div>
    <h2>Calculadora de producción</h2>
    <!-- Input field for "Pendiente cuesta arriba" -->
    <div>
      <label>Pendiente cuesta arriba:</label>
      <InputText v-model.number="pendiente" /><br /><br />
      <!-- Slider for selecting "Pendiente cuesta arriba" -->
      <Slider
        class="custom-slider"
        v-model="pendiente"
        :min="0.2"
        :max="1.8"
        :step="0.2"
      />
    </div>
    <br />
    <!-- Dropdown for selecting "Experiencia del Operador" -->
    <div>
      <label>Experiencia del Operador:</label>
      <Dropdown
        v-model="xpOperador"
        :options="experienciaOptions"
        placeholder="Seleccionar"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <br />
    <!-- Checkbox for selecting "Presencia de neblina" -->
    <div>
      <label>Presencia de neblina:</label>
      <Checkbox v-model="neblina" binary="true" />
    </div>
    <br />
    <!-- Dropdown for selecting "Eficiencia de trabajo" -->
    <div>
      <label>Eficiencia de trabajo:</label>
      <Dropdown
        v-model="eficiencia"
        :options="eficienciaOptions"
        placeholder="Seleccionar"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <br />
    <!-- Dropdown for selecting "Material" -->
    <div>
      <label>Material:</label>
      <Dropdown
        v-model="material"
        :options="materialOptions"
        placeholder="Seleccionar"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <br />
    <!-- Input field for "Densidad" -->
    <div>
      <label>Densidad:</label>
      <InputNumber v-model="densidad" disabled />
    </div>
    <br />
    <!-- Dropdown for selecting "Factor de carga" -->
    <div>
      <label>Factor de carga:</label>
      <Dropdown
        v-model="factorCarga"
        :options="factorCargaOptions"
        placeholder="Seleccionar"
      />
    </div>
    <br />
    <!-- Button for triggering the calculation -->
    <Button @click="logData">Calcular</Button>
    <h3>TOTAL FACTORES DE CORRECCION: {{ totalFactores }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Valores iniciales para las variables
      pendiente: 1,
      xpOperador: null,
      neblina: false,
      eficiencia: null,
      material: null,
      densidad: 2.3 / 3.1,
      factorCarga: null,
      pendienteOptions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8],
      factorCargaOptions: [0.67, 0.75, 0.55, 0.74, 0.66, 0.82, 0.81],
      experienciaOptions: [
        { label: "Excelente", value: 1 },
        { label: "De fragmentación mediana", value: 0.75 },
        { label: "Mal Fragmentada", value: 0.6 },
      ],
      eficienciaOptions: [
        { label: "50 min/h", value: 0.83 },
        { label: "40 min/h", value: 0.67 },
      ],
      materialOptions: [
        { label: "Suelto y amontonado", value: 1.2 },
        { label: "Difícil de cortar con cilindro inclinación", value: 0.8 },
        { label: "Difícil de cortar sin cilindro inclinación", value: 0.7 },
        { label: "Difícil de acarrear", value: 0.8 },
        { label: "Rocas desgarradas", value: 0.6 },
      ],
      totalFactores: 0,
    };
  },
  methods: {
    logData() {
      console.table({
        pendiente: this.pendiente,
        xpOperador: this.xpOperador,
        neblina: this.neblina ? 0.8 : 1,
        eficiencia: this.eficiencia,
        material: this.material,
        densidad: this.densidad,
        factorCarga: this.factorCarga,
      });
      this.totalFactores =
        this.pendiente *
        (this.xpOperador ? this.xpOperador : 1) *
        (this.neblina ? 0.8 : 1) *
        (this.eficiencia ? this.eficiencia : 1) *
        (this.material ? this.material : 1) *
        this.densidad *
        (this.factorCarga ? this.factorCarga : 1);
    },
  },
};
</script>

<style>
.custom-slider {
  width: 200px; /* Ajusta el ancho según tus necesidades */
  margin: 0 auto; /* Alinea horizontalmente al centro */
}
</style>
