define(['./Ajax'], function(Ajax) {
	'use strict';
	let SORT_ASC = 'ascending', SORT_DESC = 'descending', SORT_RELEVANCY = 'relevancy';

	/**
	 * Handles Search requests using Coveo API
	 * @class
	 */
	class SearchRequest extends Ajax {

		constructor() {
			super();
			this.reset();
			this._PAGE_LENGTH = 20;
			this.queryParameters = {};
		}

		/**
		 * Adds a value associated to a field to the filters.
		 * @param {string} field field to filter
		 * @param {string} value value to add to filter for the field
		 * @returns {Promise} Search request's promise
		 */
		addFilter(field, value) {
			// Use quotes around value, to preserve values with spaces in them.
			value = `"${value}"`;
			if (this._filters[field]) {
				// already have a filter for this field, add the value.
				this._filters[field].push(value);
			}
			else {
				// no filter for this field, add the value using an array (for adding more values later).
				this._filters[field] = [value];
			}

			return this.updateSearch();
		}

		/**
		 * Returns the current filter and sort info.
		 * @returns {object} object with 'filter' and 'sort'.
		 */
		getFiltersAndSort() {
			return {
				filters: this._filters,
				sort: this._sort
			};
		}

		/**
		 * Construct the values for Advanced Query parameters (aq) using the current saved filters.
		 * @returns {string}
		 */
		getQueryForFilters() {
			var advancedQuery = [];
			for (var f in this._filters) {
				advancedQuery.push(`(@${f}=(${this._filters[f].join()}))`);
			}
			return advancedQuery.join(' AND ');
		}

		/**
		 * Get the next set of values, re-using the current filters and query parameters.
		 * @returns {Promise}
		 */
		nextPage() {
			if (! this._nextPageInProgress) {
				this._firstResult = this._firstResult + this._PAGE_LENGTH;

				if ( this._firstResult <= this._totalCount ) {
					this._nextPageInProgress = true;
					this.queryParameters.firstResult = this._firstResult;

					return this.sendSearchRequest(this.queryParameters)
						.then( response => {
							this._nextPageInProgress = false;
							return response;
						});
				}
			}
			return Promise.resolve();
		}

		/**
		 * Starts a new search. Reset current filters, sort and paging.
		 * @param {object} queryParameters Initial value for the query. Such as the search term.
		 * @returns {Promise} Search request's promise
		 */
		newSearch(queryParameters) {
			this.reset();

			queryParameters.searchHub = 'default';
			queryParameters.pipeline = 'default';
			queryParameters.enableDidYouMean = true;
			queryParameters.numberOfResults = this._PAGE_LENGTH;
			queryParameters.firstResult = this._firstResult;
			queryParameters.generateAutomaticRanges = true;
			queryParameters.groupBy = [
				{field: '@tppastilledegout', sortCriteria: 'AlphaAscending', maximumNumberOfValues: 300},
				{field: '@tpcategorie', sortCriteria: 'Occurences'},
				// {field: '@tpformat', sortCriteria: 'AlphaAscending'},
				{field: '@tppays', sortCriteria: 'Occurences'},
				{field: '@tpprixbande', sortCriteria: 'AlphaAscending'},
				{field: '@tpenspecial', sortCriteria: 'AlphaAscending'}
			];

			queryParameters.sortCriteria = [this._sort.field, this._sort.order].join(' ').trim();

			queryParameters.fieldsToExclude = [
				'excerpt', 'Excerpt',
				'sysconcepts',
				'tpcoteexpertraw',
				'tpdisponibiliteraw',
				'tpinventairenomsuccursalesplitgroup',
				'tpinventairetypenomsuccursalerawsplitgroup',
				'tpinventairetypesuccursalesplitgroup',
				'tppagebody'
			];

			this.queryParameters = queryParameters;

			return this.sendSearchRequest(queryParameters);
		}

		/**
		 * Removes a value associated to a field from the filters.
		 * @param {string} field field to filter
		 * @param {string} value value to remove from filter for the field
		 * @returns {Promise} Search request's promise
		 */
		removeFilter(field, value) {
			if (this._filters[field]) {
				// filter out the value from this._filters[field]
				this._filters[field] = this._filters[field].filter(
					// clear out the quotes around the values before compare
					v=> v.replace(/^"|"$/g,'') !== value.replace(/^"|"$/g,'')
				);
				// if we remove the last value, we removed the field from the filters.
				if (this._filters[field].length < 1) {
					delete this._filters[field];
				}
			}
			return this.updateSearch();
		}

		/**
		 * Resets filter, pagination and sort.
		 */
		reset() {
			this._filters = {};
			this._firstResult = 0;
			this._sort = { field: SORT_RELEVANCY, order: '' };
		}


		/**
		 * Send an ajax request to the REST API.
		 * @param {object} queryParameters Query parameters for this requests (filters, sort, groupBy).
		 * @returns {Promise}
		 */
		sendSearchRequest(queryParameters) {
			return super.post('https://cloudplatform.coveo.com/rest/search', queryParameters)
				.then((response)=>{
					this._totalCount = response.totalCount;
					return response;
				});
		}

		/**
		 * Sort results based on a field.
		 * If current sort is based on a different field, we change the sort field to the new field and use order ascending.
		 * If current sort is based on the same field, we toggle between ascending and descending.
		 * Exception, if new sort field is SORT_RELEVANCY, there's no sort order.
		 * @param {string} field
		 * @param {Promise}
		 */
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

		/**
		 * Updates query parameters and fire off a search request.
		 * @param {Promise} Search request's promise
		 */
		updateSearch() {
			let filters = this.getQueryForFilters();

			this.queryParameters.aq = filters;
			this.queryParameters.sortCriteria = [this._sort.field, this._sort.order].join(' ').trim();
 			this.queryParameters.firstResult = this._firstResult = 0;

			return this.sendSearchRequest(this.queryParameters);
		}
	}

	return SearchRequest;
});
