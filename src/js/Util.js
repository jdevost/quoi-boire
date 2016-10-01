define(['./nls/fr'], function(i18nStrings) {
	'use strict';

	class Util {

		static $(id){
			return document.getElementById(id);
		}

		static addEvent(sId, sEvent, fCallback) {
			Util.$(sId).addEventListener(sEvent, fCallback);
		}

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

		static htmlEncode(str) {
			let charMap = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;'
			};

			return (str || '').replace(/[<>&"]/g, (m) => charMap[m] );
		}

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

		static nlsE(id, values) {
			return Util.htmlEncode(Util.nls(id, values));
		}
	}

	return Util;
});
