define(['./request/SearchRequest', './ui/SearchSummary', './ui/ResultsList', './ui/Facets', './ExploreController', './Util'], function(SearchRequest, SearchSummary, ResultsList, Facets, ExploreController, Util) {
	'use strict';

	class QuoiBoireApp {
		constructor() {
			this.searchRequest = new SearchRequest();
			this.resultsList = new ResultsList(this);
			this.searchSummary = new SearchSummary(this);
			this.facets = new Facets(this);

			if (Util.$('search-input')) {
				// search mode
				Util.addEvent('search-input', 'keypress', e=>{
					if (e.charCode === 13) {
						// do search
						this.search();
					}
				});
				Util.addEvent('search-button', 'click', this.search.bind(this));
			}
			else {
				// explore mode
				this.exploreController = new ExploreController();
			}

			if ( /(\?|&)q=([^?&]+)/.test(window.location.search) ) {
				this.newSearch( decodeURIComponent(RegExp.$2) );
			}

			window.addEventListener('popstate', e=>{
				this.newSearch(e.state.q, true);
			});
		}

		_updateSearch(action, field, value) {
			return this.searchRequest[action](field, value)
				.then((response)=>{
					this.showResults(response);
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

	return new QuoiBoireApp();

});
