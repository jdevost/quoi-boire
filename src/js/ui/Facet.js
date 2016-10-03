define(['../Util'], function(Util) {
	'use strict';

	/**
	 * UI Class to show a Facet and its values.
	 * @class
	 */
	class Facet {

		/**
		 * Compare function for strings that are actually numbers.
		 * Numbers as strings won't be sorted properly, you will get 0, 1, 10, 100, 2.
		 * Useful for Price ranges (Prix Bande)
		 * @param {string[]} values Array of strings (which represents numbers) to sort
		 * @returns {string[]} Array of strings sorted as if they were numbers.
		 */
		static _sortPrixBande(values) {
			return values.sort((_a,_b)=>{
				let a = parseInt(_a.value,10), b = parseInt(_b.value,10);
				if (a < b) {
					return -1;
				}
				else if (a > b) {
					return 1;
				}
				return 0;
			});
		}

		/**
		 * Adds an attribute 'pastille' for the color of the pastille (taste tag) to use in a field values object.
		 * @param {object[]} values Array of json objects (values) for the field 'tppastilledegout'.
		 * @returns {object[]} Array of json objects.
		 */
		static _addPastilleColor(values) {
			return values.map((valueJson)=>{
				valueJson.pastille = Util.getColorForPastille(valueJson.value);
				return valueJson;
			});
		}

		/**
		 * Contructs the HTML used for all the values of a facet.
		 * @param {object} facetJson Json Representation of the facet to render.
		 * @param {object[]} filterValues currently selected values. Used to set the checkbox if already selected.
		 * @returns {string} HTML string
		 */
		static render(facetJson, filterValues) {
			let fieldName = facetJson.field;
			if (fieldName === 'tpprixbande') {
				facetJson.values = this._sortPrixBande(facetJson.values);
			}
			else if (fieldName === 'tppastilledegout') {
				facetJson.values = this._addPastilleColor(facetJson.values);
			}

			if ( !(facetJson.values && facetJson.values.length) ) {
				return '';
			}

			let values = facetJson.values.map(v=>{
				var pastille = v.pastille ? `<span class="facet-pastille" style="background-color: ${v.pastille};">&nbsp;</span>` : '';

				var checked = (filterValues || []).find( filterValue =>
					filterValue.replace(/^"|"$/g,'') === v.LookupValue
				) ? 'checked' : '';

				return `<label class="facet-value" data-field="${fieldName}" data-value="${v.LookupValue}">`+
					`<input type="checkbox" ${checked}>`+
					`${pastille}${Util.nls(v.value)}<span class="nb"> (${v.numberOfResults})</span></label>`;
			});

			return `<div class="facet" tabIndex="1">
				<div class="facet-label">${Util.nlsE(fieldName)}</div>
				<div class="facet-values">${values.join('')}</div>
			</div>`;
		}
	}

	return Facet;
});
