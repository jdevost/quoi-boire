define(['./Ajax'], function(Ajax) {
	'use strict';


	class SearchRequest extends Ajax {
		constructor(config) {
			super(config);
		}

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

			return super.post(uri, json);
		}
	}

	return SearchRequest;
});
