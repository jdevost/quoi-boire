define(['./intern', 'intern'], function(config, intern) {
	'use strict';

	config.tunnel = 'SauceLabsTunnel';
	config.tunnelOptions = {
		username: intern.args.sluser,
		accessKey: intern.args.slkey
	};

	return config;
});
