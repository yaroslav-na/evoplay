import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { clear } from "./gulp/tasks/clear.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { assets } from "./gulp/tasks/assets.js";

function watch() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.assets, assets);
}

const mainTasks = gulp.parallel(html, scss, js, assets);

export const dev = gulp.series(clear, mainTasks, gulp.parallel(server, watch));
export default gulp.series(clear, mainTasks);
