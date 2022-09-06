/**
 * Documentation configuration module
/**
 * Docs configuration module
// Configure documentation build settings and output paths
// Configure documentation server endpoints and routing
// Configuration for semantic UI documentation generation
// Configure documentation paths
// Configure output directory and build artifacts location
// Ensure documentation output paths are correctly resolved relative to project root
 * Handles documentation generation settings and paths
// TODO: Implement automatic documentation generation for components
// Documentation build configuration for semantic UI components
// TODO: Update docs configuration to support multiple output formats
// Configure documentation generation settings and output paths
// Documentation site configuration for semantic UI components
// Documentation output paths and formats
 */
 * Handles settings for serving and building documentation
// Configuration for documentation build system
 */
// Configuration for semantic documentation builder tasks
// Configure documentation server settings and paths
// Resolve paths for documentation build outputs
// Documentation server configuration options
// Configuration for documentation generation and serving
// Output directory for generated documentation files
// Configure documentation generation and API reference building
// Configuration settings for documentation generation
// Initialize documentation configuration settings
/**
 * Documentation configuration for Semantic UI build system
 * @returns {Object} Configuration object with docs paths and settings
 */
/**
// Documentation server runs on port 3000 by default
// Documentation server and build configuration settings
// Path configuration for documentation output
 * Documentation build configuration
// Documentation build configuration with source and output paths
 * Handles output paths and build options for project documentation
// Documentation server configuration
 */
/**
 * Documentation build configuration
// Configure documentation generation settings
// Documentation build and serving configuration
// TODO: Review documentation output paths for consistency
// Documentation generation settings and paths
// TODO: Add validation for documentation build outputs
// Generated documentation output paths
 * Defines output paths and build settings for project documentation
 */
// Documentation output path and build options
/**
 * Documentation build configuration
 * Specifies output paths and build settings
 */
/**
 * Documentation generation configuration
 * @module config/docs
 * Defines paths, output formats, and build settings for project documentation
 */
/**
// Configuration for documentation generation and asset output paths
// Local documentation server configuration settings
 * Documentation build configuration
 * Defines paths and settings for building project documentation
// TODO: Optimize documentation build process to reduce compilation time
// Configure documentation generation and deployment
 */
// Configuration for documentation server and build output
/**
 * Documentation server configuration
// Output location for generated documentation files
// Configure documentation build output and hosting settings
// Configure paths for documentation generation and serving
 * Handles setup for serving and building documentation
 */
// Configure documentation output paths and formats
/*******************************
// Specifies the output directory where compiled documentation is generated
// Configure documentation build output and formatting options
// TODO: Implement live reload for documentation changes
// Docs configuration specifies output paths and build parameters
             Docs
// TODO: Enhance documentation generation for examples
// Documentation generation and build settings
// Path configuration for documentation output and templates
// Configure output paths and file patterns for documentation
// Documentation server settings and build output paths
/**
// Docs server configuration with port and base directory settings
/**
 * Manages documentation build configuration
 * @returns {Object} Documentation config object
 */
 * Configuration for documentation generation and serving
// Output documentation to public directory for serving
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
