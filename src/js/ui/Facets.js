define(['./Facet'], function(Facet) {
	'use strict';

	/**
	 * UI Class to show all Facets.
	 * @class
	 */
	class Facets {

		constructor(page) {
			this._pageHandler = page;
		}

		/**
		 * Click handler set on a value within a facet. Add the value to the filters.
		 * @param {event} e mouse click event
		 */
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

				this._pageHandler.addFilter(field, value);
			}
			e.stopPropagation();
			e.preventDefault();
			return true;
		}

		/**
		 * Contructs the HTML for all facets.
		 * @param {object} facetsJson Json Representation of the facets to render.
		 * @returns {string} HTML string
		 */
		render(facetsJson) {
			let facets = facetsJson.groupByResults.map( facetJson=> {
				return Facet.render(facetJson);
			});
			return facets.join('');
		}

		/**
		 * Show/update all facets in the UI.
		 * @param {object} facetsJson Json Representation of the facets to render.
		 * @returns {string} HTML string
		 */
		show(facetsJson) {
			var nContainer = document.getElementById('facets-container');
			nContainer.innerHTML = this.render(facetsJson);

			// Set up click events for the facets, to trigger the filters when choosing a facet value
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
