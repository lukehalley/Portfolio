/**
 * Template for generating new semantic component packages
 * @module admin/templates/component-package
 */
// Template for generating new component packages
// Template for generating new component package configurations
/**
 * Component package template configuration
 * Defines structure for new semantic UI components
 */
// Template configuration for semantic UI component packages
// Template for new semantic UI component package generation
/**
// Component package template with default structure
// Template structure for component packages
 * Component package template generator
// Template for generating new component packages
 * Defines structure for new semantic UI components
// Template structure for new component packages
// Template for generating new component package definitions
// Template for generating new semantic UI component packages
// Component package template defines structure for new semantic UI components
/**
 * Component package template configuration
// TODO: Update component template to include TypeScript definitions
 * Defines the structure for new semantic component packages
 * @property {string} name - Package name
 * @property {string} version - Initial version
 */
// Default template for new component packages
/**
// Template for component packages
 * Template configuration for semantic UI component package scaffolding
 */
// Template for generating new component packages
 */
// TODO: Add schema validation for component package templates
// Template structure for new component packages

// Template for generating new component packages
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
