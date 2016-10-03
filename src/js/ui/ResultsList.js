define(['../Util'], function(Util) {
	'use strict';

	/**
	 * UI Class to show the results of a search request.
	 * @class
	 */
	class ResultsList {

		constructor(pageHandler) {
			this._pageHandler = pageHandler;
			Util.addEvent('results-container', 'scroll', this.onListScroll.bind(this));
		}

		/**
		 * Scroll handler. Calls up a Next Page request when scrolling down to the end of the page.
		 * (Infinite scrolling)
		 */
		onListScroll() {
			var n = Util.$('results-container');
			if ( (n.clientHeight + n.scrollTop) >= (n.scrollHeight -50) ) {
				this._pageHandler.nextPage()
					.then(response => {
						if (response) {
							this.showNextPage(response);
						}
					});
			}
		}

		/**
		 * Contructs the HTML for showing the search results
		 * @param {object} searchResponse Json from a search request
		 * @returns {string} HTML string
		 */
		render(searchResponse) {
			let items = searchResponse.results.map((item)=> {

				return `<div class="item" style="background-image:url(${item.raw.tpthumbnailuri});">
					<a href="${item.uri}" class="item-name" target="_blank">${item.title||''}</a>
					${this.renderPrice(item.raw)}
					<div class="item-info">
						${item.raw.tpproducteur||''}
						${item.raw.tpmillesime||''}
					</div>
					<div class="item-desc">
						${item.raw.tpcategorieraw||''}<br>
						${this.renderPastille(item.raw)}
						${item.raw.tpnotededegustation || ''}
					</div>
				</div>`;

			});

			return items.join('');
		}

		/**
		 * Contructs the HTML for a pastille within an item in the search results.
		 * @param {object} raw the 'raw' section of a search response result
		 * @returns {string} HTML string
		 */
		renderPastille(raw) {
			let name = raw.tppastilledegout, pastille = Util.getColorForPastille(name);
			return pastille ? `<div class="pastille" title="${name}" style="background-color: ${pastille};">
				${Util.getShortNameForPastille(name)}</div>` : '';
		}

		/**
		 * Contructs the HTML for the price within an item in the search results.
		 * @param {object} raw the 'raw' section of a search response result
		 * @returns {string} HTML string
		 */
		renderPrice(raw) {
			return `<div class="item-price"><span class="item-price-strike">${raw.tpprixinitial || ''}</span> ${raw.tpprixrabais || raw.tpprixnormal}</div>`;
		}

		/**
		 * Show the first page of search results in the UI.
		 * @param {object} searchResponse Json from a search request.
		 */
		show(searchResponse) {
			Util.$('results-container').scrollTop = 0;
			Util.$('results-list').innerHTML = this.render(searchResponse);
		}

		/**
		 * Adds the next page of search results in the UI.
		 * @param {object} searchResponse Json from a search request.
		 */
		showNextPage(searchResponse) {
			Util.$('results-list').innerHTML += this.render(searchResponse);
		}

	}

	return ResultsList;
});
