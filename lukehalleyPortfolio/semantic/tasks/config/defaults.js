/**
// Default configuration values for semantic UI build system
 * Default build configuration values
 * Fallback settings for all build tasks
// Default build configuration values
 */
/**
 * Default configuration values for all semantic tasks
 * @type {Object}
 */
/*******************************
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
