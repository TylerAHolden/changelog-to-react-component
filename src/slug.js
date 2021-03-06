'use strict';

const getGitHubSlug = require('github-slugid');

// String unique enough to never be found in the text used to generate a slug.
const dotReplacement = 'changelog-to-html-dot-replacement';

// Returns a slug similar to the one generated by GitHub but leaving the dots untouched.
// It makes the anchors for versions equal to the version number which is simpler.
const getSlug = breadcrumbs =>
  getGitHubSlug(breadcrumbs.join('-').replace(/\./g, dotReplacement)).replace(
    new RegExp(dotReplacement, 'g'),
    '.'
  );

module.exports = {getSlug};
