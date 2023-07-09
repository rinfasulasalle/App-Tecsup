<template>
  <footer class="footer">
    <div class="footer-item">
      <a href="https://www.youtube.com/" target="_blank">
        <i class="pi pi-youtube"></i>
      </a>
    </div>
    <div class="footer-item">
      <a href="https://github.com" target="_blank">
        <i class="pi pi-github"></i>
      </a>
    </div>
    <div class="footer-item">
      <a href="mailto:example@example.com">
        <i class="pi pi-envelope"></i>
      </a>
    </div>
    <div class="footer-item">
      &copy; {{ currentYear }} Todos los derechos reservados.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f1f1f1;
  color: #333;
  font-family: Arial, sans-serif;
}

.footer-item {
  margin: 0 10px;
  font-size: 24px;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #666;
}
</style>
