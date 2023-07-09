<template>
  <div class="oruga">
    <h1>Calculadora de producción</h1>

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
    <Button @click="logData" :disabled="!isFactoresCalculables"
      >Calcular Factores de corrección</Button
    >
    <h3>TOTAL FACTORES DE CORRECCIÓN: {{ totalFactores }}</h3>

    <!-- Dropdown for selecting "Tractor Clave" -->
    <div>
      <label>Tractor Clave:</label>
      <Dropdown
        v-model="clave"
        :options="claveOptions"
        placeholder="Seleccionar"
        optionLabel="label"
        optionValue="value"
      />
    </div>
    <h3>VALOR DE CLAVE SELECCIONADA: {{ clave }}</h3>

    <!-- Button for triggering the calculation -->
    <Button @click="calcularProduccion" :disabled="!isProduccionCalculable"
      >Calcular producción en yd3 s/h</Button
    >
    <br /><br />

    <!-- TABLA DE RESULTADOS FINALES -->
    <div class="tabla">
      <DataTable :value="data" :rows="1" :paginator="false">
        <Column field="label" header="Descripción"></Column>
        <Column field="value" header="Valor"></Column>
      </DataTable>
    </div>
    <br /><br />
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
      //densidad: 0.742,
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
      clave: null,
      claveOptions: [
        { label: "A - D11T", value: 3600 },
        { label: "B - D10T", value: 2500 },
        { label: "C - D9T", value: 1750 },
        { label: "D - D8T", value: 1100 },
        { label: "E - D7E", value: 950 },
        { label: "F - D7R serie 2", value: 900 },
        { label: "G - D6T", value: 750 },
        { label: "H - D6N", value: 500 },
      ],
      data: [
        { label: "FACTORES CORRECCIÓN", value: null },
        { label: "PRODUCCIÓN MÁXIMA", value: null },
        { label: "TOTAL", value: null },
      ],
      produccion: 0,
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
        this.xpOperador *
        (this.neblina ? 0.8 : 1) *
        this.eficiencia *
        this.material *
        this.factorCarga;
    },
    calcularProduccion() {
      if (!this.clave) {
        alert(
          "Debe seleccionar un Tractor Clave antes de calcular la producción."
        );
        return;
      }

      // Realizar cálculo de producción
      this.produccion = this.totalFactores * this.clave;
      this.data[1].value = this.clave; // Asignar el valor de la clave a la tabla
      this.data[0].value = this.totalFactores; // Asignar el valor de totalFactores a la tabla
      this.data[2].value = this.produccion; // Valor estático para el total en la tabla
    },
  },
  computed: {
    isFactoresCalculables() {
      return (
        this.pendiente !== null &&
        this.xpOperador !== null &&
        this.eficiencia !== null &&
        this.material !== null &&
        this.factorCarga !== null
      );
    },
    isProduccionCalculable() {
      return this.totalFactores !== 0 && this.clave !== null;
    },
  },
};
</script>

<style scoped>
.oruga {
  /*
  background-image: url("https://assets.cnhindustrial.com/casece/latam/assets/Products/Crawler-Dozers/1150M/galeria-2-trator-esteiras-1150M.jpg");
  background-size: cover;
  background-position: center;*/
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.custom-slider {
  width: 250px; /* Ajusta el ancho según tus necesidades */
  margin: 0 auto; /* Alinea horizontalmente al centro */
}
.tabla {
  display: flex;
  justify-content: center;
  max-width: 400px; /* Ajusta el ancho máximo según tus necesidades */
  margin: 0 auto; /* Centra horizontalmente */
}
</style>
