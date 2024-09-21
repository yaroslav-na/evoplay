import replace from "gulp-replace";
import fileInclude from "gulp-file-include";
import webHtmlNoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import newer from "gulp-newer";
import webp from "gulp-webp";

const sass = gulpSass(dartSass);

export const plugins = {
  replace,
  fileInclude,
  webHtmlNoSvg,
  versionNumber,
  plumber,
  notify,
  browserSync,
  sass,
  rename,
  cleanCss,
  webpcss,
  autoprefixer,
  groupCssMediaQueries,
  newer,
  webp,
};
