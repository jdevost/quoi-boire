define(['./SearchPage', './ExplorePage', './Util'], function(SearchPage, ExplorePage, Util) {
	'use strict';

	class QuoiBoireApp {
		constructor() {
			if (Util.$('search-input')) {
				// Search mode
				this.controller = new SearchPage();
			}
			else {
				// Explore mode
				this.controller = new ExplorePage();
			}
		}
	}

	return new QuoiBoireApp();

});
