define([], function() {
	'use strict';

	/**
	 * Handles Ajax requests
	 * @class
	 */
	class Ajax {
		constructor() {
			// The API needs a token, we retrieve it from the cookies.
			// It is set manually in the cookies from a browser's console, to prevent having to save the token in a public GitHiub.
			this.token = document.cookie.replace(/(?:(?:^|.*;\s*)coveoToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');
		}

		/**
		 * Send an ajax request using method POST.
		 * @param {string} uri the uri to send this request to. Can be relative or absolute.
		 * @param {object} data the payload for this request, a object that will be sent as JSON
		 * @param {object} headers extra headers to use for this request. Default is an empty object.
		 * @returns {Promise}
		 */
		post(uri, data, headers = {}) {
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
					// Token is missing, show an error.
					document.getElementsByClassName('bottom')[0].innerHTML =
						`<div style="color:red;">
							<br><br>&nbsp; &nbsp; &nbsp;
							Token is missing. Set it up in your cookies.
						</div>`;
				}

				req.send( JSON.stringify(data) );
			});
		}
	}

	return Ajax;
});
