define(['./Facet'], function(Facet) {
	'use strict';

	class Facets {

		constructor(searchHandler) {
			this._searchHandler = searchHandler;
		}

		static render(json) {
			let facets = json.groupByResults.map( o=> {
				return Facet.render(o);
			});
			return facets.join('');
		}

		onClick(e) {
			let nTarget = e.target;
			if (nTarget.className === 'facet-value') {
				let value = nTarget.getAttribute('data-lookup'),
					field = nTarget.parentNode.getAttribute('data-lookup');

				this._searchHandler.addFilter(field, value);
			}
		}

		show(json) {
			var nContainer = document.getElementById('fct-cntr');
			nContainer.innerHTML = Facets.render(json);

			// Can't use forEach on a HTMLCollection, do the old for()
			let aFacets = nContainer.getElementsByClassName('facet');
			for (let i=0; i<aFacets.length; i++) {
				// Set up click events on facets
				aFacets[i].addEventListener('click', this.onClick.bind(this));
			}
		}
	}

	return Facets;
});
