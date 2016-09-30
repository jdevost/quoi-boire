define([
	'intern!object',
	'intern/chai!assert',
	'src/js/Util'
], function(registerSuite, assert, Util) {
	'use strict';

	registerSuite({
		name: 'Util Tests',
		setup: function() {},
		teardown: function() {},
		beforeEach: function() {},
		afterEach: function() {},

		testGetColorForPastille: function(){
			assert.equal( Util.getColorForPastille('Léger et floral.'), '#fedbac');
			assert.equal( Util.getColorForPastille('Fruité et vif.'), '#f8e622');

			assert.equal( Util.getColorForPastille('dummy'), null);
			assert.equal( Util.getColorForPastille(''), null);
			assert.equal( Util.getColorForPastille(null), null);
			assert.equal( Util.getColorForPastille(undefined), null);
		}
	});
});
