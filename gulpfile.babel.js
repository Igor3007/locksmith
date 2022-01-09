"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/index.pug",
                "./src/views/pages/*.pug"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.pug",
                "./src/data/**/*.pug",
                "./src/views/**/*.pug",
                "./src/blocks/**/*.js",
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        // scripts: {
        //     src: "./src/js/",
        //     dist: "./dist/js/",
        //     watch: [
        //         "./src/blocks/**/*.js",
        //         "./src/js/**/*.js"
        //     ]
        // },

        libs: {
            src: "./src/js/lib/*.js",
            dist: "./dist/js/lib/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },

        pagejs: {
            src: "./src/js/page/*.js",
            dist: "./dist/js/page/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/js/**/*.js"
            ]
        },


        images: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,svg}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}"
        },
        crop: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,gif,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
                "!./src/img/svg/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/img/",
            crop_w1200: "./dist/img/crop/w1200",
            crop_w760: "./dist/img/crop/w760",
            crop_w480: "./dist/img/crop/w480",
            watch: "./src/img/**/*.{jpg,jpeg,png}"
        },
        webp: {
            src: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                //"./dist/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon/*.{jpg,jpeg,png,gif}"
            ],
            dist: "./dist/img/",
            watch: [
                "./src/img/**/*.{jpg,jpeg,png,tiff}",
                "!./src/img/favicon.{jpg,jpeg,png,gif}"
            ]
        },
        sprites: {
            src: "./src/img/svg/*.svg",
            dist: "./dist/img/sprites/",
            watch: "./src/img/svg/*.svg"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        favicons: {
            src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./dist/img/favicons/",
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export {
    paths
};

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "pagejs", "images", "webp", "libs", "sprites", "fonts", "favicons"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "webp", "sprites", "fonts", "favicons", "gzip"]));

export default development;