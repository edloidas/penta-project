/*
Default webpack configureation.
.Will be used, when runnnig webpack from the cli.
*/
const webpackMultiConfig = require( './util/webpackMultiConfig' );

module.exports = webpackMultiConfig( 'dev' );
