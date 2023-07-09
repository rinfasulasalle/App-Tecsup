<template>
  <div class="container">
    <h1>Inicio de Sesión</h1>
    <div class="form-group">
      <label for="username">Usuario:</label>
      <InputText id="username" v-model="username" />
    </div>
    <br />
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <Password id="password" v-model="password" :feedback="false" toggleMask />
    </div>
    <br />
    <Button label="Iniciar Sesión" @click="login" />
    <p v-if="showSuccessMessage" class="success-message">
      Inicio de sesión exitoso
    </p>
    <p v-if="showErrorMessage" class="error-message">
      Usuario o contraseña incorrectos
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      showSuccessMessage: false,
      showErrorMessage: false,
    };
  },
  methods: {
    login() {
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      // Comprobar las credenciales de inicio de sesión
      if (
        (this.username === "admin" && this.password === "admin") ||
        (this.username === "diego" && this.password === "diego")
      ) {
        this.showSuccessMessage = true;
        this.$router.push("/CmpRouter"); // Redirigir al componente CmpRouter
      } else {
        this.showErrorMessage = true;
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.form-group {
  margin-bottom: 5px;
}

.success-message {
  color: green;
}

.error-message {
  color: red;
}
</style>
