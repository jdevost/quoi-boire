define([], function() {
	'use strict';

	class Util {

		static $(id){
			return document.getElementById(id);
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

		static htmlEncode(str) {
			let charMap = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;'
			};

			return (str || '').replace(/[<>&"]/g, (m) => charMap[m] );
		}
	}

	return Util;
});
