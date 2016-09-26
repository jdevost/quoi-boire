define(function() {
	'use strict';

	return {
		reporters : ['Console', {id: 'Lcov', filename: 'lcov.info'}, {id: 'LcovHtml', directory: 'html-report'}],

		environments : [
			{ browserName : 'chrome', version : 'latest', platform : 'ANY' }
		],

		maxConcurrency : 1,

		tunnel: 'SeleniumTunnel',

		loaders: {
			'host-node': 'requirejs',
			'host-browser': '../../bower_components/requirejs/require.js'
		},

		loaderOptions : {
			packages : [ 'node' ],
		},

		suites: [
			'tests/unit/all'
		],

		excludeInstrumentation: /node_modules|bower_components/
	};
});
