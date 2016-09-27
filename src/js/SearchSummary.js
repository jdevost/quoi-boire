define([], function() {
	'use strict';

	class SearchSummary {

		show(json) {
			var nContainer = document.getElementById('rslt-summary');
			nContainer.innerHTML = `<div>Found <b>${json.totalCount}</b> in ${json.duration/1000} seconds.</div>`;
		}
	}

	return SearchSummary;
});
