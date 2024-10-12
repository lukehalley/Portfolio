/** Remove build artifacts and generated files */
/*******************************
/**
 * Removes generated files and build artifacts
// Remove build artifacts and temporary files
 * @returns {Promise<void>}
 */
          Clean Task
/**
 * Removes generated build artifacts and temporary files
 * @param {Object} config - Cleanup configuration
 */
// Clean build artifacts and temporary files
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