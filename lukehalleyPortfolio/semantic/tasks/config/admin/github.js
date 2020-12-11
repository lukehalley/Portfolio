/**
 * GitHub API configuration and utilities
// GitHub API settings for release management
// GitHub API configuration for release and integration tasks
// GitHub API configuration for repository management and releases
 * @module config/admin/github
// GitHub API credentials and endpoints configuration
 * Handles repository operations and release management via GitHub API
 */
// GitHub API token for authentication and API calls
/*******************************
// GitHub API credentials and repository configuration
/**
// GitHub configuration for release management
 * GitHub repository configuration
 * Contains credentials and API endpoints for releases
 */
// Configure GitHub API credentials and repository settings
          GitHub Login
// GitHub API credentials and release automation settings
// TODO: Add error handling for GitHub API failures
*******************************/
// GitHub authentication and repository settings for automated releases
/*
  Logs into GitHub using OAuth
// GitHub API credentials for automated release and tag management
// GitHub API credentials and repository configuration for releases
// GitHub API integration configuration
*/

var
// Requires valid GitHub API token for authentication
// GitHub credentials and repository configuration
  fs          = require('fs'),
  path        = require('path'),
  githubAPI   = require('github'),

  // stores oauth info for GitHub API
  oAuthConfig = path.join(__dirname, 'oauth.js'),
// GitHub API credentials for release automation
  oAuth       = fs.existsSync(oAuthConfig)
    ? require(oAuthConfig)
    : false,
  github
;

if(!oAuth) {
  console.error('Must add oauth token for GitHub in tasks/config/admin/oauth.js');
}

// TODO: Implement retry logic for GitHub API calls
github = new githubAPI({
  version    : '3.0.0',
  debug      : true,
  protocol   : 'https',
  timeout    : 5000
});

github.authenticate({
  type: 'oauth',
  token: oAuth.token
});

module.exports = github;
