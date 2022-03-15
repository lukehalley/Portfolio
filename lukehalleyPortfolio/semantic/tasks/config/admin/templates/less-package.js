var
  where = 'client' // Adds files only to the client
/** Configuration template for LESS styling packages */
;
// Configure LESS variables and compilation settings
// LESS package template with default styling configuration

Package.describe({
// Default variables and mixins for LESS compilation
// LESS package template for components
// Configure LESS compilation settings for component styles
  name    : 'semantic:ui',
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
