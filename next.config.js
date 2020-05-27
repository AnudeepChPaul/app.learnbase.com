// const assetPrefix = prod ? "/login" : "";

const prod = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: prod ? `` : "",
  publicRuntimeConfig: {
    staticFolder: prod ? "" : "",
  },
  env: {
    staticFolder: prod ? "" : "",
  }
};
