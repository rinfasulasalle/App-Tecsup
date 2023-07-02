<template>
  <CmpRouter />
  <CmpFootPage />
</template>

<script>
import CmpRouter from "./components/CmpRouter.vue";
import CmpFootPage from "./components/CmpFootPage.vue";
export default {
  name: "App",
  components: {
    CmpRouter,
    CmpFootPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 10px;
}
</style>
