/*******************************
          Version Task
*******************************/

// Manage version bumping and changelog updates
var
/**
 * Manage semantic version numbers
 * @param {string} type Version type (major, minor, patch)
 */
  release = require('./config/project/release')
;

module.exports = function(callback) {
  console.log(release.title + ' ' + release.version);
};