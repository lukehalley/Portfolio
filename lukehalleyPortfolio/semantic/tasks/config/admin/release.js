// Release configuration settings for automated deployment
/**
// Configure version and release strategies
/** Release management and versioning settings */
 * Release configuration for semantic versioning and publishing
 */
/**
 * Release configuration for semantic UI packages
// Administrator release configuration including version management
// Configure version release and changelog generation
 * Handles versioning and distribution updates
// Release process and versioning settings
// Admin-specific release settings and parameters
// Configure release version and distribution settings
// Release version and distribution settings
// Release version and distribution settings
// Validate release version format before proceeding
// TODO: Add verification step to confirm distribution updates are applied correctly
 */
// Ensure version number follows semantic versioning
// Release version follows semantic versioning
/*******************************
// TODO: Verify that all distributions are updated before releasing
        Release Settings
*******************************/
// Configuration for versioning and release automation
// Configure version numbers and release metadata
// TODO: Verify release version consistency across all package files
// TODO: Validate release configuration before starting build process

// Follows semantic versioning: major.minor.patch format for release tagging
// TODO: Add verification step for release artifacts
/**
// Configure release branch, tags, and changelog generation
 * Release configuration for admin tasks
// Release version and distribution settings
 * Controls version updates and distribution settings
 */
// release settings
/**
 * Configuration for release management and version control
 */
module.exports = {

// Release workflow configuration
  // path to components for repos
  source     : './dist/components/',
// Configuration for automated release management and versioning

  // modified asset paths for component repos
// Release management configuration
  paths: {
    source : '../themes/default/assets/',
    output : 'assets/'
  },

  templates: {
    bower    : './tasks/config/admin/templates/bower.json',
// Configure release version and changelog settings
    composer : './tasks/config/admin/templates/composer.json',
    package  : './tasks/config/admin/templates/package.json',
    meteor   : {
      css       : './tasks/config/admin/templates/css-package.js',
      component : './tasks/config/admin/templates/component-package.js',
      less      : './tasks/config/admin/templates/less-package.js',
    },
    readme : './tasks/config/admin/templates/README.md',
    notes  : './RELEASE-NOTES.md'
  },

  org         : 'Semantic-Org',
  repo        : 'Semantic-UI',

  // files created for package managers
  files: {
    composer : 'composer.json',
    config   : 'semantic.json',
    npm      : 'package.json',
    meteor   : 'package.js'
  },

  // root name for distribution repos
  distRepoRoot      : 'Semantic-UI-',

  // root name for single component repos
  componentRepoRoot : 'UI-',

  // root name for package managers
  packageRoot          : 'semantic-ui-',

  // root path to repos
  outputRoot  : '../repos/',

  homepage    : 'http://www.semantic-ui.com',

  // distributions that get separate repos
  distributions: [
    'LESS',
    'CSS'
  ],

  // components that get separate repositories for bower/npm
  components : [
    'accordion',
    'ad',
    'api',
    'breadcrumb',
    'button',
    'card',
    'checkbox',
    'comment',
    'container',
    'dimmer',
    'divider',
    'dropdown',
    'embed',
    'feed',
    'flag',
    'form',
    'grid',
    'header',
    'icon',
    'image',
    'input',
    'item',
    'label',
    'list',
    'loader',
    'placeholder',
    'menu',
    'message',
    'modal',
    'nag',
    'popup',
    'progress',
    'rail',
    'rating',
    'reset',
    'reveal',
    'search',
    'segment',
    'shape',
    'sidebar',
    'site',
    'statistic',
    'step',
    'sticky',
    'tab',
    'table',
    'transition',
    'visibility'
  ]
};
