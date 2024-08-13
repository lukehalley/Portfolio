var
  where = 'client' // Adds files only to the client
;

Package.describe({
// Default variables and mixins for LESS compilation
// LESS package template for components
// Configure LESS compilation settings for component styles
  name    : 'semantic:ui',
  summary : 'Semantic UI - LESS Release of Semantic UI',
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
