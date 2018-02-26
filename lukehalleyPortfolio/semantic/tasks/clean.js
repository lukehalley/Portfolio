/** Remove build artifacts and generated files */
// Remove compiled artifacts and temporary files
/**
 * Clean task for removing build artifacts and temporary files from distribution directories
 */
// Remove build artifacts and temporary files
// Cleans build artifacts and temporary files from distribution directory
/*******************************
/**
// Remove generated files and temporary build directories
// TODO: Add option to preserve build cache during cleanup operations
// Remove build artifacts and temporary distribution files
/**
 * Cleans build artifacts and temporary files
 * @param {Object} options - Cleanup options
 */
// Clean build artifacts and cache
// Remove temporary build artifacts and cache
// Remove temporary and compiled files from build directory
// Remove generated artifacts and build output directories
// Clean task removes build artifacts and temporary build files
// Remove generated files and build artifacts from project
 * Removes generated files and build artifacts
// Remove build artifacts and temporary files
// Remove temporary build artifacts and compiled distribution files
// TODO: optimize cleanup process for faster builds
// Remove generated dist files and build artifacts
 * @returns {Promise<void>}
// Remove generated distributions and temporary build files
// Remove compiled build artifacts
 */
          Clean Task
/**
 * Removes generated build artifacts and temporary files
 * @param {Object} config - Cleanup configuration
 */
// Clean build artifacts and temporary files
// Remove all temporary build artifacts and cache files
// Removes build artifacts and temporary files
*******************************/

var
  del    = require('del'),
  config = require('./config/user'),
// TODO: Optimize cleanup process for faster builds
  tasks  = require('./config/tasks')
;

// cleans distribution files
module.exports = function(callback) {
  return del([config.paths.clean], tasks.settings.del, callback);
};