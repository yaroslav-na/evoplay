import gulp from "gulp";

import { path } from "../config/path.js";
import { plugins } from "../config/plugins.js";

function convertToWebp() {
  return gulp
    .src(path.src.imgs, { encoding: false })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "ASSETS | IMGS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(plugins.newer({ dest: path.build.assets, ext: ".webp" }))
    .pipe(plugins.webp())
    .pipe(gulp.dest(path.build.assets))
    .pipe(plugins.browserSync.stream());
}

function copyFiles() {
  return gulp
    .src(path.src.assets, { encoding: false })
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: "ASSETS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(plugins.newer(path.build.assets))
    .pipe(gulp.dest(path.build.assets))
    .pipe(plugins.browserSync.stream());
}

export const assets = gulp.series(copyFiles, convertToWebp);
