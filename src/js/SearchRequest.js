define(['Ajax'], function(Ajax) {
	let _TOKEN = document.cookie.replace(/(?:(?:^|.*;\s*)coveoToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');

	class SearchRequest extends Ajax {
		post(uri, json) {
			json.enableDidYouMean = true;
			json.numberOfResults = 25;
			// json.firstResult = 25;
			json.generateAutomaticRanges = true;
			json.groupBy = [
				{field: '@tpcategorie', sortCriteria: 'AlphaAscending'},
				{field: '@tpformat', sortCriteria: 'AlphaAscending'},
				{field: '@tppays', sortCriteria: 'AlphaAscending'},
				{field: '@tpprixbande', sortCriteria: 'AlphaAscending'},
				{field: '@tppastilledegout', sortCriteria: 'AlphaAscending'}
			];

			// json.aq = '(@tpcategorie=="Grappa")';

			json.fieldsToExclude = [
				'sysconcepts',
				'tpcoteexpertraw',
				'tpdisponibiliteraw',
				'tpinventairenomsuccursalesplitgroup',
				'tpinventairetypenomsuccursalerawsplitgroup',
				'tpinventairetypesuccursalesplitgroup',
				'tppagebody'
			];

			if (!_TOKEN) {
				// I don't usually do alerts, this is only so I can't miss it when token isn't defined.
				alert('Token is missing');
			}

			return super.post(uri, json, {Authorization: 'Bearer ' + _TOKEN});
		}
	}

	return SearchRequest;
});
