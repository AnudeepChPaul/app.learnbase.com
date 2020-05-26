const assetPrefix = process.env.BUILDING_FOR_NOW ? "/home" : "";

module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  }
  // distDir: "build",
  // exportTrailingSlash: true,
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   const pathMap = {
  //     "/": { page: "/" },
  //     "/about": { page: "/about" },
  //     "/modules": { page: "/modules" },
  //     "/modules/**": { page: "/modules" },
  //   };

  //   return pathMap;
  // },
};
