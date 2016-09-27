define([
	'intern!object',
	'intern/chai!assert',
	'src/js/Facet'
], function(registerSuite, assert, Facet) {
	'use strict';
	//jshint -W109

	registerSuite({
		name: 'Facet Tests',
		setup: function() {},
		teardown: function() {},
		beforeEach: function() {},
		afterEach: function() {},

		test_sortPrixBande: function(){
			assert.deepEqual( Facet._sortPrixBande([
					{"value":"0$ - 10$","lookupValue":"0$ - 10$","numberOfResults":21,"score":7014666,"valueType":"Standard","Value":"0$ - 10$","LookupValue":"0$ - 10$","NumberOfResults":21,"Score":7014666,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"100$ - 250$","lookupValue":"100$ - 250$","numberOfResults":98,"score":3076729,"valueType":"Standard","Value":"100$ - 250$","LookupValue":"100$ - 250$","NumberOfResults":98,"Score":3076729,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"15$ - 20$","lookupValue":"15$ - 20$","numberOfResults":208,"score":15194840,"valueType":"Standard","Value":"15$ - 20$","LookupValue":"15$ - 20$","NumberOfResults":208,"Score":15194840,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"20$ - 30$","lookupValue":"20$ - 30$","numberOfResults":318,"score":13395208,"valueType":"Standard","Value":"20$ - 30$","LookupValue":"20$ - 30$","NumberOfResults":318,"Score":13395208,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"250$ - 500$","lookupValue":"250$ - 500$","numberOfResults":44,"score":599559,"valueType":"Standard","Value":"250$ - 500$","LookupValue":"250$ - 500$","NumberOfResults":44,"Score":599559,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"30$ - 40$","lookupValue":"30$ - 40$","numberOfResults":121,"score":3654731,"valueType":"Standard","Value":"30$ - 40$","LookupValue":"30$ - 40$","NumberOfResults":121,"Score":3654731,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"40$ - 50$","lookupValue":"40$ - 50$","numberOfResults":67,"score":4570698,"valueType":"Standard","Value":"40$ - 50$","LookupValue":"40$ - 50$","NumberOfResults":67,"Score":4570698,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"50$ - 75$","lookupValue":"50$ - 75$","numberOfResults":106,"score":21013739,"valueType":"Standard","Value":"50$ - 75$","LookupValue":"50$ - 75$","NumberOfResults":106,"Score":21013739,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"500$ - 1000$","lookupValue":"500$ - 1000$","numberOfResults":15,"score":474325,"valueType":"Standard","Value":"500$ - 1000$","LookupValue":"500$ - 1000$","NumberOfResults":15,"Score":474325,"computedFieldResults":[],"ComputedFieldResults":[]}
				]),
				[
					{"value":"0$ - 10$","lookupValue":"0$ - 10$","numberOfResults":21,"score":7014666,"valueType":"Standard","Value":"0$ - 10$","LookupValue":"0$ - 10$","NumberOfResults":21,"Score":7014666,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"15$ - 20$","lookupValue":"15$ - 20$","numberOfResults":208,"score":15194840,"valueType":"Standard","Value":"15$ - 20$","LookupValue":"15$ - 20$","NumberOfResults":208,"Score":15194840,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"20$ - 30$","lookupValue":"20$ - 30$","numberOfResults":318,"score":13395208,"valueType":"Standard","Value":"20$ - 30$","LookupValue":"20$ - 30$","NumberOfResults":318,"Score":13395208,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"30$ - 40$","lookupValue":"30$ - 40$","numberOfResults":121,"score":3654731,"valueType":"Standard","Value":"30$ - 40$","LookupValue":"30$ - 40$","NumberOfResults":121,"Score":3654731,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"40$ - 50$","lookupValue":"40$ - 50$","numberOfResults":67,"score":4570698,"valueType":"Standard","Value":"40$ - 50$","LookupValue":"40$ - 50$","NumberOfResults":67,"Score":4570698,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"50$ - 75$","lookupValue":"50$ - 75$","numberOfResults":106,"score":21013739,"valueType":"Standard","Value":"50$ - 75$","LookupValue":"50$ - 75$","NumberOfResults":106,"Score":21013739,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"100$ - 250$","lookupValue":"100$ - 250$","numberOfResults":98,"score":3076729,"valueType":"Standard","Value":"100$ - 250$","LookupValue":"100$ - 250$","NumberOfResults":98,"Score":3076729,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"250$ - 500$","lookupValue":"250$ - 500$","numberOfResults":44,"score":599559,"valueType":"Standard","Value":"250$ - 500$","LookupValue":"250$ - 500$","NumberOfResults":44,"Score":599559,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"500$ - 1000$","lookupValue":"500$ - 1000$","numberOfResults":15,"score":474325,"valueType":"Standard","Value":"500$ - 1000$","LookupValue":"500$ - 1000$","NumberOfResults":15,"Score":474325,"computedFieldResults":[],"ComputedFieldResults":[]}
				]
			);

			assert.deepEqual( Facet._sortPrixBande([
					{"value":"0$ - 10$","lookupValue":"0$ - 10$","numberOfResults":21,"score":7014666,"valueType":"Standard","Value":"0$ - 10$","LookupValue":"0$ - 10$","NumberOfResults":21,"Score":7014666,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"15$ - 20$","lookupValue":"15$ - 20$","numberOfResults":208,"score":15194840,"valueType":"Standard","Value":"15$ - 20$","LookupValue":"15$ - 20$","NumberOfResults":208,"Score":15194840,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"20$ - 30$","lookupValue":"20$ - 30$","numberOfResults":318,"score":13395208,"valueType":"Standard","Value":"20$ - 30$","LookupValue":"20$ - 30$","NumberOfResults":318,"Score":13395208,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]}
				]),
				[
					{"value":"0$ - 10$","lookupValue":"0$ - 10$","numberOfResults":21,"score":7014666,"valueType":"Standard","Value":"0$ - 10$","LookupValue":"0$ - 10$","NumberOfResults":21,"Score":7014666,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"15$ - 20$","lookupValue":"15$ - 20$","numberOfResults":208,"score":15194840,"valueType":"Standard","Value":"15$ - 20$","LookupValue":"15$ - 20$","NumberOfResults":208,"Score":15194840,"computedFieldResults":[],"ComputedFieldResults":[]},
					{"value":"20$ - 30$","lookupValue":"20$ - 30$","numberOfResults":318,"score":13395208,"valueType":"Standard","Value":"20$ - 30$","LookupValue":"20$ - 30$","NumberOfResults":318,"Score":13395208,"computedFieldResults":[],"ComputedFieldResults":[]}
				]
			);
		}
	});
});
