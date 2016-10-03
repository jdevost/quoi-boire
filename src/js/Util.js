define(['./nls/fr'], function(i18nStrings) {
	'use strict';

	class Util {

		/**
		 * Helper function to get a DOM node from an id.
		 * @param {string} id for DOM node to find.
		 * @returns {DOMNode}
		 */
		static $(id){
			return document.getElementById(id);
		}

		/**
		 * Helper function to attach an event to a dom node
		 * @param {string} id for DOM node to find.
		 * @param {string} sEvent name of the event.
		 * @param {string} fCallback function to call for this event.
		 */
		static addEvent(id, sEvent, fCallback) {
			Util.$(id).addEventListener(sEvent, fCallback);
		}

		/**
		 * Translate a pastille name to its color
		 */
		static getColorForPastille(sPastille) {
			return {
				'Fruité et léger.': '#e9c5dd',
				'Fruité et généreux.': '#de9627',
				'Aromatique et souple.': '#c9333a',
				'Aromatique et charnu.': '#660a35',
				'Délicat et léger.': '#edf2c2',
				'Fruité et vif.': '#f8e622',
				'Aromatique et rond.': '#f8e622',
				'Fruité et doux.': '#add3cd',
				'Fruité et extra-doux.': '#a0d9f6',

				'Léger et floral.': '#fedbac',
				'Mi-corsé et fruité.': '#f9be27',
				'Mi-corsé et boisé.': '#b82f3d',
				'Corsé et complexe.': '#9f5a18',
				'Corsé et fumé.': '#452d26'
			}[sPastille] || null;
		}

		/**
		 * Translate a pastille name to its abbreviation
		 */
		static getShortNameForPastille(sPastille) {
			return {
				'Fruité et léger.': 'F/L',
				'Fruité et généreux.': 'F/G',
				'Aromatique et souple.': 'A/S',
				'Aromatique et charnu.': 'A/C',
				'Délicat et léger.': 'D/L',
				'Fruité et vif.': 'F/V',
				'Aromatique et rond.': 'A/R',
				'Fruité et doux.': 'F/D',
				'Fruité et extra-doux.': 'F/d',

				'Léger et floral.': 'L/F',
				'Mi-corsé et fruité.': 'c/F',
				'Mi-corsé et boisé.': 'c/B',
				'Corsé et complexe.': 'C/C',
				'Corsé et fumé.': 'C/F'
			}[sPastille] || '';
		}

		/**
		 * Encodes Html characters from a string.
		 * @param {string} str string to encode
		 * @returns {string} HTML-escaped string
		 */
		static htmlEncode(str) {
			let charMap = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;'
			};

			return (str || '').replace(/[<>&"]/g, (m) => charMap[m] );
		}

		/**
		 * Gets a translated string for an id. Can use parameters in the strings.
		 * @param {string} id string key to use in the translation file
		 * @param {object} values object with the values for parameterized strings
		 * @returns {string}
		 */
		static nls(id, values) {
			var str = i18nStrings[id];
			if (str && values) {
				str = str.replace(/\${([^}]+)}/g, (m,v)=> {
					// m is full match, v is the first tagged expression
					return values[v];
				});
			}
			return str || id;
		}

		/**
		 * shortcut to get translation (nls) and encode (htmlEncode)
		 * @param {string} id string key to use in the translation file
		 * @param {object} values object with the values for parameterized strings
		 * @returns {string}
		 */
		static nlsE(id, values) {
			return Util.htmlEncode(Util.nls(id, values));
		}
	}

	return Util;
});
