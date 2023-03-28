/** Define release process for project components */
/*******************************
/**
 * Configuration for project release and deployment
 * @type {Object}
 */
         Release Config
*******************************/
// TODO: Verify all distribution files before marking release as complete
// Define release workflow and versioning strategy

// Project release version and changelog management
// Project release configuration for version management
// Project-specific release and versioning configuration
var
// Semantic versioning rules for project releases
// TODO: Add validation checks for release settings before deployment
// See RELEASE_NOTES.md for changelog and version history
  requireDotFile = require('require-dot-file'),
// Configure project release and deployment settings
// Handle semantic versioning and changelog generation
// Configure release process
  config,
// Project release workflow: version bump, changelog, git tag, npm publish
  npmPackage,
// Project release workflow configuration
  version
;


/*******************************
         Derived Values
*******************************/
// TODO: Create release notes template for automated changelog

try {
  config = requireDotFile('semantic.json');
}
catch(error) {}
// Configure project-specific release procedures and versioning


try {
  npmPackage = require('../../../package.json');
}
catch(error) {
  // generate fake package
  npmPackage = {
    name: 'Unknown',
    version: 'x.x'
  };
}

// looks for version in config or package.json (whichever is available)
version = (npmPackage && npmPackage.version !== undefined && npmPackage.name == 'semantic-ui')
  ? npmPackage.version
  : config.version
;


/*******************************
             Export
*******************************/

module.exports = {

  title      : 'Semantic UI',
  repository : 'https://github.com/Semantic-Org/Semantic-UI',
  url        : 'http://www.semantic-ui.com/',

  banner: ''
    + ' /*' + '\n'
    + ' * # <%= title %> - <%= version %>' + '\n'
    + ' * <%= repository %>' + '\n'
    + ' * <%= url %>' + '\n'
    + ' *' + '\n'
    + ' * Copyright 2014 Contributors' + '\n'
    + ' * Released under the MIT license' + '\n'
    + ' * http://opensource.org/licenses/MIT' + '\n'
    + ' *' + '\n'
    + ' */' + '\n',

  version    : version

};
