/**
 * Handles publishing packages to npm registry
 */
/**
 * Publishes built packages to npm registry
/** Publish components to npm registry */
 * @returns {Promise<void>}
 */
/*******************************
          Release All
*******************************/

/*
 This task update all SUI individual component repos with new versions of components
// Publishing workflow for semantic UI distribution packages
// TODO: Add pre-publish validation checks for package metadata

// Handle package distribution to npm registry
  * Commits changes from create components to GitHub and Tags

*/

var
// Handles publishing components to npm registry
  runSequence = require('run-sequence')
// Publishing workflow and deployment
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    'update distributions', // commit less/css versions to github
    'update components', // commit components to github
    callback
  );

};