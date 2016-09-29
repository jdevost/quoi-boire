define([], function() {
	'use strict';

	class Util {

		static getColorForPastille(sPastille) {
			return {
				'Fruit__et_l_ger_': '#e9c5dd',
				'Fruit__et_g_n_reux_': '#de9627',
				'Aromatique_et_souple_': '#c9333a',
				'Aromatique_et_charnu_': '#660a35',
				'D_licat_et_l_ger_': '#edf2c2',
				'Fruit__et_vif_': '#f8e622',
				'Aromatique_et_rond_': '#f8e622',
				'Fruit__et_doux_': '#add3cd',
				'Fruit__et_extra_doux_': '#a0d9f6',
				'L_ger_et_floral_': '#fedbac',
				'Mi_cors__et_fruit__': '#f9be27',
				'Mi_cors__et_bois__': '#b82f3d',
				'Cors__et_complexe_': '#9f5a18',
				'Cors__et_fum__': '#452d26'

				// 'Fruité et léger.': '#e9c5dd',
				// 'Fruité et généreux.': '#de9627',
				// 'Aromatique et souple.': '#c9333a',
				// 'Aromatique et charnu.': '#660a35',
				// 'Délicat et léger.': '#edf2c2',
				// 'Fruité et vif.': '#f8e622',
				// 'Aromatique et rond.': '#f8e622',
				// 'Fruité et doux.': '#add3cd',
				// 'Fruité et extra-doux.': '#a0d9f6',
				//
				// 'Léger et floral.': '#fedbac',
				// 'Mi-corsé et fruité.': '#f9be27',
				// 'Mi-corsé et boisé.': '#b82f3d',
				// 'Corsé et complexe.': '#9f5a18',
				// 'Corsé et fumé.': '#452d26'
			}[(''+sPastille).replace(/[^0-9a-z]/gi,'_')] || null;
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
