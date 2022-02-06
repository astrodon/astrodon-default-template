/** 
 * Please remember to update deno cache if you worked with astrodon before, 
 * it is recommended to use a versioned toolchain like : x/astrodon@0.1.0-alpha.2
 */

 import { App } from "https://github.com/astrodon/astrodon/raw/main/mod.ts";

/**
 * Get index is a function that returns the path to the index.html file depending on the environment.
 * The url in this case is the url of the index.html file in the template directory.
 * Please feel free to change this to your own url or set the DEV environment variable to true to use the local index.html file.
 */

 export const getIndex = async () => {
  const isDev = Deno.env.get("DEV") == "true";
  //deno-lint-ignore no-explicit-any
  const isProd = (globalThis as any).astrodonProduction

  if (isDev || isProd) {
    return `file://${ await Deno.realPath('./renderer/src/index.html')}`;
  } else {
    return `https://raw.githack.com/astrodon/astrodon/dev/examples/hello_world/renderer/index.html` //"<your_remote_html>";
  }
};

const indexPath = await getIndex();

const app = await App.new();

await app.registerWindow({ title: "spaghettis > ravioli", url: indexPath });

setInterval(() => {
  app.send(`Hello Tauri: ${Math.random()}`);
}, 500);

app.run();
