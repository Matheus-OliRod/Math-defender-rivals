const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@res": path.resolve(__dirname, "src/res/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@src": path.resolve(__dirname, "src/"),
    },
  },
};
