"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import imageResize from 'gulp-image-resize';


import debug from "gulp-debug";
import browsersync from "browser-sync";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

      gulp.task("crop", () => {
        return gulp.src(paths.crop.src)

        .pipe(imageResize({
          imageMagick: true,
          width : 1200,
          height : 0,
          crop : false,
          upscale : false
        }))
        .pipe(gulp.dest(paths.crop.crop_w1200))
        .pipe(debug({ "title": "Crop" }))

        .pipe(imageResize({
          imageMagick: true,
          width : 768,
          height : 0,
          crop : false,
          upscale : false
        }))
        .pipe(gulp.dest(paths.crop.crop_w760))
        .pipe(debug({ "title": "Crop" }))

        .pipe(imageResize({
          imageMagick: true,
          width : 480,
          height : 0,
          crop : false,
          upscale : false
        }))
        .pipe(gulp.dest(paths.crop.crop_w480))
        .pipe(debug({ "title": "Crop" }))

        .on("end", browsersync.reload);
    });

     