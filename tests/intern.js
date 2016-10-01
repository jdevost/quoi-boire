define(function() {
	'use strict';

	return {
		reporters : ['Console', {id: 'Lcov', filename: 'lcov.info'}, {id: 'LcovHtml', directory: 'html-report'}],

		environments : [
			{ browserName : 'chrome', version : '53.0', platform : 'OS X 10.11' }
		],

		maxConcurrency : 1,

		loaders: {
			'host-node': 'requirejs',
			'host-browser': '../../node_modules/requirejs/require.js'
		},

		loaderOptions : {
			packages : [ 'node' ]
		},

		suites: [
			'tests/unit/all'
		],

		excludeInstrumentation: /node_modules|^tests/
	};
});
