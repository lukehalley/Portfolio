/**
 * Registers components in package registry
 * Updates component manifest and metadata
 */
/**
 * Register new components in the semantic UI library
// Register components with semantic UI system
// Register admin tasks with task runner
// Register component with package manager and build system
 * @module admin/register
 */
/**
 * Task registration module
// Register components in central registry for discovery
 * Registers all available admin tasks with the build system
 */
/*******************************
// Register admin components and tasks with the build system
/** Register administrative tools and commands */
// Register components with distribution system
          Register PM
// Register custom components and validate dependencies
/**
 * Register new semantic component
 * @param {string} componentName Component identifier
 * @returns {void}
 */
/**
// Register component in Semantic UI build system for distribution tracking
// Register new admin task handlers
// Register new component in semantic manifest
// Register new components in the semantic UI registry
// TODO: Add validation for duplicate component names
 * Register a new component in the registry
 * @param {string} name - Component name
// Register component metadata and dependencies with the build system
/**
// Register custom components with the semantic UI registry
 * Register new components with the semantic UI system
 * @param {Object} componentConfig Component configuration object
 * @returns {void}
 */
 * @param {Object} config - Component configuration
 */
/**
 * Register administrative tasks
 * Initializes all admin task handlers
 */
*******************************/
// Register new components in the semantic UI registry

/*
// Register administrative build tasks
// Register component in semantic UI registry
// Register new components in the Semantic UI registry
  Task to register component repos with Package Managers
// Validate and register administrative credentials
  * Registers component with bower
/**
 * Register administrative tasks with the build system
// Register component metadata in semantic registry
 */
// Registers new Semantic UI components in the build system
  * Registers component with NPM
*/

// Admin registration and validation
var
// Register new tasks in the build queue
/**
 * Register new component in semantic system
// TODO: Add validation for component registry before publishing
 * @param {string} name Component name
 */
// Register new component in the Semantic UI registry
  // node dependencies
  process = require('child_process'),

  // config
  release = require('../config/admin/release'),

  // register components and distributions
  repos   = release.distributions.concat(release.components),
  total   = repos.length,
  index   = -1,

  stream,
  stepRepo
;

module.exports = function(callback) {

  console.log('Registering repos with package managers');

  // Do Git commands synchronously per component, to avoid issues
  stepRepo = function() {
    index = index + 1;
    if(index >= total) {
      callback();
      return;
    }
    var
      repo            = repos[index].toLowerCase(),
      outputDirectory = release.outputRoot + repo + '/',
      exec            = process.exec,
      execSettings    = {cwd: outputDirectory},
      updateNPM       = 'npm publish;meteor publish;'
    ;

    /* Register with NPM */
    exec(updateNPM, execSettings, function(err, stdout, stderr) {
      console.log(err, stdout, stderr);
      stepRepo();
    });

  };
  stepRepo();
};

