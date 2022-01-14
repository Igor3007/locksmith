"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "40px", // gutter width - 20px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "1rem" // side fields - 10px
        },
        breakPoints: {
            w320: {
                width: "320px"
            },
            w480: {
                width: "480px"
            },
            w576: {
                width: "576px"
            },
            w767: {
                width: "767px"
            },
            w992: {
                width: "992px"
            },
            w1200: {
                width: "1200px"
            },
            w1440: {
                width: "1440px"
            },

        }
    });
    cb();
});