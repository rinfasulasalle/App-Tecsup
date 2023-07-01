<template>
  <div>
    <h2>Formulario para calcular la vida útil de un neumático</h2>
    <div>
      <label for="mantenimiento">Mantenimiento:</label>
      <select v-model="mantenimiento" id="mantenimiento">
        <option value="1.090">Excelente</option>
        <option value="0.981">De fragmentación mediana</option>
        <option value="0.763">Mal fragmentado</option>
      </select>
    </div>
    <div>
      <label for="velocidades">Velocidades Máximas:</label>
      <select v-model="velocidades" id="velocidades">
        <option value="1.090">16 km/h ~ 10 mph</option>
        <option value="0.872">32 km/h ~ 20 mph</option>
        <option value="0.763">48 km/h ~ 30 mph</option>
      </select>
    </div>
    <div>
      <label for="condiciones">Condiciones del Terreno:</label>
      <select v-model="condiciones" id="condiciones">
        <option value="1.090">Tierra Blanda - sin roca</option>
        <option value="0.981">Tierra Blanda - Algunas rocas</option>
        <option value="0.981">Bien mantenido - Camino de grava</option>
        <option value="0.763">Mal mantenido - Camino de grava</option>
        <option value="0.654">Tierra Blanda - sin roca</option>
      </select>
    </div>
    <div>
      <label for="posiciones">Posición de las Ruedas:</label>
      <select v-model="posiciones" id="posiciones">
        <option value="1.090">Remolque</option>
        <option value="0.981">Delante</option>
        <option value="0.872">Impulsora "Descarga trasera"</option>
        <option value="0.763">Impulsora "Descarga por el fondo"</option>
        <option value="0.654">Impulsora "Mototraíla"</option>
      </select>
    </div>
    <div>
      <label for="carga">Cargas:</label>
      <select v-model="carga" id="carga">
        <option value="1.090">T&RA/ETRTO* Carga recomendada</option>
        <option value="0.872">20% Sobrecarga</option>
        <option value="0.545">40% Sobrecarga</option>
      </select>
    </div>
    <div>
      <label for="curvas">Curvas:</label>
      <select v-model="curvas" id="curvas">
        <option value="1.090">Ninguna</option>
        <option value="0.981">Media</option>
        <option value="0.872">Severa</option>
      </select>
    </div>
    <div>
      <label for="pendiente">Pendiente:</label>
      <select v-model="pendiente" id="pendiente">
        <option value="1.090">Nivel</option>
        <option value="0.981">5% máximo</option>
        <option value="0.763">15% máximo</option>
      </select>
    </div>
    <div>
      <label for="otras">Otras combinaciones varias:</label>
      <select v-model="otras" id="otras">
        <option value="1.090">Ninguna</option>
        <option value="0.981">Media</option>
        <option value="0.872">Severa</option>
      </select>
    </div>
    <button @click="logData">Calcular</button>

    <div>Vida Promedio: {{ vidaPromedio }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mantenimiento: 0,
      velocidades: 0,
      condiciones: 0,
      posiciones: 0,
      carga: 0,
      curvas: 0,
      pendiente: 0,
      otras: 0,
      factorTotal: 0,
      vidaPromedio: (2000 + 1500) / 2,
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
    },
  },
};
</script>
