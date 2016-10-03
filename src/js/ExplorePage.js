define(['./SearchPage', './ui/Facet', './Util'], function(SearchPage, Facet, Util) {
	'use strict';
	let DEPTH_LIMIT = 12000;

	/**
	 * Controller class for the Explore scenario
	 * @class
	 */
	class Explorer extends SearchPage {
		init() {
			// other fields: tpcoteexpertsplitgroup, tpcepagenomsplitgroup, tpcategorie, tpregion, tpaccordsnommenu
			let fields = 'tppastilledegout,tpfamilledevinsplitgroup,tpprixbande,tppays'.split(','),
				groupByFields = fields.map(f=>{
					return {
						field: f,
						sortCriteria: 'AlphaAscending',
						injectionDepth: DEPTH_LIMIT,
						maximumNumberOfValues: 300
					};
				});

			this.searchRequest.queryParameters = {groupBy: groupByFields};
			this.searchRequest.post('https://cloudplatform.coveo.com/rest/search', this.searchRequest.queryParameters)
				.then( (searchResponse)=>this.showFacets(searchResponse) );
		}

		/**
		 * Click handler when selecting/deselecting a checkbox in the facets
		 */
		onChangeInput(e) {
			var domNode = e.target.parentNode;
			if ( !e.target.checked ) {
				this._currentFacets = null;
			}
			this.searchRequest[e.target.checked ? 'addFilter' : 'removeFilter']( domNode.getAttribute('data-field'), domNode.getAttribute('data-value') )
				.then(
					response => this.showResults(response, domNode.getAttribute('data-field'))
				);
		}

		removeFilter(field, value) {
			return super.removeFilter(field, value)
				.then(this.showResults.bind(this));
		}

		renderFacets(searchResponse) {
			return searchResponse.groupByResults.map(
				fieldJson => Facet.render(fieldJson, this.searchRequest._filters[fieldJson.field])
			).join('');
		}

		showFacets(searchResponse, field) {
			if (this._currentFacets) {
				searchResponse.groupByResults = searchResponse.groupByResults.map(f=> {
					if (f.field === field) {
						return this._currentFacets.filter( f=>f.field===field )[0];
					}
					return f;
				});
			}
			this._currentFacets = searchResponse.groupByResults;

			let nContainer = Util.$('facets-container'),
				facetsHtml = this.renderFacets(searchResponse);

			nContainer.innerHTML = `<div class="facets">${facetsHtml}</div>`;

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
