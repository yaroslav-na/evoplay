import { basename, resolve } from "path";
const rootFolder = basename(resolve());

const buildFolder = "dist";
const srcFolder = "src";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    scss: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    assets: `${buildFolder}/assets/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    imgs: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp}`,
    assets: `${srcFolder}/assets/**/*.*`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    assets: `${srcFolder}/assets/**/*.*`,
    html: `${srcFolder}/**/*.html`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``, // TODO
};
