import type { IAppConfig } from "https://raw.githubusercontent.com/astrodon/astrodon/main/modules/astrodon/mod.ts";

export default <IAppConfig> {
  main: "./mod.ts",
  name: "MyApp",
  id: "my.app",
  version: "0.1.0",
  author: "Denosaur",
  shortDescription: "Some description",
  longDescription: "More description",
  homepage: "https://astrodon.land",
  copyright: `Denosaur ${new Date().getFullYear()}`,
  permissions: {
    allow_hrtime: true,
    prompt: true,
    allow_net: [],
  },
  build: {
    dist: "./dist",
    icons: [],
    resources: ['./index.html'],
  },
};
