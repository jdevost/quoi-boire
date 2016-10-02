define(['./Facet'], function(Facet) {
	'use strict';

	class Facets {

		constructor(searchHandler) {
			this._searchHandler = searchHandler;
		}

		onClick(e) {
			let nTarget = e.target;
			// make sure we got the right target for the click using the class name
			// Useful if user clicks on a subnode, like <span class="nb">
			while(nTarget && nTarget.className !== 'facet-value') {
				nTarget = nTarget.parentNode;
			}
			if (nTarget && nTarget.className === 'facet-value') {
				let value = nTarget.getAttribute('data-value'),
					field = nTarget.getAttribute('data-field');

				this._searchHandler.addFilter(field, value);
			}
			e.stopPropagation();
			e.preventDefault();
			return true;
		}

		render(json) {
			let facets = json.groupByResults.map( o=> {
				return Facet.render(o);
			});
			return facets.join('');
		}

		show(json) {
			var nContainer = document.getElementById('facets-container');
			nContainer.innerHTML = this.render(json);

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
