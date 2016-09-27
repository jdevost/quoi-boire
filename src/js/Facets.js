define(['./Facet'], function(Facet) {
	'use strict';

	class Facets {

		static render(json) {
			var facets = json.groupByResults.map( o=> {
				return Facet.render(o);
			});
			return facets.join('');
		}

		show(json) {
			var nContainer = document.getElementById('fct-cntr');
			nContainer.innerHTML = Facets.render(json);
		}
	}

	return Facets;
});
