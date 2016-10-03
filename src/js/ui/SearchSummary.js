define(['../Util'], function(Util) {
	'use strict';

	/**
	 * UI Class to show selected values from the facets, the sort options and the suggested corrections.
	 * @class
	 */
	class SearchSummary {
		constructor(pageHandler) {
			this._pageHandler = pageHandler;
		}

		/**
		 * Handler when user clicks to remove a facet filter.
		 * @param {event} e mouse click event
		 */
		onRemoveFilter(e) {
			this._pageHandler.removeFilter( e.target.getAttribute('data-field'), e.target.getAttribute('data-value') );
		}

		/**
		 * Handler when user change the sort options.
		 * @param {event} e mouse click event
		 */
		onSort(e) {
			this._pageHandler.sort( e.target.getAttribute('data-field') );
		}

		/**
		 * Handler when user clicks on a suggested term
		 * @param {event} e mouse click event
		 */
		onUseQueryConnection(e) {
			this._pageHandler.newSearch( e.target.getAttribute('data-lookup') );
		}

		/**
		 * Contructs the HTML for the summary section (total count, filters, sort, query corrections)
		 * @param {object} searchResponse Json from a search request
		 * @returns {string} HTML string
		 */
		render(searchResponse, filtersAndSort) {
			return [
				`<div>`,
				this.renderSort(filtersAndSort.sort),
				Util.nlsE('searchFound', {total: searchResponse.totalCount, time: searchResponse.duration/1000}),
				'</div>',
				this.renderFilters(filtersAndSort.filters),
				this.renderQueryCorrection(searchResponse)
			].join('');
		}

		/**
		 * Contructs the HTML for the filters per facet
		 * @param {object} filters from a searchResponse Json
		 * @returns {string} HTML string
		 */
		renderFilters(filters) {
			let a = [],
				renderFilter = (type, value)=>
					`<div class="filter" data-field="${type}" data-value="${Util.htmlEncode(value)}">${value.replace(/"/g,'')}
						<div class="filter-remove" data-field="${type}" data-value="${Util.htmlEncode(value)}"></div>
					</div>`;

			for (var type in filters) {
				a.push(
					`<div>${Util.nlsE(type)}: `,
					filters[type].map( renderFilter.bind(this,type) ).join(''),
					`</div>`
				);
			}
			return a.length ? `<div class="filters">${a.join('')}</div>` : '';
		}

		/**
		 * Contructs the HTML for the query correction (did you mean?)
		 * @param {object} searchResponse Json from a search request
		 * @returns {string} HTML string
		 */
		renderQueryCorrection(searchResponse) {
			let a = [];
			if (searchResponse.queryCorrections.length) {
				a.push(
					`<div class="query-corrections">${Util.nlsE('didYouMean')} `,
					searchResponse.queryCorrections.map(o => {
						return `<div class="query-correction" data-lookup="${o.correctedQuery}">${o.correctedQuery}</div>`;
					}),
					'</div>'
				);
			}
			return a.join('');
		}

		/**
		 * Contructs the HTML for all the sort options
		 * @param {object} sortInfo current sort object
		 * @returns {string} HTML string
		 */
		renderSort(sortInfo) {
			return `<div class="sort-options">
					${this.renderSortButton(sortInfo, '@tpprixnum', Util.nlsE('sortby_price') )}
					${this.renderSortButton(sortInfo, '@tpmillesime', Util.nlsE('sortby_vintage'))}
					${this.renderSortButton(sortInfo, 'relevancy', Util.nlsE('sortby_relevance'))}
				</div>`;
		}

		/**
		 * Contructs the HTML for sort button
		 * @param {object} sortInfo current sort object
		 * @param {string} field field to use for this sort button. ie. @tpprixnum, @tpmillesime, relevancy.
		 * @param {string} name label to show on the button
		 * @returns {string} HTML string
		 */
		renderSortButton(sortInfo, field, name) {
			let upOrDown = '&or;&and;';
			if (field === 'relevancy') {
				upOrDown = '';
			}
			else if (sortInfo.field === field) {
				upOrDown = (sortInfo.order === 'ascending' ? '&and;' : '&or;');
			}
			return `<div class="sort-field ${(sortInfo.field === field ? 'selected':'')}" data-field="${field}">${name} ${upOrDown}</div>`;
		}

		/**
		 * helper function to set up events.
		 */
		_setEventHandlers(className, handler) {
			// Can't use forEach on a HTMLCollection, do the old for()
			let nodes = document.getElementById('results-summary').getElementsByClassName(className);
			for (let i=0; i<nodes.length; i++) {
				// Set up click events on facets
				nodes[i].addEventListener('click', handler.bind(this));
			}
		}

		/**
		 * Show the summary in the UI
		 * @param {object} searchResponse Json from a search request
		 * @param {object} filtersAndSort Current state for the filters and sort
		 */
		show(searchResponse, filtersAndSort) {
			let nContainer = document.getElementById('results-summary');

			nContainer.innerHTML = this.render(searchResponse, filtersAndSort);

			this._setEventHandlers('query-correction', this.onUseQueryConnection);
			this._setEventHandlers('filter', this.onRemoveFilter);
			this._setEventHandlers('sort-field', this.onSort);
		}

	}

	return SearchSummary;
});
