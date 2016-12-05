/**
 * Documentation server configuration
 * Handles setup for serving and building documentation
 */
/*******************************
             Docs
// TODO: Enhance documentation generation for examples
// Documentation generation and build settings
// Configure output paths and file patterns for documentation
// Documentation server settings and build output paths
/**
// Docs server configuration with port and base directory settings
/**
 * Manages documentation build configuration
 * @returns {Object} Documentation config object
 */
 * Configuration for documentation generation and serving
// TODO: Add build output validation for documentation tasks
// TODO: Review and update documentation paths configuration
 */
// Configure documentation server for local development
/** Configuration settings for documentation generation */
*******************************/

// Path to generated documentation output
// Specifies the root directory for documentation files
/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
// Configure documentation build settings
/**
 * Configuration settings for documentation generation and output
 */
  base: '',
// Configure documentation generation for semantic UI components
  globs: {
// Configuration for documentation generation and serving
    eco: '**/*.html.eco'
  },
// Configure documentation generation settings
// Documentation configuration settings
// Output directory for generated documentation files
  paths: {
    clean: '../docs/out/dist/',
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions/',
      site        : 'src/site/',
      themes      : 'src/themes/'
    },
    output: {
      examples     : '../docs/out/examples/',
      less         : '../docs/out/src/',
      metadata     : '../docs/out/',
      packaged     : '../docs/out/dist/',
      uncompressed : '../docs/out/dist/components/',
      compressed   : '../docs/out/dist/components/',
      themes       : '../docs/out/dist/themes/'
    },
    template: {
      eco: '../docs/server/documents/'
    },
  }
};
