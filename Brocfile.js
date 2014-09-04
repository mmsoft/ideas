/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/foundation/css/normalize.css');
app.import('vendor/foundation/css/foundation.css');
app.import('vendor/foundation-icon-fonts/foundation-icons.css');
app.import('vendor/foundation-icon-fonts/foundation-icons.eot', {
	destDir: '/fonts'
});
app.import('vendor/foundation-icon-fonts/foundation-icons.svg', {
	destDir: '/fonts'
});
app.import('vendor/foundation-icon-fonts/foundation-icons.ttf', {
	destDir: '/fonts'
});
app.import('vendor/foundation-icon-fonts/foundation-icons.woff', {
	destDir: '/fonts'
});


app.import('vendor/modernizr/modernizr.js')
app.import('vendor/foundation/js/foundation.js');

app.import('vendor/firebase/firebase-debug.js');
app.import('vendor/emberfire/dist/emberfire.js');


module.exports = app.toTree();