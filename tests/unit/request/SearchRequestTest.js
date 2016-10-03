define([
	'intern!object',
	'intern/chai!assert',
	'src/js/request/SearchRequest',
	'intern'
], function(registerSuite, assert, SearchRequest, intern) {
	'use strict';

	//jshint -W109

	registerSuite({
		name: 'SearchRequest Tests',

		setup: function() {},
		teardown: function() {},
		beforeEach: function() {},
		afterEach: function() {},

		testInit: function(){
			var d = document.createElement('script');
			d.textContent = 'document.cookie = "coveoToken=' + intern.args.TOKEN + '";';
			document.documentElement.appendChild(d);

			var searchRequest = new SearchRequest();
			assert.match( searchRequest.token, /^[0-9a-f-]{36}$/, 'Your token is missing or invalid.' );

			return searchRequest.post('https://cloudplatform.coveo.com/rest/search', {q: 'Merlot'})
				.then(function(responseJson){
					assert.isAtLeast( responseJson.totalCount, 100 );
				});
		},

		testAddFilter: function(){
			var searchRequest = new SearchRequest();

			return new Promise((resolve)=> {
				searchRequest.sendSearchRequest = (queryParameters)=> {
					assert.deepEqual(queryParameters, {
						"aq": "(@tppays=(\"Canada\"))",
						"firstResult": 0,
						"sortCriteria": "relevancy"
					});
					resolve();
				};

				searchRequest.addFilter('tppays', 'Canada');
			});
		},

		testAddRemoveFilter_thenNextPage: function(){
			var searchRequest = new SearchRequest();
			searchRequest._totalCount = 100;

			// prevent update at first
			searchRequest.sendSearchRequest = ()=>{}; // no-op

			searchRequest.addFilter('tppays', 'Canada');
			searchRequest.addFilter('tppays', 'France');
			searchRequest.addFilter('tppays', 'Japon');
			searchRequest.addFilter('tpcategorie', 'Vin rouge');
			searchRequest.removeFilter('tppays', 'France');
			searchRequest.addFilter('tppays', 'Canada');

			searchRequest.sort('tppays');
			searchRequest.sort('tppays');

			return new Promise((resolve)=> {
				searchRequest.sendSearchRequest = (queryParameters)=> {
					assert.deepEqual(queryParameters, {
						"aq": "(@tppays=(\"Canada\",\"Japon\")) AND (@tpcategorie=(\"Vin rouge\"))",
						"firstResult": 20,
						"sortCriteria": "tppays descending"
					});
					resolve();
				};

				searchRequest.nextPage();
			});
		},

		testNewSearch: function(){
			var searchRequest = new SearchRequest();

			return new Promise((resolve)=> {
				searchRequest.sendSearchRequest = (queryParameters)=> {
					assert.deepEqual(queryParameters, {
						"enableDidYouMean": true,
						"fieldsToExclude": [
							"excerpt","Excerpt","sysconcepts","tpcoteexpertraw","tpdisponibiliteraw",
							"tpinventairenomsuccursalesplitgroup","tpinventairetypenomsuccursalerawsplitgroup",
							"tpinventairetypesuccursalesplitgroup","tppagebody",
						],
						"firstResult": 0,
						"generateAutomaticRanges": true,
						"groupBy": [
							{
								"field": "@tppastilledegout",
								"maximumNumberOfValues": 300,
								"sortCriteria": "AlphaAscending"
							},
							{
								"field": "@tpcategorie",
								"sortCriteria": "Occurences"
							},
							{
								"field": "@tppays",
								"sortCriteria": "Occurences"
							},
							{
								"field": "@tpprixbande",
								"sortCriteria": "AlphaAscending"
							},
							{
								"field": "@tpenspecial",
								"sortCriteria": "AlphaAscending"
							}
						],
						"numberOfResults": 20,
						"pipeline": "default",
						"q": "new search 1",
						"searchHub": "default",
						"sortCriteria": "relevancy"
					});
					resolve();
				};

				searchRequest.newSearch({q:'new search 1'});
			});
		}
	});
});
