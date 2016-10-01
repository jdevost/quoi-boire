define(['./Ajax'], function(Ajax) {
	'use strict';
	let SORT_ASC = 'ascending', SORT_DESC = 'descending', SORT_RELEVANCY = 'relevancy';

	class SearchRequest extends Ajax {

		constructor() {
			super();
			this.reset();
			this._PAGE_LENGTH = 20;
		}

		_sendSearchRequest(json) {
			return super.post('https://cloudplatform.coveo.com/rest/search', json)
				.then((response)=>{
					this._totalCount = response.totalCount;
					return response;
				});
		}

		addFilter(field, value) {
			value = `"${value}"`;
			if (this._filters[field]) {
				this._filters[field].push(value);
			}
			else {
				this._filters[field] = [value];
			}

			return this.updateSearch();
		}

		getFiltersAndSort() {
			return {
				filters: this._filters,
				sort: this._sort
			};
		}

		getQueryForFilters() {
			var advancedQuery = [];
			for (var f in this._filters) {
				advancedQuery.push(`(@${f}=(${this._filters[f].join()}))`);
			}
			return advancedQuery.join(' AND ');
		}

		nextPage() {
			if (! this._nextPageInProgress) {
				this._firstResult = this._firstResult + this._PAGE_LENGTH;

				if ( this._firstResult <= this._totalCount ) {
					this._nextPageInProgress = true;
					this._json.firstResult = this._firstResult;

					return this._sendSearchRequest(this._json)
						.then( response => {
							this._nextPageInProgress = false;
							return response;
						});
				}
			}
			return Promise.resolve();
		}

		newSearch(json) {
			this.reset();

			json.searchHub = 'default';
			json.language = 'en';
			json.pipeline = 'default';
			json.enableDidYouMean = true;
			json.numberOfResults = this._PAGE_LENGTH;
			json.firstResult = this._firstResult;
			json.generateAutomaticRanges = true;
			json.groupBy = [
				{field: '@tpcategorie', sortCriteria: 'AlphaAscending'},
				// {field: '@tpformat', sortCriteria: 'AlphaAscending'},
				{field: '@tppays', sortCriteria: 'AlphaAscending'},
				{field: '@tpprixbande', sortCriteria: 'AlphaAscending'},
				{field: '@tppastilledegout', sortCriteria: 'AlphaAscending'},
				{field: '@tpenspecial', sortCriteria: 'AlphaAscending'}
			];

			json.sortCriteria = [this._sort.field, this._sort.order].join(' ').trim();

			json.fieldsToExclude = [
				'excerpt', 'Excerpt',
				'sysconcepts',
				'tpcoteexpertraw',
				'tpdisponibiliteraw',
				'tpinventairenomsuccursalesplitgroup',
				'tpinventairetypenomsuccursalerawsplitgroup',
				'tpinventairetypesuccursalesplitgroup',
				'tppagebody'
			];

			this._json = json;

			return this._sendSearchRequest(json);
		}

		removeFilter(field, value) {
			if (this._filters[field]) {
				this._filters[field] = this._filters[field].filter( v=>v!==value );
				if (this._filters[field].length < 1) {
					delete this._filters[field];
				}
			}
			return this.updateSearch();
		}

		reset() {
			this._filters = {};
			this._firstResult = 0;
			this._sort = { field: SORT_RELEVANCY, order: '' };
		}

		sort(field) {
			if (field === SORT_RELEVANCY) {
				this._sort = {field: SORT_RELEVANCY, order: ''};
			}
			else if (this._sort.field === field) {
				this._sort.order = (this._sort.order === SORT_ASC ? SORT_DESC : SORT_ASC);
			}
			else {
				this._sort = {field: field, order: SORT_ASC};
			}

			return this.updateSearch();
		}

		updateSearch() {
			let filters = this.getQueryForFilters();
			this._json.aq = filters;
			this._json.sortCriteria = [this._sort.field, this._sort.order].join(' ').trim();

 			this._json.firstResult = this._firstResult = 0;

			return this._sendSearchRequest(this._json);
		}
	}

	return SearchRequest;
});
