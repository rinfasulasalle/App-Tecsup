<template>
  <div class="componente">
    <div class="card flex justify-content-center">
      <div>
        <h1>Calculo de productividad de Compactador</h1>
      </div>
      <Button
        label="Modelo 815F2"
        icon="pi pi-external-link"
        @click="visible = true"
      />
      <Dialog v-model:visible="visible">
        <img
          src="https://www.lectura-specs.es/models/renamed/orig/compactadores-de-basura-815f-series-2-caterpillar(1).jpg"
          alt="Imagen"
        />
      </Dialog>
      <Button
        label="Modelo 825H "
        icon="pi pi-external-link"
        @click="visible2 = true"
      />
      <Dialog v-model:visible="visible2">
        <img
          src="https://www.lectura-specs.es/models/renamed/orig/compactadores-de-basura-825h-caterpillar.jpg"
          alt="Imagen"
        />
      </Dialog>

      <h2>Modelo</h2>
      <Dropdown
        v-model="selectedModel"
        :options="models"
        optionLabel="name"
        placeholder="Select a model"
        class="w-full md:w-14rem"
      />
      <h2>Pasada</h2>
      <Dropdown
        v-model="selectedPasada"
        :options="pasadas"
        optionLabel="name"
        placeholder="Select num pasadas"
        class="w-full md:w-14rem"
      />
      <h2>Velocidad</h2>
      <Dropdown
        v-model="selectedVelocidad"
        :options="velocidades"
        optionLabel="name"
        placeholder="Select velocities"
        class="w-full md:w-14rem"
      />
      <h2>Espesor</h2>
      <Dropdown
        v-model="selectedEspesor"
        :options="espesores"
        optionLabel="name"
        placeholder="Select espesor"
        class="w-full md:w-14rem"
      />
      <h1></h1>
      <Button label="Calcular" @click="handleSubmit" />

      <!-- DIALOGO DE RESPUESTA-->
      <Dialog v-model:visible="respuesta">
        <h3>{{ dialogMessage }}</h3>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      selectedModel: null,
      models: [{ name: "815F2" }, { name: "825H" }],
      selectedPasada: null,
      pasadas: [{ name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }],
      selectedVelocidad: null,
      velocidades: [
        { name: "6.5 km/h", code: 6.5 },
        { name: "9.5 km/h", code: 9.5 },
        { name: "13 km/h", code: 13 },
      ],
      selectedEspesor: null,
      espesores: [
        { name: "100 mm", code: 100 },
        { name: "150 mm", code: 150 },
        { name: "200 mm", code: 200 },
        { name: "250 mm", code: 250 },
      ],
      visible: false,
      visible2: false,
      respuesta: false,
      dialogMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      const pasada = parseInt(this.selectedPasada.name);
      const velocidad = parseFloat(this.selectedVelocidad.code);
      const espesor = parseFloat(this.selectedEspesor.code);

      const productividades = [
        // Matriz de productividades
        [419, 548, 628, 822, 837, 1095, 0, 0],
        [628, 822, 942, 1232, 1256, 1643, 0, 0],
        [837, 1095, 1256, 1643, 1675, 2191, 0, 0],
        [314, 411, 471, 616, 628, 822, 0, 0],
        [471, 616, 706, 924, 942, 1232, 0, 0],
        [628, 822, 942, 1232, 1256, 1643, 0, 0],
        [251, 329, 377, 493, 502, 657, 0, 0],
        [377, 493, 565, 739, 754, 936, 0, 0],
        [502, 657, 754, 986, 1005, 1314, 0, 0],
        [286, 274, 314, 411, 419, 548, 0, 0],
        [314, 411, 471, 616, 628, 822, 0, 0],
        [419, 548, 628, 822, 837, 1095, 0, 0],
        [488, 642, 731, 962, 975, 1283, 1219, 1604],
        [713, 962, 1069, 1444, 1425, 1925, 1781, 2406],
        [975, 1283, 1463, 1925, 1950, 2566, 2438, 3208],
        // ...
      ];

      let fila = 0;
      let columna = 0;

      switch (espesor) {
        case 100:
          columna = 0;
          break;
        case 150:
          columna = 2;
          break;
        case 200:
          columna = 4;
          break;
        case 250:
          columna = 6;
          break;
        default:
          break;
      }

      switch (velocidad) {
        case 6.5:
          if (this.selectedModel.name === "815F2") {
            switch (pasada) {
              case 3:
                fila = 0;
                break;
              case 4:
                fila = 3;
                break;
              case 5:
                fila = 6;
                break;
              case 6:
                fila = 9;
                break;
              default:
                break;
            }
          } else if (this.selectedModel.name === "825H") {
            switch (pasada) {
              case 3:
                fila = 12;
                break;
              case 4:
                fila = 15;
                break;
              case 5:
                fila = 18;
                break;
              case 6:
                fila = 21;
                break;
              default:
                break;
            }
          }
          break;
        case 9.5:
          if (this.selectedModel.name === "815F2") {
            switch (pasada) {
              case 3:
                fila = 1;
                break;
              case 4:
                fila = 4;
                break;
              case 5:
                fila = 7;
                break;
              case 6:
                fila = 10;
                break;
              default:
                break;
            }
          } else if (this.selectedModel.name === "825H") {
            switch (pasada) {
              case 3:
                fila = 13;
                break;
              case 4:
                fila = 16;
                break;
              case 5:
                fila = 19;
                break;
              case 6:
                fila = 22;
                break;
              default:
                break;
            }
          }
          break;
        case 13.0:
          if (this.selectedModel.name === "815F2") {
            switch (pasada) {
              case 3:
                fila = 2;
                break;
              case 4:
                fila = 5;
                break;
              case 5:
                fila = 8;
                break;
              case 6:
                fila = 11;
                break;
              default:
                break;
            }
          } else if (this.selectedModel.name === "825H") {
            switch (pasada) {
              case 3:
                fila = 14;
                break;
              case 4:
                fila = 17;
                break;
              case 5:
                fila = 20;
                break;
              case 6:
                fila = 23;
                break;
              default:
                break;
            }
          }
          break;
        default:
          break;
      }

      const productividad = productividades[fila][columna];

      this.dialogMessage = `La productividad es: ${productividad}`;
      this.respuesta = true;
    },
  },
};
</script>

<style>
.componente {
  /*
  background-image: url("https://img.interempresas.net/fotos/2802048.jpeg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
