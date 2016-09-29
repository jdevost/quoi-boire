define(['SearchRequest', 'SearchSummary', 'Facets', 'Util'], function(SearchRequest, SearchSummary, Facets, Util) {
	'use strict';

	class QuoiBoireApp {
		constructor() {
			this.searchRequest = new SearchRequest();
			this.searchSummary = new SearchSummary(this);
			this.facets = new Facets(this);

			this._setEvent('srch-input', 'keypress', e=>{
				if (e.charCode === 13) {
					// do search
					this.search();
				}
			});
			this._setEvent('srch-btn', 'click', this.search.bind(this));

			if ( /(\?|&)q=([^?&]+)/.test(window.location.search) ) {
				this.newSearch( decodeURIComponent(RegExp.$2) );
			}
		}

		$(id){
			return document.getElementById(id);
		}

		_setEvent(sId, sEvent, fCallback) {
			this.$(sId).addEventListener(sEvent, fCallback);
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

		newSearch(searchTerm) {
			this.$('srch-input').value = searchTerm;
			this.search();
		}

		removeFilter(field, value) {
			return this._updateSearch('removeFilter', field, value);
		}

		renderPrice(raw) {
			return `<div class="item-price"><span class="item-price-strike">${raw.tpprixinitial || ''}</span> ${raw.tpprixrabais || raw.tpprixnormal}</div>`;
		}

		search() {
			var q = this.$('srch-input').value.trim();
			if (!q) {
				return;
			}
			history.replaceState({q: q}, 'Search ' + q, '?q=' + q);

			this.searchRequest.newSearch({q: q})
				.then((response)=>{
					this.showResults(response);
				})
				.catch(
					(error)=>{console.warn(error);}
				);
		}

		showResults(searchResponse) {
			let items = searchResponse.results.map((item,idx)=> {

				let pastille = Util.getColorForPastille(item.raw.tppastilledegout);
				pastille = pastille ? `<span class="pastille" style="background-color: ${pastille};">&nbsp;</span>` : '';

				return `<div class="item" id="item${idx}" style="background-image:url(${item.raw.tpthumbnailuri})" title="${item.raw.tpnotededegustation}">
					${this.renderPrice(item.raw)}
					<a href="${item.uri}" class="item-name" target="_blank">${item.title}</a>
					<div>
						${item.raw.tpproducteur}
						${item.raw.tpmillesime||''}
					</div>
					<div class="item-desc">${item.raw.tpcategorieraw}</div>
					${pastille}
				</div>`;

			});

			this.$('rslt-list').innerHTML = items.join('');

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
