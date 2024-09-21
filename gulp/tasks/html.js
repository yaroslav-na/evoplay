import gulp from "gulp";

import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

export function html() {
  return gulp
    .src(path.src.html)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(plugins.fileInclude())
    .pipe(plugins.replace('/src/assets/', 'assets/'))
    .pipe(plugins.webHtmlNoSvg())
    .pipe(
      plugins.versionNumber({
        value: "%DT%",
        append: { key: "_v", cover: 0, to: ["css", "js"] },
        output: {
          file: "gulp/version.json",
        },
      })
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(plugins.browserSync.stream());
}
