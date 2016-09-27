define([], function() {
	'use strict';

	class Ajax {
		constructor() {
			this.token = document.cookie.replace(/(?:(?:^|.*;\s*)coveoToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');
		}

		post(uri, json, headers = {}) {
			return new Promise((resolve, reject) => {
				let req = new XMLHttpRequest();
				req.open('POST', uri, true);
				req.onload = function() {
					if (req.status === 200) {
						resolve(req.response);
					}
					else {
						reject(new Error(req.statusText));
					}
				};

				req.onerror = function() {
					reject(new Error('Ajax request failed'));
				};

				req.responseType = 'json';

				req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
				for (var h in headers) {
					req.setRequestHeader(h, headers[h]);
				}

				if (this.token) {
					req.setRequestHeader('Authorization', 'Bearer ' + this.token);
				}
				else {
					// I don't usually do alerts, this is only so I can't miss it when token isn't defined.
					alert('Token is missing. ' + this);
				}

				req.send( JSON.stringify(json) );
			});
		}
	}

	return Ajax;
});
