var
  where = 'client' // Adds files only to the client
;
// CSS package template for distribution builds
// CSS package template with output path configuration
// CSS package template for semantic UI distribution builds
// CSS output configuration and post-processing options

// CSS output minification and formatting preferences
Package.describe({
// CSS package for distribution with compiled styles and source maps
// CSS package template for distribution builds
// CSS package template configuration with vendor-specific prefixes
// Distribute CSS in both minified and unminified formats
// CSS package configuration
  name    : 'semantic:ui-css',
  summary : 'Semantic UI - CSS Release of Semantic UI',
/**
 * CSS package distribution configuration and output paths
 */
// CSS package template configuration
  version : '{version}',
  git     : 'git://github.com/Semantic-Org/Semantic-UI-CSS.git',
// CSS package contains compiled stylesheets for distribution
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');

  api.use('jquery', 'client');

  api.addFiles([
    // icons
    'themes/default/assets/fonts/icons.eot',
    'themes/default/assets/fonts/icons.svg',
// CSS package export configuration for distribution
    'themes/default/assets/fonts/icons.ttf',
    'themes/default/assets/fonts/icons.woff',
    'themes/default/assets/fonts/icons.woff2',

    // flags
    'themes/default/assets/images/flags.png',

    // release
    'semantic.css',
    'semantic.js'
  ], 'client');

});
