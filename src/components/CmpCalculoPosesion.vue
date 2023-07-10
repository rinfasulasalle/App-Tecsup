<template>
  <div class="formulario">
    <h1>Formulario costos</h1>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="model">Modelo de Máquina </label>
        <Dropdown
          id="model"
          v-model="modeloMaquina"
          :options="opcionesModeloMaquina"
          optionLabel="label"
          placeholder="Seleccione un modelo"
        />
      </div>

      <div class="form-group">
        <label for="horas-utilizacion"
          >Horas totales al año de utilización (hrs)
        </label>
        <InputNumber
          id="horas-utilizacion"
          v-model="horasUtilizacion"
          mode="decimal"
          suffix=" hrs"
        />
      </div>

      <div class="form-group">
        <label for="precio-entrega">Precio de entrega (USD) </label>
        <InputNumber
          id="precio-entrega"
          v-model="precioEntrega"
          mode="currency"
          currency="USD"
        />
      </div>
      <div class="form-group">
        <label for="precio-entrega">Precio de neumaticos (USD/unidad) </label>
        <InputNumber
          id="precio-entrega"
          v-model="precioNeumaticos"
          mode="currency"
          currency="USD"
        />
      </div>
      <div v-if="modeloMaquina === 'Camion 797F'" class="form-group">
        <label for="precio-neumaticos"
          >Precio de neumáticos en USD por unidad
        </label>
        <InputNumber
          id="precio-neumaticos"
          v-model="precioNeumaticos"
          mode="currency"
          currency="USD"
        />
      </div>
      <!-- New mini-form -->
      <form @submit.prevent="submitMiniForm">
        <h3>Mini formulario para Tren de rodaje</h3>
        <div class="form-group">
          <label for="impacto">Impacto </label>
          <Dropdown
            v-model="impacto"
            :options="options"
            optionLabel="name"
            placeholder="Seleccione impacto"
          />
        </div>
        <div class="form-group">
          <label for="abrasividad">Abrasividad </label>
          <Dropdown
            v-model="abrasividad"
            :options="options"
            optionLabel="name"
            placeholder="Seleccione impacto"
          />
        </div>
        <div class="form-group">
          <label for="z">z </label>
          <Dropdown
            v-model="z"
            :options="options"
            optionLabel="name"
            placeholder="Seleccione z"
          />
        </div>

        <Button type="submit" label="Enviar mini-form" />
      </form>
      <!-- End of mini-form -->
      <div class="form-group">
        <label for="valor-residual">Valor residual al reemplazo (%) </label>
        <InputNumber
          id="valor-residual"
          v-model="valorResidual"
          mode="decimal"
          suffix=" %"
          :max="100"
        />
      </div>

      <div class="form-group">
        <label for="tasa-interes">Tasa de interés (%) </label>
        <InputNumber
          id="tasa-interes"
          v-model="tasaInteres"
          mode="decimal"
          suffix=" %"
          :max="100"
          disabled
        />
      </div>

      <div class="form-group">
        <label for="tasa-seguros">Tasa de seguros (%) </label>
        <InputNumber
          id="tasa-seguros"
          v-model="tasaSeguros"
          mode="decimal"
          suffix=" %"
          :max="100"
          disabled
        />
      </div>

      <div class="form-group">
        <label for="tasa-impuestos">Tasa de impuestos (%) </label>
        <InputNumber
          id="tasa-impuestos"
          v-model="tasaImpuestos"
          mode="decimal"
          suffix=" %"
          :max="100"
          disabled
        />
      </div>

      <div class="form-group">
        <label for="precio-combustible"
          >Precio de combustible en USD/galón
        </label>
        <InputNumber
          id="precio-combustible"
          v-model="precioCombustible"
          mode="decimal"
          suffix=" USD/galón"
        />
      </div>

      <div class="form-group">
        <label for="costo-mantenimiento-preventivo"
          >Costo de mantenimiento preventivo en USD/hora
        </label>
        <InputNumber
          id="costo-mantenimiento-preventivo"
          v-model="costoMantenimientoPreventivo"
          mode="decimal"
          suffix=" USD/hora"
        />
      </div>

      <div class="form-group">
        <label for="costo-mantenimiento-correctivo"
          >Costo de mantenimiento correctivo en USD/hora
        </label>
        <InputNumber
          id="costo-mantenimiento-correctivo"
          v-model="costoMantenimientoCorrectivo"
          mode="decimal"
          suffix=" USD/hora"
        />
      </div>

      <Button type="submit" label="Enviar" />
    </form>
  </div>
  <div class="tabla">
    <DataTable :value="data_tabla1">
      <Column field="column1" header="MAQUINA"></Column>
      <Column field="column2"></Column>
    </DataTable>
  </div>
  <div class="tabla">
    <DataTable :value="data_tabla2">
      <Column field="column1" header="COSTO DE POSESIÓN"></Column>
      <Column field="column2"></Column>
    </DataTable>
  </div>
  <br />
  <div class="tabla">
    <DataTable :value="data_tabla3">
      <Column field="column1" header="COSTO DE OPERACIÓN"></Column>
      <Column field="column2"></Column>
    </DataTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modeloMaquina: null,
      horasUtilizacion: null,
      precioEntrega: null,
      precioNeumaticos: null,
      valorResidual: null,
      tasaInteres: 17,
      tasaSeguros: 5,
      tasaImpuestos: 12,
      precioCombustible: null,
      costoMantenimientoPreventivo: null,
      costoMantenimientoCorrectivo: null,
      opcionesModeloMaquina: [
        { label: "Tractor de cadenas D8T", value: "Tractor de cadenas D8T" },
        { label: "Camión 797F", value: "Camión 797F" },
      ],
      data_tabla1: [
        {
          column1: "Periodo estimado de posesión (años)",
          column2: 6,
        },
        {
          column1: "Utilización estimada (horas/año)",
          column2: "",
        },
        {
          column1: "Tiempo de posesión (total de horas)",
          column2: "",
        },
      ],
      data_tabla2: [
        {
          column1: "a. Precio de entrega (incluyendo accesorios)",
          column2: "",
        },
        {
          column1:
            "b. Menos el costo de reemplazo de los neumáticos (si se desea)",
          column2: "",
        },
        {
          column1: "c. Precio de entrega menos neumáticos",
          column2: "",
        },
        {
          column1: "",
          column2: "",
        },
        {
          column1: "Menos valor residual al reemplazo",
          column2: "",
        },
        {
          column1: "",
          column2: "",
        },
        {
          column1: "a. Valora recobrar mediante el trabajo ",
          column2: "",
        },
        {
          column1: "b. Costo por hora ",
          column2: "",
        },
        {
          column1: "",
          column2: "",
        },
        {
          column1: "Costos de interes",
          column2: "",
        },
        {
          column1: "",
          column2: "",
        },
        {
          column1: "Seguro",
          column2: "",
        },
        {
          column1: "",
          column2: "",
        },
        {
          column1: "Impuestos",
          column2: "",
        },
        {
          column1: "",
          column2: "",
        },
        {
          column1: "COSTO TOTAL POR HORA POSESION ",
          column2: "",
        },
      ],
      data_tabla3: [
        {
          column1: "COMBUSTIBLE: UNITARIO  X  CONSUMO",
          column2: "",
        },
        { column1: "", column2: "" },
        {
          column1: "Mantenimiento Planificado",
          column2: 12,
        },
        { column1: "", column2: "" },
        {
          column1: "a. Neumaticos:costo de reemlazo / horas de uso",
          column2: "",
        },
        { column1: "", column2: "" },
        { column1: "b. Tren de rodaje", column2: "" }, //6
        { column1: "", column2: "" },
        { column1: "Costo de reparaciones (por hora)", column2: 13 },
        { column1: "", column2: "" },
        {
          column1: "Piezas de desgaste especiales: costo / vida util",
          column2: "",
        },
        { column1: "", column2: "" },
        { column1: "COSTOS TOTALES DE OPERACION", column2: "" },
        { column1: "", column2: "" },

        { column1: "POSESION Y OPERACIÓN DE LA MAQUINA", column2: "" },
        { column1: "", column2: "" },
        {
          column1: "SALARIO HORARIO DEL OPERADOR (incluya beneficios sociales)",
          column2: 13,
        },
        { column1: "", column2: "" },
        { column1: "COSTO TOTAL DE POSESION Y OPERACIÓN", column2: "" },
      ],
      options: [
        { name: "Alto", impacto: 0.3, abrasividad: 0.4, z: 1 },
        { name: "Moderado", impacto: 0.2, abrasividad: 0.2, z: 0.5 },
        { name: "Bajo", impacto: 0.1, abrasividad: 0.1, z: 0.2 },
      ],
      impacto: null,
      abrasividad: null,
      z: null,
      factor: null,
      // ----
      cantidad: null,
      costo: null,
      duracion: null,
      costo_hora: null,
      piezasTractor: [
        {
          name: "puntas",
          cantidad: 11,
          costo: 40,
          duracion: 1200,
          costo_hora: null,
        },
        {
          name: "cantoneras",
          cantidad: 4,
          costo: 120,
          duracion: 800,
          costo_hora: null,
        },
        {
          name: "cuchilas",
          cantidad: 11,
          costo: 30,
          duracion: 1200,
          costo_hora: null,
        },
      ],
      piezasCamion: [
        {
          name: "Plancha base",
          cantidad: 12,
          costo: 800,
          duracion: 4000,
          costo_hora: null,
        },
        {
          name: "Plancha de desgaste",
          cantidad: 18,
          costo: 1200,
          duracion: 4000,
          costo_hora: null,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      // Lógica para procesar el formulario
      console.log("Formulario enviado");
      console.log("Modelo de Máquina:", this.modeloMaquina.value);
      console.log(
        "Horas totales al año de utilización:",
        this.horasUtilizacion
      );
      console.log("Precio de entrega en USD:", this.precioEntrega);

      console.log(
        "Precio de neumáticos en USD por unidad:",
        this.precioNeumaticos
      );
      console.log("Valor residual al reemplazo:", this.valorResidual / 100);
      console.log("Tasa de interés:", this.tasaInteres / 100);
      console.log("Tasa de seguros:", this.tasaSeguros / 100);
      console.log("Tasa de impuestos:", this.tasaImpuestos / 100);
      console.log(
        "Precio de combustible en USD/galón:",
        this.precioCombustible
      );
      console.log(
        "Costo de mantenimiento preventivo en USD/hora:",
        this.costoMantenimientoPreventivo
      );
      console.log(
        "Costo de mantenimiento correctivo en USD/hora:",
        this.costoMantenimientoCorrectivo
      );

      // Update "valor 5" and "valor 8" based on horasUtilizacion
      this.data_tabla1[1].column2 = this.horasUtilizacion;
      this.data_tabla1[2].column2 = 6 * this.horasUtilizacion;
      // ----
      this.data_tabla2[0].column2 = this.precioEntrega;
      this.data_tabla2[1].column2 = this.precioNeumaticos * 6;
      this.data_tabla2[2].column2 =
        this.data_tabla2[0].column2 - this.data_tabla2[1].column2;
      // ---
      // para el punto 2 NECESITO VALIDAR cual ha seleccionado
      let porcentaje = 0;
      if (this.modeloMaquina.value == "Camión 797F") {
        porcentaje = 0.4;
      } else {
        porcentaje = 0.6;
      }
      //console.log(porcentaje);
      //console.log(this.data_tabla2[2].column2, porcentaje);
      this.data_tabla2[4].column2 = this.data_tabla2[2].column2 * porcentaje;
      // ----
      this.data_tabla2[6].column2 =
        this.data_tabla2[2].column2 - this.data_tabla2[4].column2;
      // ---
      this.data_tabla2[7].column2 =
        this.data_tabla2[6].column2 / this.data_tabla1[2].column2;
      //console.log(this.data_tabla2[6].column2, this.data_tabla1[2].column2);
      // ---9
      let $J$27 = this.data_tabla1[0].column2;
      let $J$28 = this.data_tabla1[1].column2;
      let G41 = this.tasaInteres / 100;
      let $J$33 = this.data_tabla2[2].column2;
      //console.log("$J$27", $J$27);
      //console.log("G41", G41);
      //console.log("$J$28", $J$28);
      //console.log("$J$33", $J$33);

      this.data_tabla2[9].column2 =
        ((($J$27 + 1) / (2 * $J$27)) * $J$33 * G41) / $J$28;
      // ---
      let G43 = this.tasaSeguros / 100;
      this.data_tabla2[11].column2 =
        ((($J$27 + 1) / (2 * $J$27)) * $J$33 * G43) / $J$28;
      // ---
      let G45 = this.tasaImpuestos / 100;
      this.data_tabla2[13].column2 =
        ((($J$27 + 1) / (2 * $J$27)) * $J$33 * G45) / $J$28;
      // ---
      this.data_tabla2[15].column2 =
        this.data_tabla2[7].column2 +
        this.data_tabla2[9].column2 +
        this.data_tabla2[11].column2 +
        this.data_tabla2[13].column2;
      // ---
      // ---
      let unitario = 4;
      // Lista consumos
      const consumoD8TT = [
        [23.5, 33.7],
        [6.2, 8.9],
        [33.7, 43.5],
        [8.9, 11.5],
        [43.9, 53.7],
        [11.6, 144.2],
      ];
      const consumo797F = [
        [146.8, 220.3],
        [38.8, 58.2],
        [220.3, 293.7],
        [58.2, 77.6],
        [293.7, 367.1],
        [77.6, 97.0],
      ];
      if (this.modeloMaquina.value == "Camión 797F") {
        this.data_tabla3[0].column2 = unitario * this.promedio(consumo797F[3]);
      } else {
        this.data_tabla3[0].column2 = unitario * this.promedio(consumoD8TT[3]);
      }
      // ---
      //console.log(this.precioNeumaticos);
      if (this.modeloMaquina.value == "Camión 797F") {
        this.data_tabla3[4].column2 =
          (this.precioNeumaticos * 6) / ((6000 + 4000) / 2);
      } else {
        this.data_tabla3[4].column2 = null;
      }
      //this.submitMiniForm();
      // ---
      // --- Tren de rodaje
      console.log(
        this.impacto.impacto,
        this.abrasividad.abrasividad,
        this.z.z,
        "*",
        this.factor
      );
      if (this.modeloMaquina.value == "Tractor de cadenas D8T") {
        this.factor = 9.6;
      } else {
        this.factor = null;
      }
      this.data_tabla3[6].column2 =
        (this.impacto.impacto + this.abrasividad.abrasividad + this.z.z) *
        this.factor;
      // --- Piezas de desgaste especiales: costo / vida util
      this.piezasTractor[0].costo_hora =
        (this.piezasTractor[0].cantidad * this.piezasTractor[0].costo) /
        this.piezasTractor[0].duracion;
      this.piezasTractor[1].costo_hora =
        (this.piezasTractor[1].cantidad * this.piezasTractor[1].costo) /
        this.piezasTractor[1].duracion;
      this.piezasTractor[2].costo_hora =
        (this.piezasTractor[2].cantidad * this.piezasTractor[2].costo) /
        this.piezasTractor[2].duracion;
      //-
      this.piezasCamion[0].costo_hora =
        (this.piezasCamion[0].cantidad * this.piezasCamion[0].costo) /
        this.piezasCamion[0].duracion;
      this.piezasCamion[1].costo_hora =
        (this.piezasCamion[1].cantidad * this.piezasCamion[1].costo) /
        this.piezasCamion[1].duracion;
      if (this.modeloMaquina.value == "Tractor de cadenas D8T") {
        this.data_tabla3[10].column2 =
          this.piezasTractor[0].costo_hora +
          this.piezasTractor[1].costo_hora +
          this.piezasTractor[2].costo_hora;
      } else if (this.modeloMaquina.value == "Camión 797F") {
        this.data_tabla3[10].column2 =
          this.piezasCamion[0].costo_hora + this.piezasCamion[1].costo_hora;
      }
      // ---COSTOS TOTALES DE OPERACION
      this.data_tabla3[12].column2 =
        this.data_tabla3[0].column2 +
        this.data_tabla3[2].column2 +
        this.data_tabla3[6].column2 +
        this.data_tabla3[8].column2 +
        this.data_tabla3[10].column2;
      // ---POSESION Y OPERACIÓN DE LA MAQUINA
      this.data_tabla3[14].column2 =
        this.data_tabla2[15].column2 + this.data_tabla3[12].column2;
      // ---COSTO TOTAL DE POSESION Y OPERACIÓN
      this.data_tabla3[18].column2 =
        this.data_tabla3[14].column2 + this.data_tabla3[16].column2;
      // ---

      //this.clearFields(); // Limpiar los campos del formulario
    },
    submitMiniForm() {
      console.log("Mini-form submitted");
      console.log("Impacto:", this.impacto.impacto);
      console.log("Abrasividad:", this.abrasividad.abrasividad);
      console.log("Z:", this.z.z);
    },
    promedio(lista) {
      let suma = 0;
      for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
      }
      let promedio = suma / lista.length;
      return promedio;
    },
    clearFields() {
      this.modeloMaquina = null;
      this.horasUtilizacion = null;
      this.precioEntrega = null;
      this.precioNeumaticos = null;
      this.valorResidual = null;
      this.precioCombustible = null;
      this.costoMantenimientoPreventivo = null;
      this.costoMantenimientoCorrectivo = null;
    },
  },
};
</script>
<style scoped>
h1 {
  margin-top: 2rem;
}

.formulario {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

.tabla {
  margin-top: 2rem;
}
</style>
