import * as nodePath from 'path';


const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;



export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`, 
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/app.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        js: `${srcFolder}/js/index.js`,
    },
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    clean: buildFolder,
    rootFolder: rootFolder,
    ftp: ``
} 