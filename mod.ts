import { AppWindow } from "https://raw.githubusercontent.com/astrodon/astrodon/main/modules/astrodon/mod.ts";
import { dirname, fromFileUrl, join, } from "https://deno.land/std@0.131.0/path/mod.ts";

const __dirname = dirname(fromFileUrl(import.meta.url));

const mainWindow = new AppWindow("My App");

mainWindow.setUrl(`file://${join(__dirname, "index.html")}`);

await mainWindow.run();