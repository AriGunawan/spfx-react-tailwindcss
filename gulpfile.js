'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// Add Tailwindcss process subtask
const postcss = require("gulp-postcss");
const atimport = require("postcss-import");
const purgecss = require("@fullhuman/postcss-purgecss");
const tailwind = require("tailwindcss");
const tailwindcss = build.subTask(
   "tailwindcss",
   function (gulp, buildOptions, done) {
      gulp
         .src("assets/tailwind.css")
         .pipe(
            postcss([
               atimport(),
               tailwind("./tailwind.config.js"),
               ...(buildOptions.args.ship
                  ? [
                       purgecss({
                          content: ["src/**/*.tsx"],
                          defaultExtractor: (content) =>
                             content.match(/[\w-/:]+(?<!:)/g) || [],
                       }),
                    ]
                  : []),
            ])
         )
         .pipe(gulp.dest("assets/dist"));
      done();
   }
);
build.rig.addPreBuildTask(tailwindcss);

build.initialize(require('gulp'));
