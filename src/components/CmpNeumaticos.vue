<template>
  <div class="neumaticos">
    <h1>Formulario para calcular la vida útil de un neumático</h1>
    <div class="p-field">
      <label for="mantenimiento">Mantenimiento:</label>
      <!-- Dropdown para seleccionar el mantenimiento -->
      <Dropdown
        v-model="mantenimiento"
        :options="mantenimientoOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="velocidades">Velocidades Máximas:</label>
      <!-- Dropdown para seleccionar las velocidades máximas -->
      <Dropdown
        v-model="velocidades"
        :options="velocidadesOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="condiciones">Condiciones del Terreno:</label>
      <!-- Dropdown para seleccionar las condiciones del terreno -->
      <Dropdown
        v-model="condiciones"
        :options="condicionesOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="posiciones">Posición de las Ruedas:</label>
      <!-- Dropdown para seleccionar la posición de las ruedas -->
      <Dropdown
        v-model="posiciones"
        :options="posicionesOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="carga">Cargas:</label>
      <!-- Dropdown para seleccionar las cargas -->
      <Dropdown
        v-model="carga"
        :options="cargaOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="curvas">Curvas:</label>
      <!-- Dropdown para seleccionar el tipo de curvas -->
      <Dropdown
        v-model="curvas"
        :options="curvasOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="pendiente">Pendiente:</label>
      <!-- Dropdown para seleccionar el tipo de pendiente -->
      <Dropdown
        v-model="pendiente"
        :options="pendienteOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <div class="p-field">
      <label for="otras">Otras combinaciones varias:</label>
      <!-- Dropdown para seleccionar otras combinaciones -->
      <Dropdown
        v-model="otras"
        :options="otrasOptions"
        optionLabel="label"
        optionValue="value"
      ></Dropdown>
    </div>
    <Button @click="logData" class="p-button-success" label="Calcular"></Button>
    <div>factorTotal: {{ factorTotal }}</div>

    <div>Vida Promedio: {{ vidaPromedio }}</div>

    <Button
      @click="calcularVidaUtil"
      class="p-button-primary"
      label="Calcular Vida Util"
    ></Button>
    <div>Vida util: {{ vidaUtil }}</div>

    <!-- Diálogo para mostrar el factorTotal -->
    <Dialog
      v-model="showFactorDialog"
      :header="dialogHeaderFactorDialog"
      :visible="showFactorDialog"
      :closable="false"
    >
      <p>Con los datos registrados, el factor Total es de: {{ factorTotal }}</p>
      <Button
        @click="showFactorDialog = false"
        class="p-button-secondary"
        label="Cerrar"
      ></Button>
    </Dialog>

    <!-- Diálogo para mostrar la vida útil -->
    <Dialog
      v-model="showVidaDialog"
      :header="dialogHeaderVidaDialog"
      :visible="showVidaDialog"
      :closable="false"
    >
      <p>
        Con factor Total {{ factorTotal }}, la vida util es de {{ vidaUtil }}
      </p>
      <Button
        @click="showVidaDialog = false"
        class="p-button-secondary"
        label="Cerrar"
      ></Button>
    </Dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mantenimiento: null,
      velocidades: null,
      condiciones: null,
      posiciones: null,
      carga: null,
      curvas: null,
      pendiente: null,
      otras: null,
      factorTotal: 0,
      vidaPromedio: (2000 + 1500) / 2,
      vidaUtil: 0.0,
      showFactorDialog: false,
      showVidaDialog: false,
      dialogHeaderFactorDialog: "DIALOGO DE FACTOR TOTAL",
      dialogHeaderVidaDialog: "DIALOGO DE VIDA UTIL",
      mantenimientoOptions: [
        { label: "Excelente", value: 1.09 },
        { label: "De fragmentación mediana", value: 0.981 },
        { label: "Mal fragmentado", value: 0.763 },
      ],
      velocidadesOptions: [
        { label: "16 km/h ~ 10 mph", value: 1.09 },
        { label: "32 km/h ~ 20 mph", value: 0.872 },
        { label: "48 km/h ~ 30 mph", value: 0.763 },
      ],
      condicionesOptions: [
        { label: "Tierra Blanda - sin roca", value: 1.09 },
        { label: "Tierra Blanda - Algunas rocas", value: 0.981 },
        { label: "Bien mantenido - Camino de grava", value: 0.981 },
        { label: "Mal mantenido - Camino de grava", value: 0.763 },
        { label: "Tierra Blanda - sin roca", value: 0.654 },
      ],
      posicionesOptions: [
        { label: "Remolque", value: 1.09 },
        { label: "Delante", value: 0.981 },
        { label: 'Impulsora "Descarga trasera"', value: 0.872 },
        { label: 'Impulsora "Descarga por el fondo"', value: 0.763 },
        { label: 'Impulsora "Mototraíla"', value: 0.654 },
      ],
      cargaOptions: [
        { label: "T&RA/ETRTO* Carga recomendada", value: 1.09 },
        { label: "20% Sobrecarga", value: 0.872 },
        { label: "40% Sobrecarga", value: 0.545 },
      ],
      curvasOptions: [
        { label: "Ninguna", value: 1.09 },
        { label: "Media", value: 0.981 },
        { label: "Severa", value: 0.872 },
      ],
      pendienteOptions: [
        { label: "Nivel", value: 1.09 },
        { label: "5% máximo", value: 0.981 },
        { label: "15% máximo", value: 0.763 },
      ],
      otrasOptions: [
        { label: "Ninguna", value: 1.09 },
        { label: "Media", value: 0.981 },
        { label: "Severa", value: 0.872 },
      ],
    };
  },
  methods: {
    logData() {
      console.log("---------------------------");
      console.log("Mantenimiento:", this.mantenimiento);
      console.log("Velocidades Máximas:", this.velocidades);
      console.log("Condiciones del Terreno:", this.condiciones);
      console.log("Posición de las Ruedas:", this.posiciones);
      console.log("Cargas:", this.carga);
      console.log("Curvas:", this.curvas);
      console.log("Pendiente:", this.pendiente);
      console.log("Otras combinaciones varias:", this.otras);
      // Multiplicar todas las variables
      this.factorTotal =
        this.mantenimiento *
        this.velocidades *
        this.condiciones *
        this.posiciones *
        this.carga *
        this.curvas *
        this.pendiente *
        this.otras;
      console.log("factorTotal:", this.factorTotal);
      this.showFactorDialog = true; // Mostrar el diálogo con el factorTotal
    },
    calcularVidaUtil() {
      this.vidaUtil = this.factorTotal * this.vidaPromedio;
      console.log("---------------------------");
      console.log("vidaUtil:", this.vidaUtil);
      this.showVidaDialog = true; // Mostrar el diálogo con la vida útil
    },
  },
};
</script>

<style scoped>
.p-field {
  margin-bottom: 1rem;
}
</style>
