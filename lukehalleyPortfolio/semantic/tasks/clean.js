/*******************************
          Clean Task
/**
 * Removes generated build artifacts and temporary files
 * @param {Object} config - Cleanup configuration
 */
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