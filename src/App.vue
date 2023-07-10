<template>
  <div id="app">
    <div v-if="!loggedIn">
      <div class="login-form">
        <h1>Login Form</h1>
        <div class="input-group">
          <span class="input-group-addon">
            <i class="pi pi-user"></i>
          </span>
          <InputText v-model="username" placeholder="Usuario"></InputText>
        </div>
        <div class="input-group">
          <span class="input-group-addon">
            <i class="pi pi-lock"></i>
          </span>
          <Password
            v-model="password"
            placeholder="Contraseña"
            :feedback="false"
            toggleMask
          ></Password>
        </div>
        <Button label="Iniciar sesión" @click="login"></Button>
      </div>
    </div>
    <div v-else>
      <div class="welcome-message">
        <h2>Bienvenido a mi app, {{ usuarioIngresado }}</h2>
        <Button
          label="Cerrar sesión"
          class="logout-button p-button-danger"
          @click="logout"
        ></Button>
      </div>
      <CmpRouter />
    </div>
  </div>
</template>

<script>
import CmpRouter from "./components/CmpRouter.vue";

export default {
  name: "App",
  components: {
    CmpRouter,
  },
  data() {
    return {
      username: "",
      password: "",
      loggedIn: false,
      usuarioIngresado: "",
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "admin") {
        this.loggedIn = true;
        this.usuarioIngresado = this.username;
        // Guardar el estado de sesión en el almacenamiento local
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("usuarioIngresado", this.usuarioIngresado);
      } else if (this.username === "diego" && this.password === "diego") {
        this.loggedIn = true;
        this.usuarioIngresado = this.username;
        // Guardar el estado de sesión en el almacenamiento local
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("usuarioIngresado", this.usuarioIngresado);
      } else if (this.username === "usuario" && this.password === "usuario") {
        this.loggedIn = true;
        this.usuarioIngresado = this.username;
        // Guardar el estado de sesión en el almacenamiento local
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("usuarioIngresado", this.usuarioIngresado);
      } else {
        // Restablecer los campos de inicio de sesión
        this.username = "";
        this.password = "";
        alert("Credenciales inválidas");
      }
    },
    logout() {
      // Limpiar el estado de sesión y eliminar los datos del almacenamiento local
      this.loggedIn = false;
      this.username = "";
      this.password = "";
      this.usuarioIngresado = "";
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("usuarioIngresado");
    },
  },
  mounted() {
    // Verificar si existe una sesión almacenada en el almacenamiento local
    const loggedIn = localStorage.getItem("loggedIn");
    const usuarioIngresado = localStorage.getItem("usuarioIngresado");
    if (loggedIn && usuarioIngresado) {
      this.loggedIn = true;
      this.usuarioIngresado = usuarioIngresado;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffcd00;
}

.login-form {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.input-group-addon {
  background-color: #f4f4f4;
  padding: 8px;
  border-radius: 4px 0 0 4px;
}

.p-inputgroup-addon {
  display: flex;
  align-items: center;
}

input {
  height: 36px;
  border-radius: 0 4px 4px 0;
  border: 1px solid #ccc;
  padding: 4px;
}

Button {
  width: 200px;
  margin-top: 10px;
}

.welcome-message {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.logout-button {
  margin-left: 10px;
}
</style>
