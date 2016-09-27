define(['SearchRequest', 'SearchSummary', 'Facets'], function(SearchRequest, SearchSummary, Facets) {
	'use strict';

	class QuoiBoireApp {
		constructor() {
			this.facets = new Facets();
			this.searchRequest = new SearchRequest();
			this.searchSummary = new SearchSummary();

			this._setEvent('srch-input', 'keypress', e=>{
				if (e.charCode === 13) {
					// do search
					this.search();
				}
			});
			this._setEvent('srch-btn', 'click', this.search.bind(this));

			// this._setEvent('list-rows-btn', 'click', this.changeListStyle.bind(this,'rows'));
			// this._setEvent('list-tiles-btn', 'click', this.changeListStyle.bind(this,'tiles'));

			if ( /(\?|&)q=([^?&]+)/.test(window.location.search) ) {
				this.$('srch-input').value = decodeURIComponent(RegExp.$2);
				this.search();
			}
		}

		$(id){
			return document.getElementById(id);
		}

		_setEvent(sId, sEvent, fCallback) {
			this.$(sId).addEventListener(sEvent, fCallback);
		}

		search() {
			var q = this.$('srch-input').value.trim();
			if (!q) {
				return;
			}
			history.replaceState({q: q}, 'Search ' + q, '?q=' + q);

			this.searchRequest.post('https://cloudplatform.coveo.com/rest/search', {q: q})
				.then((response)=>{
					this.showResults(response);
				})
				.catch(
					(error)=>{console.warn(error);}
				);
		}

		showResults(searchResponse) {
			var items = searchResponse.results.map((item,idx)=>
				`<div class="item" id="item${idx}" style="background-image:url(${item.raw.tpthumbnailuri})" title="${item.raw.tpnotededegustation}">
					<div class="item-price">${item.raw.tpprixnum.toFixed(2)}</div>
					<a href="${item.uri}" class="item-name" target="_blank">${item.title}</a>
					<div>
						${item.raw.tpproducteur}
						${item.raw.tpmillesime||''}
					</div>
					<div class="item-desc">${item.raw.tpcategorieraw}</div>
				</div>`
			);

			this.$('rslt-list').innerHTML = items.join('');

			this.searchSummary.show(searchResponse);
			this.facets.show(searchResponse);
		}

		changeListStyle(sClass) {
			var nList = this.$('rslt-list');
			nList.setAttribute('class', nList.getAttribute('class').replace( /\b(rows|tiles)\s*/g,'' ).trim() + ' ' + sClass);
		}

	}

	return new QuoiBoireApp();

});
