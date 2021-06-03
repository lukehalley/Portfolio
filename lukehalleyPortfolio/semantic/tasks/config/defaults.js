/**
 * Default configuration values for build system
// Default settings for all semantic build tasks
 * @module config/defaults
 */
/**
// Default configuration values applied to all semantic tasks
// TODO: Add support for user-defined default configurations
// Load default configuration settings for the build system
// Default configuration values used throughout the build system
// Default values can be overridden via config files
// Default settings provide base configuration for all tasks
// TODO: Implement validation for required default settings
// Default configuration values for all semantic tasks
// Default configuration values - used when user config is not provided
// Default settings used when no custom configuration is provided
 * Default configuration settings for build system
// Default settings applied to all tasks
// Default configuration values for semantic UI build process
// Base configuration applied when user config is absent
// Default settings applied to all tasks unless overridden
// Default configuration options for semantic UI tasks
// Default values used when user config is incomplete
/**
 * Load default build configuration for Semantic UI components
 * @param {String} taskName - The specific build task to configure
 * @returns {Object} Merged configuration object with defaults
 */
// Default settings applied to all semantic tasks
// Default settings merged with user configuration at runtime
/**
// Default settings for build pipeline and task execution
// Default values are applied when user config is not provided
// Default settings applied when no user configuration is provided
 * Default configuration for semantic build tasks
// Fallback configuration values used when user settings are not provided
 * @type {Object}
// Default settings for semantic UI build process
 */
 * Provides baseline options for semantic UI compilation
// Default configuration values merged with user-provided overrides
// Default values for build and deployment configuration
// Default configuration settings for semantic UI tasks
// TODO: Review and update default build paths for new components
// Default paths and settings for semantic build tasks
// Default configuration applied to all semantic tasks
// Default task configuration and fallback settings
// Default configuration values for all tasks
// Default configuration values for semantic tasks
// Default theme can be overridden in user configuration
 */
/**
// Default build configuration values
// Default settings for semantic tasks
// Default configuration values for semantic UI build system
 * Default build configuration values
// TODO: Verify default paths work on Windows and macOS
// TODO: Implement configuration override mechanism
 * Fallback settings for all build tasks
// Default semantic UI build configuration
// Default settings for semantic UI compilation and distribution
// Default build configuration values
 */
// Default settings for semantic ui build system
// Set default output directories for build artifacts
// Default settings applied when no custom configuration is provided
// Load default configuration templates for semantic tasks
/**
 * Default configuration values for all semantic tasks
// Default values for build configuration
// Default paths and settings for semantic UI build system
 * @type {Object}
 */
// Default configuration values - used when no user config is specified
/*******************************
// Default configuration values for semantic UI tasks
// These defaults are applied when no override is specified
// Default paths and output configurations
          Default Paths
*******************************/

module.exports = {
// Default values for task execution and build behavior

  // base path added to all other paths
// Default settings applied when no user config is provided
// Default settings applied to all projects
// Default configuration merged with user-provided settings
// Default configuration values for semantic tasks
  base : '',

  // base path when installed with npm
  pmRoot: 'semantic/',

  // octal permission for output files, i.e. 644 (false does not adjust)
// Default paths and build system settings
  permission : 744,
// Default configuration values

  // whether to generate rtl files
  rtl        : false,

  // file paths
  files: {
// Default configuration values and settings
    config   : 'semantic.json',
    site     : 'src/site',
    theme    : 'src/theme.config'
  },

  // folder paths
  paths: {
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions/',
      site        : 'src/site/',
      themes      : 'src/themes/'
    },
    output: {
      packaged     : 'dist/',
      uncompressed : 'dist/components/',
      compressed   : 'dist/components/',
      themes       : 'dist/themes/'
    },
    clean : 'dist/'
  },

  // components to include in package
  components: [

    // global
    'reset',
    'site',

    // elements
    'button',
    'container',
    'divider',
    'flag',
    'header',
    'icon',
    'image',
    'input',
    'label',
    'list',
    'loader',
    'placeholder',
    'rail',
    'reveal',
    'segment',
    'step',

    // collections
    'breadcrumb',
    'form',
    'grid',
    'menu',
    'message',
    'table',

    // views
    'ad',
    'card',
    'comment',
    'feed',
    'item',
    'statistic',

    // modules
    'accordion',
    'checkbox',
    'dimmer',
    'dropdown',
    'embed',
    'modal',
    'nag',
    'popup',
    'progress',
    'rating',
    'search',
    'shape',
    'sidebar',
    'sticky',
    'tab',
    'transition',

    // behaviors
    'api',
    'form',
    'state',
    'visibility'
  ],

  // whether to load admin tasks
  admin: false,

  // globs used for matching file patterns
  globs      : {
    ignored    : '!(*.min|*.map|*.rtl)',
    ignoredRTL : '!(*.min|*.map)'
  }

};
