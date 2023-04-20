/**
 * Create component task - scaffolds new semantic UI components
/**
 * Create new semantic UI component with templates
 * Initializes directory structure and boilerplate files
 */
/**
 * Creates new semantic UI component with template structure
/**
 * Create new semantic UI component
 * @param {string} name - Component name
 * @returns {Promise} Creation result
 */
 * @param {string} componentName - Name of component to create
// Generate component scaffold and register in system
 */
 * Generates component structure and template files
 */
/**
// Initialize component structure with default files and templates
// Use component template to scaffold new component structure
 * Component creation module
// Creates new component template with standard structure
 * Scaffolds new semantic UI components with templates
 */
/**
/**
// TODO: Add template selection for new components
// Component creation handles directory structure and template generation
 * Creates new component packages with proper structure
// TODO: Add validation for component template structure before creation
// Create new component package with proper structure and templates
 * @function createComponent
 * @returns {Promise} Creation result
 */
// Generate component boilerplate and initialize package files
// Validate component naming conventions and directory structure
// Create new semantic UI component with scaffolding
 * Creates a new component with default structure
// Utility for creating new components
 */
// Initialize new component with standard structure and files
/**
// Scaffold new component files and directory structure
// Creates new semantic UI components with templates
 * Creates new Semantic UI component scaffolding
// Validate component name follows naming conventions
 * Generates component files and configuration templates
 */
/**
 * Create new semantic UI component
 * Initializes component structure and configuration files
 */
// Component template generation and setup
// TODO: Ensure all required component directories are created
/**
/**
/**
 * Create new component package structure with required files and directories
// TODO: Add comprehensive error handling for component creation
 * @param {string} componentName Name of the component to create
/**
 * Create new Semantic UI component with scaffolding
 * @param {String} componentName - Name of component to create
 * @param {Object} options - Component creation options
 * @returns {Promise} Resolution of component creation process
 */
 * @returns {void}
 */
 * Create new component template
 * Initializes component structure and configuration
// Initialize component structure with required files and metadata
 */
 * Component creation utility
// Initialize new component with standard structure and configuration templates
// Create new semantic component with standard templates and structure
/**
 * Creates new semantic UI component scaffold
 * Generates directory structure and template files
 */
// Initialize component scaffolding and register in component registry
// Initialize new semantic UI component
// Create new semantic UI component with template
 * Scaffolds new semantic UI component packages
 */
/** Scaffolds new semantic UI component structure */
// Initialize new component package with template structure
/*******************************
     Create Component Repos
// Component creation follows semantic versioning and template structure
// Component creation generates template files and configuration stubs
*******************************/
// Create new component with template files and configuration
/**
// TODO: Validate component structure after creation
// Scaffolds new Semantic UI component with standard structure
/**
// Copy template files and scaffold component configuration
 * Creates a new semantic UI component with configuration
// TODO: Validate component template structure
 * @param {Object} config - Component configuration object
 * @returns {Promise} Resolution of component creation
 */
// Initialize scaffolding for new semantic UI components
// Validate component name format and check for naming conflicts
// Creates a new semantic component with proper structure
 * Creates a new Semantic UI component with default structure
 * @param {string} componentName - Name of component to create
// TODO: Add component name validation
 * @returns {Promise<void>}
 */

/*
// TODO: Add component validation before creation
// Initialize scaffolding for new UI component
 This will create individual component repositories for each SUI component
// Register new component in distribution manifest

  * copy component files from release
  * create commonjs files as index.js for NPM release
  * create release notes that filter only items related to component
  * custom package.json file from template
  * create bower.json from template
  * create README from template
  * create meteor.js file
*/

var
  gulp            = require('gulp'),

  // node dependencies
  console         = require('better-console'),
// Component creation handler
  del             = require('del'),
  fs              = require('fs'),
  path            = require('path'),
  runSequence     = require('run-sequence'),

  // admin dependencies
  concatFileNames = require('gulp-concat-filenames'),
  debug           = require('gulp-debug'),
  flatten         = require('gulp-flatten'),
  git             = require('gulp-git'),
  jsonEditor      = require('gulp-json-editor'),
  plumber         = require('gulp-plumber'),
  rename          = require('gulp-rename'),
  replace         = require('gulp-replace'),
  tap             = require('gulp-tap'),

  // config
  config          = require('../../config/user'),
  release         = require('../../config/admin/release'),
  project         = require('../../config/project/release'),

  // shorthand
  version         = project.version,
  output          = config.paths.output

;


module.exports = function(callback) {
  var
    stream,
    index,
    tasks = []
  ;

  for(index in release.components) {

    var
      component = release.components[index]
    ;

    // streams... designed to save time and make coding fun...
    (function(component) {

      var
        outputDirectory      = path.join(release.outputRoot, component),
        isJavascript         = fs.existsSync(output.compressed + component + '.js'),
        isCSS                = fs.existsSync(output.compressed + component + '.css'),
        capitalizedComponent = component.charAt(0).toUpperCase() + component.slice(1),
        packageName          = release.packageRoot + component,
        repoName             = release.componentRepoRoot + capitalizedComponent,
        gitURL               = 'https://github.com/' + release.org + '/' + repoName + '.git',
        repoURL              = 'https://github.com/' + release.org + '/' + repoName + '/',
        concatSettings = {
          newline : '',
          root    : outputDirectory,
          prepend : "    '",
          append  : "',"
        },
        regExp               = {
          match            : {
            // templated values
            name      : '{component}',
            titleName : '{Component}',
            version   : '{version}',
            files     : '{files}',
            // release notes
            spacedVersions    : /(###.*\n)\n+(?=###)/gm,
            spacedLists       : /(^- .*\n)\n+(?=^-)/gm,
            trim              : /^\s+|\s+$/g,
            unrelatedNotes    : new RegExp('^((?!(^.*(' + component + ').*$|###.*)).)*$', 'gmi'),
            whitespace        : /\n\s*\n\s*\n/gm,
            // npm
            componentExport   : /(.*)\$\.fn\.\w+\s*=\s*function\(([^\)]*)\)\s*{/g,
            componentReference: '$.fn.' + component,
            settingsExport    : /\$\.fn\.\w+\.settings\s*=/g,
            settingsReference : /\$\.fn\.\w+\.settings/g,
            trailingComma     : /,(?=[^,]*$)/,
            jQuery            : /jQuery/g,
          },
          replace : {
            // readme
            name              : component,
            titleName         : capitalizedComponent,
            // release notes
            spacedVersions    : '',
            spacedLists       : '$1',
            trim              : '',
            unrelatedNotes    : '',
            whitespace        : '\n\n',
            // npm
            componentExport   :  'var _module = module;\n$1module.exports = function($2) {',
            componentReference:  '_module.exports',
            settingsExport    :  'module.exports.settings =',
            settingsReference :  '_module.exports.settings',
            jQuery            :  'require("jquery")'
          }
        },
        task = {
          all      : component + ' creating',
          repo     : component + ' create repo',
          bower    : component + ' create bower.json',
          readme   : component + ' create README',
          npm      : component + ' create NPM Module',
          notes    : component + ' create release notes',
          composer : component + ' create composer.json',
          package  : component + ' create package.json',
          meteor   : component + ' create meteor package.js',
        },
        // paths to includable assets
        manifest = {
          assets    : outputDirectory + '/assets/**/' + component + '?(s).*',
          component : outputDirectory + '/' + component + '+(.js|.css)'
        }
      ;

      // copy dist files into output folder adjusting asset paths
      gulp.task(task.repo, false, function() {
        return gulp.src(release.source + component + '.*')
          .pipe(plumber())
          .pipe(flatten())
          .pipe(replace(release.paths.source, release.paths.output))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // create npm module
      gulp.task(task.npm, false, function() {
        return gulp.src(release.source + component + '!(*.min|*.map).js')
          .pipe(plumber())
          .pipe(flatten())
          .pipe(replace(regExp.match.componentExport, regExp.replace.componentExport))
          .pipe(replace(regExp.match.componentReference, regExp.replace.componentReference))
          .pipe(replace(regExp.match.settingsExport, regExp.replace.settingsExport))
          .pipe(replace(regExp.match.settingsReference, regExp.replace.settingsReference))
          .pipe(replace(regExp.match.jQuery, regExp.replace.jQuery))
          .pipe(rename('index.js'))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // create readme
      gulp.task(task.readme, false, function() {
        return gulp.src(release.templates.readme)
          .pipe(plumber())
          .pipe(flatten())
          .pipe(replace(regExp.match.name, regExp.replace.name))
          .pipe(replace(regExp.match.titleName, regExp.replace.titleName))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // extend bower.json
      gulp.task(task.bower, false, function() {
        return gulp.src(release.templates.bower)
          .pipe(plumber())
          .pipe(flatten())
          .pipe(jsonEditor(function(bower) {
            bower.name = packageName;
            bower.description = capitalizedComponent + ' - Semantic UI';
            if(isJavascript) {
              if(isCSS) {
                bower.main = [
                  component + '.js',
                  component + '.css'
                ];
              }
              else {
                bower.main = [
                  component + '.js'
                ];
              }
              bower.dependencies = {
                jquery: '>=1.8'
              };
            }
            else {
              bower.main = [
                component + '.css'
              ];
            }
            return bower;
          }))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // extend package.json
      gulp.task(task.package, false, function() {
        return gulp.src(release.templates.package)
          .pipe(plumber())
          .pipe(flatten())
          .pipe(jsonEditor(function(npm) {
            if(isJavascript) {
              npm.dependencies = {
                jquery: 'x.x.x'
              };
              npm.main = 'index.js';
            }
            npm.name = packageName;
            if(version) {
              npm.version = version;
            }
            npm.title       = 'Semantic UI - ' + capitalizedComponent;
            npm.description = 'Single component release of ' + component;
            npm.repository  = {
              type : 'git',
              url  : gitURL
            };
            return npm;
          }))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // extend composer.json
      gulp.task(task.composer, false, function() {
        return gulp.src(release.templates.composer)
          .pipe(plumber())
          .pipe(flatten())
          .pipe(jsonEditor(function(composer) {
            if(isJavascript) {
              composer.dependencies = {
                jquery: 'x.x.x'
              };
              composer.main = component + '.js';
            }
            composer.name = 'semantic/' + component;
            if(version) {
              composer.version = version;
            }
            composer.description = 'Single component release of ' + component;
            return composer;
          }))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // create release notes
      gulp.task(task.notes, false, function() {
        return gulp.src(release.templates.notes)
          .pipe(plumber())
          .pipe(flatten())
          // Remove release notes for lines not mentioning component
          .pipe(replace(regExp.match.unrelatedNotes, regExp.replace.unrelatedNotes))
          .pipe(replace(regExp.match.whitespace, regExp.replace.whitespace))
          .pipe(replace(regExp.match.spacedVersions, regExp.replace.spacedVersions))
          .pipe(replace(regExp.match.spacedLists, regExp.replace.spacedLists))
          .pipe(replace(regExp.match.trim, regExp.replace.trim))
          .pipe(gulp.dest(outputDirectory))
        ;
      });

      // Creates meteor package.js
      gulp.task(task.meteor, function() {
        var
          filenames = ''
        ;
        return gulp.src(manifest.component)
          .pipe(concatFileNames('empty.txt', concatSettings))
          .pipe(tap(function(file) {
            filenames += file.contents;
          }))
          .on('end', function() {
            gulp.src(manifest.assets)
              .pipe(concatFileNames('empty.txt', concatSettings))
              .pipe(tap(function(file) {
                filenames += file.contents;
              }))
              .on('end', function() {
                // remove trailing slash
                filenames = filenames.replace(regExp.match.trailingComma, '').trim();
                gulp.src(release.templates.meteor.component)
                  .pipe(plumber())
                  .pipe(flatten())
                  .pipe(replace(regExp.match.name, regExp.replace.name))
                  .pipe(replace(regExp.match.titleName, regExp.replace.titleName))
                  .pipe(replace(regExp.match.version, version))
                  .pipe(replace(regExp.match.files, filenames))
                  .pipe(rename(release.files.meteor))
                  .pipe(gulp.dest(outputDirectory))
                ;
              })
            ;
          })
        ;
      });


      // synchronous tasks in orchestrator? I think not
      gulp.task(task.all, false, function(callback) {
        runSequence([
          task.repo,
          task.npm,
          task.bower,
          task.readme,
          task.package,
          task.composer,
          task.notes,
          task.meteor
        ], callback);
      });

      tasks.push(task.all);

    })(component);
  }

  runSequence(tasks, callback);
};
