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
					// Token is missing, show an error.
					document.getElementsByClassName('bottom')[0].innerHTML =
						`<div style="color:red;">
							<br><br>&nbsp; &nbsp; &nbsp;
							Token is missing. Set it up in your cookies.
						</div>`;
				}

				req.send( JSON.stringify(json) );
			});
		}
	}

	return Ajax;
});
