import { dirname, fromFileUrl, join, } from "https://deno.land/std@0.131.0/path/mod.ts";
import type { AppConfig } from "https://raw.githubusercontent.com/astrodon/astrodon/main/modules/astrodon/mod.ts";

const __dirname = dirname(fromFileUrl(import.meta.url));

export default <AppConfig> {
  entry: join(__dirname, "mod.ts"),
  dist: join(__dirname, "dist"),
  info: {
    name: "MyApp",
    id: "my.app",
    version: "0.1.0",
    author: "Denosaur",
    shortDescription: "Some description",
    longDescription: "More description",
    homepage: "https://astrodon.land",
    copyright: "2022",
    icon: [],
    resources: [],
  },
  permissions: {
    allow_hrtime: true,
    prompt: true,
    allow_net: [],
  }
};