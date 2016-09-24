var webpack = require('webpack');

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
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
					'./public/bin/quoi-boire.css': './src/sass/all.scss'
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

		webpack: {
			coveoChallenge: {
				// webpack options
				entry: './src/js/app.js',
				output: {
					path: './public/bin/',
					filename: 'quoi-boire.js'
				},
				'optimize-minimize': true,
				plugins: [
					new webpack.optimize.LimitChunkCountPlugin({maxChunks:1})
// 					new webpack.optimize.UglifyJsPlugin({
//						compress: {
//      					warnings: false
//     					}
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
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('build', 'Builds (compress) JavaScript and pre-process Sass files into CSS', ['sass', 'jshint', 'webpack']);
	grunt.registerTask('default', ['watch']);
};
