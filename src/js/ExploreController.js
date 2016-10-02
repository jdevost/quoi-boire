define(['./request/SearchRequest', './ui/SearchSummary', './ui/ResultsList', './ui/Facet', './Util'], function(SearchRequest, SearchSummary, ResultsList, Facet, Util) {
	'use strict';
	let DEPTH_LIMIT = 12000;

	class Explorer extends SearchRequest {
		constructor() {
			super();
			this.resultsList = new ResultsList(this);
			this.searchSummary = new SearchSummary(this);

			// other fields: tpcoteexpertsplitgroup, tpcepagenomsplitgroup, tpcategorie, tpregion, tpaccordsnommenu
			let fields = 'tppastilledegout,tpfamilledevinsplitgroup,tpprixbande,tppays'.split(',');
			this._fields = fields.map(f=>{
				return {
					field: f,
					sortCriteria: 'AlphaAscending',
					injectionDepth: DEPTH_LIMIT,
					maximumNumberOfValues: 300
				};
			});

			this._json = {groupBy: this._fields};

			super.post('https://cloudplatform.coveo.com/rest/search', this._json)
				.then( this.showFacets.bind(this) );
		}

		onChangeInput(e) {
			var domNode = e.target.parentNode;
			if ( !e.target.checked ) {
				this._currentFacets = null;
			}
			this[e.target.checked ? 'addFilter' : 'removeFilter']( domNode.getAttribute('data-field'), domNode.getAttribute('data-value') )
				.then(
					response => this.showResults(response, domNode.getAttribute('data-field'))
				);
		}

		removeFilter(field, value) {
			return super.removeFilter(field, value)
				.then(this.showResults.bind(this));
		}

		render(response) {
			return response.groupByResults.map(
				field => Facet.render(field, this._filters[field.field])
			).join('');
		}

		showFacets(response, field) {
			if (this._currentFacets) {
				response.groupByResults = response.groupByResults.map(f=> {
					if (f.field === field) {
						return this._currentFacets.filter( f=>f.field===field )[0];
					}
					return f;
				});
			}
			this._currentFacets = response.groupByResults;

			let nContainer = Util.$('facets-container');
			nContainer.innerHTML = `<div class="facets">${this.render(response)}</div>`;

			// Can't use forEach on a HTMLCollection, do the old for()
			let aInputs = nContainer.getElementsByTagName('input');
			for (let i=0; i<aInputs.length; i++) {
				// Set up click events on facets
				aInputs[i].addEventListener('change', this.onChangeInput.bind(this));
			}
		}

		showResults(searchResponse, field) {
			let filtersAndSort = this.getFiltersAndSort();
			this.searchSummary.show(searchResponse, filtersAndSort);
			this.resultsList.show(searchResponse);

			// Update facets and leave current facet untouched for multi-selections
			this.showFacets(searchResponse, field);
		}
	}

	return Explorer;
});
