<template>
  <div class="componente">
    <div class="card flex justify-content-center">
      <div class="difuminado">
        <h1>CALCULO DE PRODUCTIVIDAD DE RODILLO COMPACTADOR</h1>
      </div>
      <br />
      <Button
        label="815F2"
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
        label="825H "
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
        <p>{{ dialogMessage }}</p>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// MODELO
const selectedModel = ref();
const models = ref([{ name: "815F2" }, { name: "825H" }]);
// PASADA
const selectedPasada = ref();
const pasadas = ref([{ name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }]);
// Velocidad
const selectedVelocidad = ref();
const velocidades = ref([
  { name: "6.5 km/h", code: 6.5 },
  { name: "9.5 km/h", code: 9.5 },
  { name: "13 km/h", code: 13 },
]);
// Espesor
const selectedEspesor = ref();
const espesores = ref([
  { name: "100 mm", code: 100 },
  { name: "150 mm", code: 150 },
  { name: "200 mm", code: 200 },
  { name: "250 mm", code: 250 },
]);
// Para mostrar la imagen
const visible = ref(false);
const visible2 = ref(false);
const respuesta = ref(false);
const dialogMessage = ref("");

function handleSubmit() {
  const pasada = parseInt(selectedPasada.value.name);
  const velocidad = parseFloat(selectedVelocidad.value.code);
  const espesor = parseFloat(selectedEspesor.value.code);
  //console.log(pasada, velocidad, espesor);

  const productividades = [
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
    // ---------------------------------------
    [488, 642, 731, 962, 975, 1283, 1219, 1604],
    [713, 962, 1069, 1444, 1425, 1925, 1781, 2406],
    [975, 1283, 1463, 1925, 1950, 2566, 2438, 3208],
    [366, 481, 534, 722, 731, 962, 914, 1203],
    [534, 722, 802, 1083, 1069, 1444, 1336, 1804],
    [731, 962, 1097, 1444, 1463, 1925, 1828, 2406],
    [293, 385, 439, 577, 585, 770, 731, 962],
    [428, 577, 641, 866, 855, 1155, 1069, 1444],
    [585, 770, 1155, 1170, 1540, 1463, 1925],
    [244, 321, 366, 481, 488, 642, 609, 802],
    [356, 481, 534, 722, 713, 962, 891, 1203],
    [488, 642, 731, 962, 975, 1283, 1219, 1604],
  ];
  // Calculando productivida con switch case
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
      //console.log("error espesor");
      break;
  }
  switch (velocidad) {
    case 6.5:
      //console.log("6.5", selectedModel.value.name);
      // fila = 0,3,6,9,12,15,18,21
      if (selectedModel.value.name == "815F2") {
        // fila = 0,3,6,9
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
      } else if (selectedModel.value.name == "8S5H") {
        // fila = 12,15,18,21
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
      } else {
        //console.log("error selectedModel.value.name ");
      }
      break;
    case 9.5:
      //console.log("9.5", selectedModel.value.name);
      // fila = 1,4,7,10,13,16,19,22
      if (selectedModel.value.name == "815F2") {
        // fila = 1,4,7,10
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
      } else if (selectedModel.value.name == "8S5H") {
        // fila = 13,16,19,22
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
      } else {
        //console.log("error");
      }
      break;
    case 13.0:
      // fila = 2,5,8,11,14,17,20,23
      if (selectedModel.value.name == "815F2") {
        // fila = 2,5,8,11
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
      } else if (selectedModel.value.name == "8S5H") {
        // fila = 14,17,20,23
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
      } else {
        //console.log("error");
      }
      break;
    default:
      //console.log("error velocidad");
      break;
  }
  console.table(selectedModel.value);
  const productividad = productividades[fila][columna];

  dialogMessage.value = `La productividad es: ${productividad}`;

  respuesta.value = true; // Show the dialog box
  //console.log(dialogMessage.value);
}
</script>
<style>
.componente {
  background-image: url("https://img.interempresas.net/fotos/2802048.jpeg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.difuminado {
  display: inline-block;
  background: rgba(72, 46, 190, 0.3);
  padding: 10px 10px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(8px);
  margin: 20px;
}
</style>
