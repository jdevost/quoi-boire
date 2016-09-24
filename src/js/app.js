require(['SearchRequest'], function(SearchRequest) {


var cc = {
	$: function(id){return document.getElementById(id);},

	doSearch: function() {
		var q = this.$('srch-input').value.trim();
		if (!q) {
			return;
		}
		history.replaceState({q: q}, 'Search ' + q, '?q=' + q);
		var ajax = new SearchRequest();
		ajax.post('https://cloudplatform.coveo.com/rest/search', {q: q})
			.then((response)=>{
				this.showResults( JSON.parse(response));
			})
			.catch(
				(error)=>{console.warn(error);}
			);
	},

	_setEvent: function(sId, sEvent, fCallback){
		this.$(sId).addEventListener(sEvent, fCallback);
	},

	appInit: function() {
		this._setEvent('srch-input', 'keypress', e=>{
			if (e.charCode === 13) {
				// do search
				this.doSearch();
			}
		});
		this._setEvent('srch-btn', 'click', this.doSearch.bind(this));

		this._setEvent('list-rows-btn', 'click', this.changeList.bind(this,'rows'));
		this._setEvent('list-tiles-btn', 'click', this.changeList.bind(this,'tiles'));

		if ( /(\?|&)q=([^?&]+)/.test(window.location.search) ) {
			this.$('srch-input').value = decodeURIComponent(RegExp.$2);
			this.doSearch();
		}
	},

	changeList: function(sClass) {
		var nList = this.$('rslt-list');
		nList.setAttribute('class', nList.getAttribute('class').replace( /\b(rows|tiles)\s*/g,'' ).trim() + ' ' + sClass);
	},

	showResults: function(searchResponse) {
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
	}

};

cc.appInit();
});
