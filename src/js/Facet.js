define([], function() {
	'use strict';

	class Facets {

		static render(json) {

			if (json.field === 'tpprixbande') {
				json.values = json.values.sort((_a,_b)=>{
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

			let values = json.values.map(v=>{
				return `<div class="facet-value" data-lookup="${v.LookupValue}">${v.value} (${v.numberOfResults})</div>`;
			});

			return `<div class="facet">
				<div class="facet-label">${json.field}</div>
				${values.join('')}
			</div>`;
		}
	}

	return Facets;
});
