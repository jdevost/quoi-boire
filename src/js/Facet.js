define(['./Util'], function(Util) {
	'use strict';

	class Facet {

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

		static _addPastilleColor(values) {
			return values.map((valueJson)=>{
				valueJson.pastille = Util.getColorForPastille(valueJson.value);
				return valueJson;
			});
		}

		static render(json) {

			if (json.field === 'tpprixbande') {
				json.values = this._sortPrixBande(json.values);
			}
			else if (json.field === 'tppastilledegout') {
				json.values = this._addPastilleColor(json.values);
			}

			if ( !(json.values && json.values.length) ) {
				return '';
			}

			let values = json.values.map(v=>{
				var pastille = v.pastille ? `<span class="facet-pastille" style="background-color: ${v.pastille};">&nbsp;</span>` : '';
				return `<div class="facet-value" data-field="${json.field}" data-value="${v.LookupValue}">${pastille}${v.value} (${v.numberOfResults})</div>`;
			});

			return `<div class="facet" tabIndex="1">
				<div class="facet-label">${Util.nlsE(json.field)}</div>
				<div class="facet-values">${values.join('')}</div>
			</div>`;
		}
	}

	return Facet;
});
