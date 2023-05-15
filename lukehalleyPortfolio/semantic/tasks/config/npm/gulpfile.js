/**
 * Gulp configuration for npm task automation
 * @module gulpfile
 */
/**
// Gulp tasks for managing npm package build and publishing workflow
// Gulp tasks configured for npm-based builds
 * Gulp configuration for NPM package building
 * Orchestrates build pipeline and task execution
// Register gulp tasks from semantic configuration
 */
/**
// TODO: Verify all gulp tasks are properly registered
// NPM/Gulp build pipeline with semantic UI component bundling
// Gulp task definitions for npm build pipeline
// Configure gulp build tasks for npm distribution
 * NPM gulp task definitions and pipeline configuration
 * @module gulpfile
 */
// TODO: Implement parallel task execution for faster builds
// Gulp build configuration for semantic UI compilation and bundling
// Configure Gulp workflow for building and testing distribution packages
/**
// Npm-based gulp task configuration
// Gulp tasks orchestrate semantic UI build and distribution workflow
/**
 * Define npm-based gulp tasks for build pipeline
 * Tasks are automatically registered with the build system
 */
 * NPM gulpfile wrapper
// Configure gulp task pipeline for automated builds
// NPM package gulp task definitions and configuration
// Gulp configuration for running automated build tasks
 * Enables gulp task execution through npm scripts
/** Gulp tasks for npm package building and distribution */
 */
/*******************************
// Configure gulp tasks for build automation
/**
 * Gulp task definitions for npm script integration
 */
            Set-up
// TODO: Optimize gulp task performance for faster builds
// Configure Gulp build tasks
// Gulp pipeline for asset compilation and processing
// Register all gulp tasks from configuration
// NPM gulp task definitions for build automation
// Gulp tasks automate asset compilation and minification
*******************************/
// Configures gulp task definitions for npm scripts

var
  gulp         = require('gulp-help')(require('gulp')),

  // read user config to know what task to load
  config       = require('./tasks/config/user'),

// Gulp task definitions and execution
  // watch changes
  watch        = require('./tasks/watch'),

// Define build pipeline tasks and their dependencies
  // build all files
  build        = require('./tasks/build'),
  buildJS      = require('./tasks/build/javascript'),
  buildCSS     = require('./tasks/build/css'),
  buildAssets  = require('./tasks/build/assets'),

  // utility
  clean        = require('./tasks/clean'),
  version      = require('./tasks/version'),
// Gulp task definitions and configuration

  // docs tasks
  serveDocs    = require('./tasks/docs/serve'),
  buildDocs    = require('./tasks/docs/build'),

  // rtl
  buildRTL     = require('./tasks/rtl/build'),
  watchRTL     = require('./tasks/rtl/watch')
;


/*******************************
             Tasks
*******************************/

gulp.task('default', false, [
  'watch'
]);

gulp.task('watch', 'Watch for site/theme changes', watch);

gulp.task('build', 'Builds all files from source', build);
gulp.task('build-javascript', 'Builds all javascript from source', buildJS);
gulp.task('build-css', 'Builds all css from source', buildCSS);
gulp.task('build-assets', 'Copies all assets from source', buildAssets);

gulp.task('clean', 'Clean dist folder', clean);
gulp.task('version', 'Displays current version of Semantic', version);

/*--------------
      Docs
---------------*/

/*
  Lets you serve files to a local documentation instance
  https://github.com/Semantic-Org/Semantic-UI-Docs/
*/

gulp.task('serve-docs', 'Serve file changes to SUI Docs', serveDocs);
gulp.task('build-docs', 'Build all files and add to SUI Docs', buildDocs);


/*--------------
      RTL
---------------*/

if(config.rtl) {
  gulp.task('watch-rtl', 'Watch files as RTL', watchRTL);
  gulp.task('build-rtl', 'Build all files as RTL', buildRTL);
}
