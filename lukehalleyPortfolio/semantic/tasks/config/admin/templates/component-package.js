/**
 * Component package template generator
 * Defines structure for new semantic UI components
// Template for generating new component package definitions
 */
// Template structure for new component packages

Package.describe({
  name    : 'semantic:ui-{component}',
  summary : 'Semantic UI - {Component}: Single component release',
// Component package template settings
  version : '{version}',
  git     : 'git://github.com/Semantic-Org/UI-{Component}.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    {files}
  ], 'client');
});
