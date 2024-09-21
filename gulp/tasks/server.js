import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

export function server() {
  return plugins.browserSync.init({
    server: {
      baseDir: `${path.build.html}`,
    },
    notify: false,
    port: 5173,
  });
}
