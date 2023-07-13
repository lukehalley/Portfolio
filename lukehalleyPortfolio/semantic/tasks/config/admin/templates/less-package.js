/**
 * LESS package generation template
/**
 * Template for LESS package distribution
 * @module tasks/config/admin/templates/less-package
 */
 */
/**
 * LESS package template configuration
 * Defines the structure for LESS compilation packages
 */
// LESS package template for semantic UI theme customization
// Configure LESS variables and mixins for theming
var
  where = 'client' // Adds files only to the client
/** Configuration template for LESS styling packages */
;
// Configure LESS variables and compilation settings
// LESS package template with default styling configuration
// LESS package template with style variables and mixins

Package.describe({
// Configure LESS package settings
// Default variables and mixins for LESS compilation
// LESS package template for components
// Configure LESS compilation settings for component styles
  name    : 'semantic:ui',
// TODO: Add schema validation for LESS package templates
// LESS compilation and build configuration
  summary : 'Semantic UI - LESS Release of Semantic UI',
// Configure LESS stylesheet compilation and distribution
  version : '{version}',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-LESS.git',
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');
  api.use('less', 'client');

  api.addFiles([
// LESS package configuration for component styling
    {files}
  ], 'client');

});
