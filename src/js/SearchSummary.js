define(['./Util'], function(Util) {
	'use strict';

	class SearchSummary {
		constructor(searchHandler) {
			this._searchHandler = searchHandler;
		}

		onRemoveFilter(e) {
			this._searchHandler.removeFilter( e.target.getAttribute('data-field'), e.target.getAttribute('data-value') );
		}

		onSort(e) {
			this._searchHandler.sort( e.target.getAttribute('data-field') );
		}

		onUseQueryConnection(e) {
			this._searchHandler.newSearch( e.target.getAttribute('data-lookup') );
		}

		renderFilters(filters) {
			let a = [],
				renderFilter = (type, value)=>
					`<div class="filter" data-field="${type}" data-value="${Util.htmlEncode(value)}">
						${value.replace(/"/g,'')}
						<div class="filter-remove" data-field="${type}" data-value="${Util.htmlEncode(value)}">+</div>
					</div>`;

			for (var type in filters) {
				a.push(
					`<div>${type}: `,
					filters[type].map( renderFilter.bind(this,type) ).join(''),
					`</div>`
				);
			}
			return a.length ? `<div class="filters">${a.join('')}</div>` : '';
		}

		renderQueryCorrection(json) {
			let a = [];
			if (json.queryCorrections.length) {
				a.push(
					'<div class="query-corrections">Did you mean? ',
					json.queryCorrections.map(o => {
						return `<div class="query-correction" data-lookup="${o.correctedQuery}">${o.correctedQuery}</div>`;
					}),
					'</div>'
				);
			}
			return a.join('');
		}

		renderSort(sortInfo) {
			return `<div class="sort-options">
					${this.renderSortButton(sortInfo, '@tpprixnum', 'Price')}
					${this.renderSortButton(sortInfo, '@tpmillesime', 'Vintage')}
					${this.renderSortButton(sortInfo, 'relevancy', 'Relevance')}
				</div>`;
		}

		renderSortButton(sortInfo, field, name) {
			let upOrDown = '&or;&and;';
			if (field === 'relevancy') {
				upOrDown = '';
			}
			else if (sortInfo.field === field) {
				upOrDown = (sortInfo.order === 'ascending' ? '&and;' : '&or;');
			}
			return `<div class="sort-field ${(sortInfo.field === field ? 'selected':'')}" data-field="${field}" title="Sort by ${name}">${name} ${upOrDown}</div>`;
		}

		_setEventHandlers(className, handler) {
			// Can't use forEach on a HTMLCollection, do the old for()
			let nodes = document.getElementById('rslt-summary').getElementsByClassName(className);
			for (let i=0; i<nodes.length; i++) {
				// Set up click events on facets
				nodes[i].addEventListener('click', handler.bind(this));
			}
		}

		show(json, filtersAndSort) {
			let nContainer = document.getElementById('rslt-summary'),
				a = [
					`<div>`,
					this.renderSort(filtersAndSort.sort),
					`Found <b>${json.totalCount}</b> in ${json.duration/1000} seconds.</div>`,
					this.renderFilters(filtersAndSort.filters),
					this.renderQueryCorrection(json)
				];

			nContainer.innerHTML = a.join('');

			this._setEventHandlers('query-correction', this.onUseQueryConnection);
			this._setEventHandlers('filter', this.onRemoveFilter);
			this._setEventHandlers('sort-field', this.onSort);
		}

	}

	return SearchSummary;
});
