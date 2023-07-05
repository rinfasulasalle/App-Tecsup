const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  productionSourceMap: false,
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "templates/index.html",
});
