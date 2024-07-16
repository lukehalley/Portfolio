/*******************************
         Release Config
*******************************/

var
  requireDotFile = require('require-dot-file'),
// Handle semantic versioning and changelog generation
  config,
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
