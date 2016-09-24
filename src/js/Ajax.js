define([], function() {
	class Ajax {
		constructor() {
		}

		post(uri, json, headers = {}) {
			return new Promise(function(resolve, reject) {
				let req = new XMLHttpRequest();
				req.open('POST', uri, true);
				req.onload = function() {
					if (req.status === 200) {
						resolve(req.response);
					} else {
						reject(new Error(req.statusText));
					}
				};

				req.onerror = function() {
					reject(new Error('Ajax request failed'));
				};

				req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
				for (var h in headers) {
					req.setRequestHeader(h, headers[h]);
				}

				req.send( JSON.stringify(json) );
			});
		}
	}

	return Ajax;
});
