define(['../Util'], function(Util) {
	'use strict';

	class ResultsList {

		constructor(searchHandler) {
			this._searchHandler = searchHandler;
			Util.addEvent('results-container', 'scroll', this.onListScroll.bind(this));
		}

		onListScroll() {
			var n = Util.$('results-container');
			if ( (n.clientHeight + n.scrollTop) >= (n.scrollHeight -50) ) {
				this._searchHandler.nextPage()
					.then(response => {
						if (response) {
							this.showNextPage(response);
						}
					});
			}
		}

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

		renderPastille(raw) {
			let name = raw.tppastilledegout, pastille = Util.getColorForPastille(name);
			return pastille ? `<div class="pastille" title="${name}" style="background-color: ${pastille};">
				${Util.getShortNameForPastille(name)}</div>` : '';
		}

		renderPrice(raw) {
			return `<div class="item-price"><span class="item-price-strike">${raw.tpprixinitial || ''}</span> ${raw.tpprixrabais || raw.tpprixnormal}</div>`;
		}

		show(searchResponse) {
			Util.$('results-container').scrollTop = 0;
			Util.$('results-list').innerHTML = this.render(searchResponse);
		}

		showNextPage(searchResponse) {
			Util.$('results-list').innerHTML += this.render(searchResponse);
		}

	}

	return ResultsList;
});
