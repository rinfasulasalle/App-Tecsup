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

  const productividad = pasada * velocidad * espesor;

  dialogMessage.value = `La productividad es: ${productividad}`;

  respuesta.value = true; // Show the dialog box
  console.log(dialogMessage.value);
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
