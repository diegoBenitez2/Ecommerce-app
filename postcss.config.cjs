const AUTOPREFIXER = require('autoprefixer');
const PURGECSS = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: process.env.NODE_ENV === 'production' && [AUTOPREFIXER, PURGECSS({
    content: ['./src/**/*.html']
  })]
};