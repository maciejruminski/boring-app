const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@common": path.resolve(__dirname, "src/components/Common"),
      "@dashboard": path.resolve(__dirname, "src/components/Dashboard"),
      "@signup": path.resolve(__dirname, "src/components/SignUp"),
      "@context": path.resolve(__dirname, "src/context"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@images": path.resolve(__dirname, "src/images"),
    },
  };

  return config;
};
