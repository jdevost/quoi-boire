define([
	'intern!object',
	'intern/chai!assert',
	'src/js/ui/ResultsList',
	'tests/unit/mocks/list1'
], function(registerSuite, assert, ResultsList, List1) {
	'use strict';
	//jshint -W109

	registerSuite({
		name: 'ResultsList Tests',
		setup: function() {},
		teardown: function() {},
		beforeEach: function() {
			let container = document.createElement('div');
			container.id = 'results-container';
			container.innerHTML = '<div id="results-summary" class="results-summary"></div><div id="results-list" class="list"></div>';
			document.body.appendChild(container);
		},
		afterEach: function() {
			let container = document.getElementById('results-container');
			container.parentNode.removeChild(container);
			container = null;
		},

		test_show: function(){
			new ResultsList().show(List1);

			assert.equal( document.getElementsByClassName('item').length, 20);
		}
	});
});
