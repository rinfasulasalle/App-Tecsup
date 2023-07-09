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
    <DataTable :value="data">
      <Column field="column1" header="MAQUINA"></Column>
      <Column field="column2" :header="modeloMaquina"></Column>
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
      data: [
        {
          column1: "Periodo estimado de posesión (años)",
          column2: 6,
        },
        {
          column1: "Utilización estimada (horas/año)",
          column2: "Valor 5",
        },
        {
          column1: "Tiempo de posesión (total de horas)",
          column2: "Valor 8",
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
      this.data[1].column2 = this.horasUtilizacion;
      this.data[2].column2 = 6 * this.horasUtilizacion;

      this.clearFields(); // Limpiar los campos del formulario
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
