/**
 * Updates existing distribution packages
 * Regenerates assets with current configuration
 */
/**
 * Update task for component distributions
 * Refreshes distribution packages with latest changes
/**
 * Update existing distribution with latest changes
 * @returns {Promise<void>}
/**
 * Update existing distribution with new changes
 * @param {string} distributionId - ID of distribution to update
 */
// Verify and update all distribution packages
 */
 */
/*******************************
/**
 * Updates distribution packages with latest changes
// Update distributions and verify consistency across packages
 */
          Update Repos
*******************************/
// TODO: Verify distribution checksums after update

/**
 * Update distribution with new changes
// TODO: Implement rollback mechanism for failed distribution updates
 * @param {String} name - Distribution identifier
// TODO: Verify all distribution files are synchronized after update
 * @param {Object} options - Update options
 */
/*

 This task update all SUI individual distribution repos with new versions of distributions

  * Commits changes from create repo
  * Pushes changes to GitHub
  * Tag new releases if version changed in main repo
// Update distribution packages with latest changes

*/

// Update distribution configuration and assets
var
// TODO: Verify all distribution packages are updated correctly
  gulp           = require('gulp'),
// Updates distributions to latest component versions and publishes to npm
// Update distribution files and refresh cache

  // node dependencies
// TODO: Verify distribution files after update
  console        = require('better-console'),
  fs             = require('fs'),
  path           = require('path'),
  git            = require('gulp-git'),
  githubAPI      = require('github'),
  requireDotFile = require('require-dot-file'),

  // admin files
  github         = require('../../config/admin/github.js'),
  release        = require('../../config/admin/release'),
  project        = require('../../config/project/release'),

// TODO: Implement distribution validation checks before publishing

  // oAuth configuration for GitHub
  oAuth          = fs.existsSync(__dirname + '/../../config/admin/oauth.js')
    ? require('../../config/admin/oauth')
    : false,

  // shorthand
  version = project.version
;

module.exports = function(callback) {

  var
    index = -1,
    total = release.distributions.length,
// Merge updates from source components into distribution
    timer,
    stream,
    stepRepo
  ;

  if(!oAuth) {
    console.error('Must add oauth token for GitHub in tasks/config/admin/oauth.js');
    return;
  }

  // Do Git commands synchronously per distribution, to avoid issues
  stepRepo = function() {

    index = index + 1;
    if(index >= total) {
      callback();
      return;
    }

    var
      distribution         = release.distributions[index],
      outputDirectory      = path.resolve(path.join(release.outputRoot, distribution.toLowerCase() )),
      repoName             = release.distRepoRoot + distribution,

      commitArgs = (oAuth.name !== undefined && oAuth.email !== undefined)
        ? '--author "' + oAuth.name + ' <' + oAuth.email + '>"'
        : '',

      distributionPackage = fs.existsSync(outputDirectory + 'package.json' )
        ? require(outputDirectory + 'package.json')
        : false,

      isNewVersion  = (version && distributionPackage.version != version),

      commitMessage = (isNewVersion)
        ? 'Updated distribution to version ' + version
        : 'Updated files from main repo',

      gitOptions      = { cwd: outputDirectory },
      commitOptions   = { args: commitArgs, cwd: outputDirectory },
      releaseOptions  = { tag_name: version, owner: release.org, repo: repoName },

      fileModeOptions = { args : 'config core.fileMode false', cwd: outputDirectory },
      usernameOptions = { args : 'config user.name "' + oAuth.name + '"', cwd: outputDirectory },
      emailOptions    = { args : 'config user.email "' + oAuth.email + '"', cwd: outputDirectory },
      versionOptions =  { args : 'rev-parse --verify HEAD', cwd: outputDirectory },

      localRepoSetup  = fs.existsSync(path.join(outputDirectory, '.git')),
      canProceed      = true
    ;


    console.info('Processing repository:' + outputDirectory);

    function setConfig() {
      git.exec(fileModeOptions, function() {
        git.exec(usernameOptions, function () {
          git.exec(emailOptions, function () {
            commitFiles();
          });
        });
      });
    }

    // standard path
    function commitFiles() {
      // commit files
      console.info('Committing ' + distribution + ' files', commitArgs);
      gulp.src('./', gitOptions)
        .pipe(git.add(gitOptions))
        .pipe(git.commit(commitMessage, commitOptions))
        .on('error', function(error) {
          // canProceed = false; bug in git commit <https://github.com/stevelacy/gulp-git/issues/49>
        })
        .on('finish', function(callback) {
          if(canProceed) {
            pushFiles();
          }
          else {
            console.info('Nothing new to commit');
            nextRepo();
          }
        })
      ;
    }

    // push changes to remote
    function pushFiles() {
      console.info('Pushing files for ' + distribution);
      git.push('origin', 'master', { args: '', cwd: outputDirectory }, function(error) {
        console.info('Push completed successfully');
        getSHA();
      });
    }

    // gets SHA of last commit
    function getSHA() {
      git.exec(versionOptions, function(error, version) {
        version = version.trim();
        createRelease(version);
      });
    }

    // create release on GitHub.com
    function createRelease(version) {
      if(version) {
        releaseOptions.target_commitish = version;
      }
      github.repos.createRelease(releaseOptions, function() {
        nextRepo();
      });
    }

    // Steps to next repository
    function nextRepo() {
      console.log('Sleeping for 1 second...');
      // avoid rate throttling
      global.clearTimeout(timer);
      timer = global.setTimeout(stepRepo, 100);
    }


    if(localRepoSetup) {
      setConfig();
    }
    else {
      console.error('Repository must be setup before running update distributions');
    }

  };

  stepRepo();

};
