var webpack = require('webpack');

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		exec: {
			killSelenium: {
				command: 'pkill -f "java -jar .*selenium-server-standalone"',
				stdout: false,
				stderr: false,
				exitCode: [0,1]
			},
			startSelenium: {
				cwd: 'node_modules/selenium-server-standalone-jar/jar',
				command: 'java -jar selenium-server-standalone-2.53.1.jar -Dwebdriver.chrome.driver=../../chromedriver/lib/chromedriver/chromedriver &',
				stdout: false,
				stderr: false
			},
			waitForSelenium: {
				command: 'until $(curl -f -I -o /dev/null -s http://localhost:4444/wd/hub); do \n sleep 1 \n done',
				stdout: false,
				stderr: false
			}
		},

		watch: {
			js: {
				files: ['./src/**/*.js'],
				tasks: ['webpack'],
				options: {
					livereload: true
				}
			},
			sass: {
				files: ['./src/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
		},

		sass: {
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'./dist/quoi-boire.css': './src/sass/all.scss'
				}
			}
		},

		babel: {
			options: {
				sourceMap: true,
				presets: ['es2015']
			},
			dist: {
				files: {
					'dist/Ajax.js': 'src/js/Ajax.js',
					'dist/Facet.js': 'src/js/Facet.js',
					'dist/Facets.js': 'src/js/Facets.js',
					'dist/QuoiBoireApp.js': 'src/js/QuoiBoireApp.js',
					'dist/SearchRequest.js': 'src/js/SearchRequest.js',
					'dist/SearchSummary.js': 'src/js/SearchSummary.js',
					'dist/Util.js': 'src/js/Util.js'
				}
			}
		},

		jshint: {
			all: [
				'./src/**/*.js'
			],
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			}
		},

		intern: {
			local: {
				options:{
					runType: 'runner',
					config: 'tests/intern.js',
					TOKEN: grunt.option('token'),
					suites: ['tests/unit/all']
				}
			},
			saucelabs: {
				options:{
					runType: 'runner',
					config: 'tests/intern-saucelabs.js',
					TOKEN: grunt.option('token'),
					sluser: grunt.option('sluser'),
					slkey: grunt.option('slkey'),
					suites: ['tests/unit/all']
				}
			}
		},

		webpack: {
			coveoChallenge: {
				// webpack options
				entry: './src/js/QuoiBoireApp.js',
				output: {
					path: './dist/',
					filename: 'quoi-boire.js'
				},
				'optimize-minimize': true,
				plugins: [
					new webpack.optimize.LimitChunkCountPlugin({maxChunks:1})
// 					new webpack.optimize.UglifyJsPlugin({
//						compress: {
//	  					warnings: false
//	 					}
// 					})
				],
				resolve: {
					extensions: ['', '.js', '.jsx'],
					modulesDirectories: ['./src/js']
				},
				stats: {
					// Configure the console output
					colors: false,
					modules: true,
					reasons: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('intern');

	grunt.registerTask('build', 'Builds (compress) JavaScript and pre-process Sass files into CSS', ['sass', 'jshint', 'webpack']);
	grunt.registerTask('default', ['watch']);

	grunt.registerTask('tests', 'Run unit tests', ['exec:killSelenium', 'exec:startSelenium', 'exec:waitForSelenium','intern:local', 'exec:killSelenium']);
	grunt.registerTask('tests-sl', 'Run unit tests', ['exec:killSelenium', 'intern:saucelabs']);
};
