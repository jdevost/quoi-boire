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

		render(json, filtersAndSort) {
			return [
				`<div>`,
				this.renderSort(filtersAndSort.sort),
				Util.nlsE('searchFound', {total: json.totalCount, time: json.duration/1000}),
				'</div>',
				this.renderFilters(filtersAndSort.filters),
				this.renderQueryCorrection(json)
			].join('');
		}

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

		renderQueryCorrection(json) {
			let a = [];
			if (json.queryCorrections.length) {
				a.push(
					`<div class="query-corrections">${Util.nlsE('didYouMean')} `,
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
					${this.renderSortButton(sortInfo, '@tpprixnum', Util.nlsE('sortby_price') )}
					${this.renderSortButton(sortInfo, '@tpmillesime', Util.nlsE('sortby_vintage'))}
					${this.renderSortButton(sortInfo, 'relevancy', Util.nlsE('sortby_relevance'))}
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
			return `<div class="sort-field ${(sortInfo.field === field ? 'selected':'')}" data-field="${field}">${name} ${upOrDown}</div>`;
		}

		_setEventHandlers(className, handler) {
			// Can't use forEach on a HTMLCollection, do the old for()
			let nodes = document.getElementById('results-summary').getElementsByClassName(className);
			for (let i=0; i<nodes.length; i++) {
				// Set up click events on facets
				nodes[i].addEventListener('click', handler.bind(this));
			}
		}

		show(json, filtersAndSort) {
			let nContainer = document.getElementById('results-summary');

			nContainer.innerHTML = this.render(json, filtersAndSort);

			this._setEventHandlers('query-correction', this.onUseQueryConnection);
			this._setEventHandlers('filter', this.onRemoveFilter);
			this._setEventHandlers('sort-field', this.onSort);
		}

	}

	return SearchSummary;
});
