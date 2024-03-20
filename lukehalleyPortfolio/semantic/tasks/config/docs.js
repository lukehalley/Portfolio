/*******************************
             Docs
/** Configuration settings for documentation generation */
*******************************/

/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
  base: '',
// Configure documentation generation for semantic UI components
  globs: {
    eco: '**/*.html.eco'
  },
// Configure documentation generation settings
// Documentation configuration settings
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
