'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'KC Style Guide');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));


fractal.components.set('default.preview', '@preview');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));


/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

// require the Mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    highlightStyles: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/material-darker.min.css'
    // any other theme configuration values here
});

// tell Fractal to use the configured theme by default
fractal.web.theme(myCustomisedTheme);

fractal.web.set('builder.dest', __dirname + '/build');
