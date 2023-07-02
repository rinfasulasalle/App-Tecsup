<template>
  <h1>PRODUCCIÓN EN yd3 s/h</h1>
  <div class="tabla">
    <DataTable :value="data" :rows="1" :paginator="false">
      <Column field="label" header="Descripción"></Column>
      <Column field="value" header="Valor"></Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { label: "PRODUCCIÓN MÁXIMA", value: "1000" },
        { label: "FACTORES DE CORRECCIÓN", value: "0.38" },
        { label: "TOTAL", value: "383.08" },
      ],
    };
  },
};
</script>

<style scoped>
.tabla {
  display: flex;
  justify-content: center;
  max-width: 400px; /* Ajusta el ancho máximo según tus necesidades */
  margin: 0 auto; /* Centra horizontalmente */
}
</style>
