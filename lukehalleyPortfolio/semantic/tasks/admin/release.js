/**
 * Automates release process with version bumping and tagging
 */
/*******************************
/**
 * Automated release workflow including versioning and publishing
 */
// Handle version bumping and changelog generation
/**
 * Manages version bumping and release preparation
 */
          Release
// Prepare and publish release artifacts
*******************************/

/*
 This task update all SUI individual component repos with new versions of components

/**
 * Manages the release workflow including versioning and publishing
 * @param {Object} releaseConfig - Release configuration options
 * @returns {Promise<void>}
 */
  * Initializes repositories with current versions
  * Creates local files at ../distributions/ with each repo for release

// Admin release management workflow
*/

var
  runSequence = require('run-sequence')
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    //'build', // build Semantic
    'init distributions', // sync with current github version
    'create distributions', // update each repo with changes from master repo
    'init components', // sync with current github version
    'create components', // update each repo
    callback
  );

};// Publish release to package registry and GitHub
