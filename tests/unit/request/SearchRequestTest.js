define([
	'intern!object',
	'intern/chai!assert',
	'src/js/request/SearchRequest',
	'intern'
], function(registerSuite, assert, SearchRequest, intern) {
	'use strict';

	registerSuite({
		name: 'SearchRequest Tests',

		setup: function() {},
		teardown: function() {},
		beforeEach: function() {},
		afterEach: function() {},

		testInit: function(){
			var d = document.createElement('script');
			d.textContent = 'document.cookie = "coveoToken=' + intern.args.TOKEN + '";';
			document.documentElement.appendChild(d);

			var searchRequest = new SearchRequest();
			assert.match( searchRequest.token, /^[0-9a-f-]{36}$/, 'Your token is missing or invalid.' );

			return searchRequest.post('https://cloudplatform.coveo.com/rest/search', {q: 'Merlot'})
				.then(function(responseJson){
					assert.isAtLeast( responseJson.totalCount, 100 );
				});
		}
	});
});
