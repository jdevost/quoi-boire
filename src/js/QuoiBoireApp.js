define(['SearchRequest', 'SearchSummary', 'Facets', 'Util'], function(SearchRequest, SearchSummary, Facets, Util) {
	'use strict';

	class QuoiBoireApp {
		constructor() {
			this.searchRequest = new SearchRequest();
			this.searchSummary = new SearchSummary(this);
			this.facets = new Facets(this);

			this._setEvent('search-input', 'keypress', e=>{
				if (e.charCode === 13) {
					// do search
					this.search();
				}
			});
			this._setEvent('search-button', 'click', this.search.bind(this));

			this._setEvent('results-container', 'scroll', this.onListScroll.bind(this));

			if ( /(\?|&)q=([^?&]+)/.test(window.location.search) ) {
				this.newSearch( decodeURIComponent(RegExp.$2) );
			}

			window.addEventListener('popstate', e=>{
				this.newSearch(e.state.q, true);
			});
		}

		_setEvent(sId, sEvent, fCallback) {
			Util.$(sId).addEventListener(sEvent, fCallback);
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

		newSearch(searchTerm, skipHistoryState) {
			Util.$('search-input').value = searchTerm;
			this.search(skipHistoryState);
		}

		onListScroll() {
			var n = Util.$('results-container');
			if ( (n.clientHeight + n.scrollTop) >= (n.scrollHeight -50) ) {
				this.searchRequest.nextPage()
					.then(response => {
						if (response) {
							this.showNextPage(response);
						}
					});
			}
		}

		removeFilter(field, value) {
			return this._updateSearch('removeFilter', field, value);
		}

		renderPastille(raw) {
			let name = raw.tppastilledegout, pastille = Util.getColorForPastille(name);
			return pastille ? `<div class="pastille" title="${name}" style="background-color: ${pastille};">
				${Util.getShortNameForPastille(name)}</div>` : '';
		}

		renderPrice(raw) {
			return `<div class="item-price"><span class="item-price-strike">${raw.tpprixinitial || ''}</span> ${raw.tpprixrabais || raw.tpprixnormal}</div>`;
		}

		renderSearchResults(searchResponse) {
			let items = searchResponse.results.map((item)=> {

				return `<div class="item" style="background-image:url(${item.raw.tpthumbnailuri});">
					<a href="${item.uri}" class="item-name" target="_blank">${item.title}</a>
					${this.renderPrice(item.raw)}
					<div class="item-info">
						${item.raw.tpproducteur}
						${item.raw.tpmillesime||''}
					</div>
					<div class="item-desc">
						${item.raw.tpcategorieraw}<br>
						${this.renderPastille(item.raw)}
						${item.raw.tpnotededegustation || ''}
					</div>
				</div>`;

			});

			return items.join('');
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

		showNextPage(searchResponse) {
			Util.$('results-list').innerHTML += this.renderSearchResults(searchResponse, true);
		}

		showResults(searchResponse) {
			Util.$('results-container').scrollTop = 0;
			Util.$('results-list').innerHTML = this.renderSearchResults(searchResponse);

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
