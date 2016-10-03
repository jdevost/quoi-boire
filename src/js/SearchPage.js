define(['./request/SearchRequest', './ui/SearchSummary', './ui/ResultsList', './ui/Facets', './Util'], function(SearchRequest, SearchSummary, ResultsList, Facets, Util) {
	'use strict';

	/**
	 * Controller class for the Search scenario
	 * @class
	 */
	class SearchPage {
		constructor() {
			this.searchRequest = new SearchRequest();
			this.resultsList = new ResultsList(this);
			this.searchSummary = new SearchSummary(this);
			this.facets = new Facets(this);

			this.init();
		}

		init() {
			// search mode
			Util.addEvent('search-input', 'keypress', e=>{
				if (e.charCode === 13) {
					// do search
					this.search();
				}
			});
			Util.addEvent('search-button', 'click', this.search.bind(this));

			if ( /(\?|&)q=([^?&]+)/.test(window.location.search) ) {
				this.newSearch( decodeURIComponent(RegExp.$2) );
			}

			window.addEventListener('popstate', e=>{
				this.newSearch(e.state.q, true);
			});
		}

		/**
		 * Sends a Search Request and update UI when results are back
		 */
		_updateSearch(action, field, value) {
			return this.searchRequest[action](field, value)
				.then((response)=>{
					this.showResults(response);
					return response;
				})
				.catch(
					(error)=>{console.warn(error);}
				);
		}

		addFilter(field, value) {
			return this._updateSearch('addFilter', field, value);
		}

		getFiltersAndSort() {
			return this.searchRequest.getFiltersAndSort();
		}

		nextPage() {
			return this.searchRequest.nextPage();
		}

		newSearch(searchTerm, skipHistoryState) {
			Util.$('search-input').value = searchTerm;
			this.search(skipHistoryState);
		}

		removeFilter(field, value) {
			return this._updateSearch('removeFilter', field, value);
		}

		/**
		 * Handler when doing a search from the Input bar
		 */
		search(skipHistoryState=false) {
			var q = Util.$('search-input').value.trim();
			if (!q) {
				return;
			}

			if ( !skipHistoryState ) {
				history.pushState({q: q}, 'Search ' + q, '?q=' + q);
			}

			this.searchRequest.newSearch({q: q})
				.then((response)=>{
					this.showResults(response);
				})
				.catch(
					(error)=>{console.warn(error);}
				);
		}

		showResults(searchResponse) {
			this.resultsList.show(searchResponse);

			let filtersAndSort = this.getFiltersAndSort();
			this.searchSummary.show(searchResponse, filtersAndSort);
			this.facets.show(searchResponse, filtersAndSort);
		}

		sort(field) {
			return this._updateSearch('sort', field);
		}

	}

	return SearchPage;

});
