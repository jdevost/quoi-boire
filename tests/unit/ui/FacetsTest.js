define([
	'intern!object',
	'intern/chai!assert',
	'src/js/ui/Facets'
], function(registerSuite, assert, Facets) {
	'use strict';
	//jshint -W109

	registerSuite({
		name: 'Facets Tests',
		setup: function() {},
		teardown: function() {},
		beforeEach: function() {
			let container = document.createElement('div');
			container.id = 'facets-container';
			document.body.appendChild(container);
		},
		afterEach: function() {
			let container = document.getElementById('facets-container');
			container.parentNode.removeChild(container);
			container = null;
		},

		test_render: function(){
			let facets = new Facets();
			assert.equal( facets.render(
				{"groupByResults":[
					{"field":"tpcategorie","Field":"tpcategorie","values":[{"value":"Cocktail au vin","lookupValue":"Cocktail au vin","numberOfResults":3,"score":121110,"valueType":"Standard","Value":"Cocktail au vin","LookupValue":"Cocktail au vin","NumberOfResults":3,"Score":121110,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Cooler au vin","lookupValue":"Cooler au vin","numberOfResults":1,"score":785174,"valueType":"Standard","Value":"Cooler au vin","LookupValue":"Cooler au vin","NumberOfResults":1,"Score":785174,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Eau-de-vie aromatisée","lookupValue":"Eau-de-vie aromatisée","numberOfResults":1,"score":82129,"valueType":"Standard","Value":"Eau-de-vie aromatisée","LookupValue":"Eau-de-vie aromatisée","NumberOfResults":1,"Score":82129,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Grappa","lookupValue":"Grappa","numberOfResults":18,"score":1273655,"valueType":"Standard","Value":"Grappa","LookupValue":"Grappa","NumberOfResults":18,"Score":1273655,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin blanc","lookupValue":"Vin blanc","numberOfResults":31,"score":1471302,"valueType":"Standard","Value":"Vin blanc","LookupValue":"Vin blanc","NumberOfResults":31,"Score":1471302,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin de dessert","lookupValue":"Vin de dessert","numberOfResults":3,"score":247723,"valueType":"Standard","Value":"Vin de dessert","LookupValue":"Vin de dessert","NumberOfResults":3,"Score":247723,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin mousseux rosé","lookupValue":"Vin mousseux rosé","numberOfResults":6,"score":109852,"valueType":"Standard","Value":"Vin mousseux rosé","LookupValue":"Vin mousseux rosé","NumberOfResults":6,"Score":109852,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin rosé","lookupValue":"Vin rosé","numberOfResults":14,"score":247106,"valueType":"Standard","Value":"Vin rosé","LookupValue":"Vin rosé","NumberOfResults":14,"Score":247106,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin rouge","lookupValue":"Vin rouge","numberOfResults":1121,"score":106596712,"valueType":"Standard","Value":"Vin rouge","LookupValue":"Vin rouge","NumberOfResults":1121,"Score":106596712,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Whisky écossais","lookupValue":"Whisky écossais","numberOfResults":4,"score":211854,"valueType":"Standard","Value":"Whisky écossais","LookupValue":"Whisky écossais","NumberOfResults":4,"Score":211854,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tpformat","Field":"tpformat","values":[{"value":"1 L","lookupValue":"1 L","numberOfResults":13,"score":4349186,"valueType":"Standard","Value":"1 L","LookupValue":"1 L","NumberOfResults":13,"Score":4349186,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"1,5 L","lookupValue":"1,5 L","numberOfResults":27,"score":413982,"valueType":"Standard","Value":"1,5 L","LookupValue":"1,5 L","NumberOfResults":27,"Score":413982,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"250 ml","lookupValue":"250 ml","numberOfResults":4,"score":512528,"valueType":"Standard","Value":"250 ml","LookupValue":"250 ml","NumberOfResults":4,"Score":512528,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"3 L","lookupValue":"3 L","numberOfResults":15,"score":475717,"valueType":"Standard","Value":"3 L","LookupValue":"3 L","NumberOfResults":15,"Score":475717,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"375 ml","lookupValue":"375 ml","numberOfResults":21,"score":1027746,"valueType":"Standard","Value":"375 ml","LookupValue":"375 ml","NumberOfResults":21,"Score":1027746,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"4 L","lookupValue":"4 L","numberOfResults":4,"score":3915373,"valueType":"Standard","Value":"4 L","LookupValue":"4 L","NumberOfResults":4,"Score":3915373,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"4 X 270 ml","lookupValue":"4 X 270 ml","numberOfResults":1,"score":23377,"valueType":"Standard","Value":"4 X 270 ml","LookupValue":"4 X 270 ml","NumberOfResults":1,"Score":23377,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"500 ml","lookupValue":"500 ml","numberOfResults":14,"score":762377,"valueType":"Standard","Value":"500 ml","LookupValue":"500 ml","NumberOfResults":14,"Score":762377,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"6 L","lookupValue":"6 L","numberOfResults":3,"score":57225,"valueType":"Standard","Value":"6 L","LookupValue":"6 L","NumberOfResults":3,"Score":57225,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"700 ml","lookupValue":"700 ml","numberOfResults":17,"score":1287777,"valueType":"Standard","Value":"700 ml","LookupValue":"700 ml","NumberOfResults":17,"Score":1287777,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tppays","Field":"tppays","values":[{"value":"Afrique du Sud","lookupValue":"Afrique du Sud","numberOfResults":35,"score":2759792,"valueType":"Standard","Value":"Afrique du Sud","LookupValue":"Afrique du Sud","NumberOfResults":35,"Score":2759792,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Argentine","lookupValue":"Argentine","numberOfResults":18,"score":2058468,"valueType":"Standard","Value":"Argentine","LookupValue":"Argentine","NumberOfResults":18,"Score":2058468,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Australie","lookupValue":"Australie","numberOfResults":26,"score":2890210,"valueType":"Standard","Value":"Australie","LookupValue":"Australie","NumberOfResults":26,"Score":2890210,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Autriche","lookupValue":"Autriche","numberOfResults":2,"score":180598,"valueType":"Standard","Value":"Autriche","LookupValue":"Autriche","NumberOfResults":2,"Score":180598,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Bulgarie","lookupValue":"Bulgarie","numberOfResults":2,"score":303478,"valueType":"Standard","Value":"Bulgarie","LookupValue":"Bulgarie","NumberOfResults":2,"Score":303478,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Canada","lookupValue":"Canada","numberOfResults":36,"score":2250821,"valueType":"Standard","Value":"Canada","LookupValue":"Canada","NumberOfResults":36,"Score":2250821,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Chili","lookupValue":"Chili","numberOfResults":25,"score":3773988,"valueType":"Standard","Value":"Chili","LookupValue":"Chili","NumberOfResults":25,"Score":3773988,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Espagne","lookupValue":"Espagne","numberOfResults":43,"score":952044,"valueType":"Standard","Value":"Espagne","LookupValue":"Espagne","NumberOfResults":43,"Score":952044,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"États-Unis","lookupValue":"États-Unis","numberOfResults":189,"score":47458976,"valueType":"Standard","Value":"États-Unis","LookupValue":"États-Unis","NumberOfResults":189,"Score":47458976,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"France","lookupValue":"France","numberOfResults":525,"score":23508514,"valueType":"Standard","Value":"France","LookupValue":"France","NumberOfResults":525,"Score":23508514,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tpprixbande","Field":"tpprixbande","values":[{"value":"0$ - 10$","lookupValue":"0$ - 10$","numberOfResults":21,"score":7014666,"valueType":"Standard","Value":"0$ - 10$","LookupValue":"0$ - 10$","NumberOfResults":21,"Score":7014666,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"100$ - 250$","lookupValue":"100$ - 250$","numberOfResults":98,"score":3076729,"valueType":"Standard","Value":"100$ - 250$","LookupValue":"100$ - 250$","NumberOfResults":98,"Score":3076729,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"15$ - 20$","lookupValue":"15$ - 20$","numberOfResults":208,"score":15194840,"valueType":"Standard","Value":"15$ - 20$","LookupValue":"15$ - 20$","NumberOfResults":208,"Score":15194840,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"20$ - 30$","lookupValue":"20$ - 30$","numberOfResults":318,"score":13395208,"valueType":"Standard","Value":"20$ - 30$","LookupValue":"20$ - 30$","NumberOfResults":318,"Score":13395208,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"250$ - 500$","lookupValue":"250$ - 500$","numberOfResults":44,"score":599559,"valueType":"Standard","Value":"250$ - 500$","LookupValue":"250$ - 500$","NumberOfResults":44,"Score":599559,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"30$ - 40$","lookupValue":"30$ - 40$","numberOfResults":121,"score":3654731,"valueType":"Standard","Value":"30$ - 40$","LookupValue":"30$ - 40$","NumberOfResults":121,"Score":3654731,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"40$ - 50$","lookupValue":"40$ - 50$","numberOfResults":67,"score":4570698,"valueType":"Standard","Value":"40$ - 50$","LookupValue":"40$ - 50$","NumberOfResults":67,"Score":4570698,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"50$ - 75$","lookupValue":"50$ - 75$","numberOfResults":106,"score":21013739,"valueType":"Standard","Value":"50$ - 75$","LookupValue":"50$ - 75$","NumberOfResults":106,"Score":21013739,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"500$ - 1000$","lookupValue":"500$ - 1000$","numberOfResults":15,"score":474325,"valueType":"Standard","Value":"500$ - 1000$","LookupValue":"500$ - 1000$","NumberOfResults":15,"Score":474325,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tppastilledegout","Field":"tppastilledegout","values":[{"value":"Aromatique et charnu.","lookupValue":"Aromatique et charnu.","numberOfResults":49,"score":2211432,"valueType":"Standard","Value":"Aromatique et charnu.","LookupValue":"Aromatique et charnu.","NumberOfResults":49,"Score":2211432,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Aromatique et rond.","lookupValue":"Aromatique et rond.","numberOfResults":2,"score":62585,"valueType":"Standard","Value":"Aromatique et rond.","LookupValue":"Aromatique et rond.","NumberOfResults":2,"Score":62585,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Aromatique et souple.","lookupValue":"Aromatique et souple.","numberOfResults":106,"score":28585250,"valueType":"Standard","Value":"Aromatique et souple.","LookupValue":"Aromatique et souple.","NumberOfResults":106,"Score":28585250,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Délicat et léger.","lookupValue":"Délicat et léger.","numberOfResults":5,"score":195045,"valueType":"Standard","Value":"Délicat et léger.","LookupValue":"Délicat et léger.","NumberOfResults":5,"Score":195045,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et doux.","lookupValue":"Fruité et doux.","numberOfResults":2,"score":73813,"valueType":"Standard","Value":"Fruité et doux.","LookupValue":"Fruité et doux.","NumberOfResults":2,"Score":73813,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et extra-doux.","lookupValue":"Fruité et extra-doux.","numberOfResults":1,"score":44921,"valueType":"Standard","Value":"Fruité et extra-doux.","LookupValue":"Fruité et extra-doux.","NumberOfResults":1,"Score":44921,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et généreux.","lookupValue":"Fruité et généreux.","numberOfResults":86,"score":11498387,"valueType":"Standard","Value":"Fruité et généreux.","LookupValue":"Fruité et généreux.","NumberOfResults":86,"Score":11498387,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et léger.","lookupValue":"Fruité et léger.","numberOfResults":26,"score":11817918,"valueType":"Standard","Value":"Fruité et léger.","LookupValue":"Fruité et léger.","NumberOfResults":26,"Score":11817918,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et vif.","lookupValue":"Fruité et vif.","numberOfResults":5,"score":220050,"valueType":"Standard","Value":"Fruité et vif.","LookupValue":"Fruité et vif.","NumberOfResults":5,"Score":220050,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Mi-corsé et boisé.","lookupValue":"Mi-corsé et boisé.","numberOfResults":1,"score":33254,"valueType":"Standard","Value":"Mi-corsé et boisé.","LookupValue":"Mi-corsé et boisé.","NumberOfResults":1,"Score":33254,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]}]
				}),
				'<div class="facet" tabIndex="1">\n\t\t\t\t<div class="facet-label">Catégorie</div>\n\t\t\t\t<div class="facet-values"><label class="facet-value" data-field="tpcategorie" data-value="Cocktail au vin"><input type="checkbox" >Cocktail au vin<span class="nb"> (3)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Cooler au vin"><input type="checkbox" >Cooler au vin<span class="nb"> (1)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Eau-de-vie aromatisée"><input type="checkbox" >Eau-de-vie aromatisée<span class="nb"> (1)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Grappa"><input type="checkbox" >Grappa<span class="nb"> (18)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Vin blanc"><input type="checkbox" >Vin blanc<span class="nb"> (31)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Vin de dessert"><input type="checkbox" >Vin de dessert<span class="nb"> (3)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Vin mousseux rosé"><input type="checkbox" >Vin mousseux rosé<span class="nb"> (6)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Vin rosé"><input type="checkbox" >Vin rosé<span class="nb"> (14)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Vin rouge"><input type="checkbox" >Vin rouge<span class="nb"> (1121)</span></label><label class="facet-value" data-field="tpcategorie" data-value="Whisky écossais"><input type="checkbox" >Whisky écossais<span class="nb"> (4)</span></label></div>\n\t\t\t</div><div class="facet" tabIndex="1">\n\t\t\t\t<div class="facet-label">Format</div>\n\t\t\t\t<div class="facet-values"><label class="facet-value" data-field="tpformat" data-value="1 L"><input type="checkbox" >1 L<span class="nb"> (13)</span></label><label class="facet-value" data-field="tpformat" data-value="1,5 L"><input type="checkbox" >1,5 L<span class="nb"> (27)</span></label><label class="facet-value" data-field="tpformat" data-value="250 ml"><input type="checkbox" >250 ml<span class="nb"> (4)</span></label><label class="facet-value" data-field="tpformat" data-value="3 L"><input type="checkbox" >3 L<span class="nb"> (15)</span></label><label class="facet-value" data-field="tpformat" data-value="375 ml"><input type="checkbox" >375 ml<span class="nb"> (21)</span></label><label class="facet-value" data-field="tpformat" data-value="4 L"><input type="checkbox" >4 L<span class="nb"> (4)</span></label><label class="facet-value" data-field="tpformat" data-value="4 X 270 ml"><input type="checkbox" >4 X 270 ml<span class="nb"> (1)</span></label><label class="facet-value" data-field="tpformat" data-value="500 ml"><input type="checkbox" >500 ml<span class="nb"> (14)</span></label><label class="facet-value" data-field="tpformat" data-value="6 L"><input type="checkbox" >6 L<span class="nb"> (3)</span></label><label class="facet-value" data-field="tpformat" data-value="700 ml"><input type="checkbox" >700 ml<span class="nb"> (17)</span></label></div>\n\t\t\t</div><div class="facet" tabIndex="1">\n\t\t\t\t<div class="facet-label">Pays</div>\n\t\t\t\t<div class="facet-values"><label class="facet-value" data-field="tppays" data-value="Afrique du Sud"><input type="checkbox" >Afrique du Sud<span class="nb"> (35)</span></label><label class="facet-value" data-field="tppays" data-value="Argentine"><input type="checkbox" >Argentine<span class="nb"> (18)</span></label><label class="facet-value" data-field="tppays" data-value="Australie"><input type="checkbox" >Australie<span class="nb"> (26)</span></label><label class="facet-value" data-field="tppays" data-value="Autriche"><input type="checkbox" >Autriche<span class="nb"> (2)</span></label><label class="facet-value" data-field="tppays" data-value="Bulgarie"><input type="checkbox" >Bulgarie<span class="nb"> (2)</span></label><label class="facet-value" data-field="tppays" data-value="Canada"><input type="checkbox" >Canada<span class="nb"> (36)</span></label><label class="facet-value" data-field="tppays" data-value="Chili"><input type="checkbox" >Chili<span class="nb"> (25)</span></label><label class="facet-value" data-field="tppays" data-value="Espagne"><input type="checkbox" >Espagne<span class="nb"> (43)</span></label><label class="facet-value" data-field="tppays" data-value="États-Unis"><input type="checkbox" >États-Unis<span class="nb"> (189)</span></label><label class="facet-value" data-field="tppays" data-value="France"><input type="checkbox" >France<span class="nb"> (525)</span></label></div>\n\t\t\t</div><div class="facet" tabIndex="1">\n\t\t\t\t<div class="facet-label">Bande de prix</div>\n\t\t\t\t<div class="facet-values"><label class="facet-value" data-field="tpprixbande" data-value="0$ - 10$"><input type="checkbox" >0$ - 10$<span class="nb"> (21)</span></label><label class="facet-value" data-field="tpprixbande" data-value="10$ - 15$"><input type="checkbox" >10$ - 15$<span class="nb"> (162)</span></label><label class="facet-value" data-field="tpprixbande" data-value="15$ - 20$"><input type="checkbox" >15$ - 20$<span class="nb"> (208)</span></label><label class="facet-value" data-field="tpprixbande" data-value="20$ - 30$"><input type="checkbox" >20$ - 30$<span class="nb"> (318)</span></label><label class="facet-value" data-field="tpprixbande" data-value="30$ - 40$"><input type="checkbox" >30$ - 40$<span class="nb"> (121)</span></label><label class="facet-value" data-field="tpprixbande" data-value="40$ - 50$"><input type="checkbox" >40$ - 50$<span class="nb"> (67)</span></label><label class="facet-value" data-field="tpprixbande" data-value="50$ - 75$"><input type="checkbox" >50$ - 75$<span class="nb"> (106)</span></label><label class="facet-value" data-field="tpprixbande" data-value="100$ - 250$"><input type="checkbox" >100$ - 250$<span class="nb"> (98)</span></label><label class="facet-value" data-field="tpprixbande" data-value="250$ - 500$"><input type="checkbox" >250$ - 500$<span class="nb"> (44)</span></label><label class="facet-value" data-field="tpprixbande" data-value="500$ - 1000$"><input type="checkbox" >500$ - 1000$<span class="nb"> (15)</span></label></div>\n\t\t\t</div><div class="facet" tabIndex="1">\n\t\t\t\t<div class="facet-label">Pastille</div>\n\t\t\t\t<div class="facet-values"><label class="facet-value" data-field="tppastilledegout" data-value="Aromatique et charnu."><input type="checkbox" ><span class="facet-pastille" style="background-color: #660a35;">&nbsp;</span>Aromatique et charnu.<span class="nb"> (49)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Aromatique et rond."><input type="checkbox" ><span class="facet-pastille" style="background-color: #f8e622;">&nbsp;</span>Aromatique et rond.<span class="nb"> (2)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Aromatique et souple."><input type="checkbox" ><span class="facet-pastille" style="background-color: #c9333a;">&nbsp;</span>Aromatique et souple.<span class="nb"> (106)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Délicat et léger."><input type="checkbox" ><span class="facet-pastille" style="background-color: #edf2c2;">&nbsp;</span>Délicat et léger.<span class="nb"> (5)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Fruité et doux."><input type="checkbox" ><span class="facet-pastille" style="background-color: #add3cd;">&nbsp;</span>Fruité et doux.<span class="nb"> (2)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Fruité et extra-doux."><input type="checkbox" ><span class="facet-pastille" style="background-color: #a0d9f6;">&nbsp;</span>Fruité et extra-doux.<span class="nb"> (1)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Fruité et généreux."><input type="checkbox" ><span class="facet-pastille" style="background-color: #de9627;">&nbsp;</span>Fruité et généreux.<span class="nb"> (86)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Fruité et léger."><input type="checkbox" ><span class="facet-pastille" style="background-color: #e9c5dd;">&nbsp;</span>Fruité et léger.<span class="nb"> (26)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Fruité et vif."><input type="checkbox" ><span class="facet-pastille" style="background-color: #f8e622;">&nbsp;</span>Fruité et vif.<span class="nb"> (5)</span></label><label class="facet-value" data-field="tppastilledegout" data-value="Mi-corsé et boisé."><input type="checkbox" ><span class="facet-pastille" style="background-color: #b82f3d;">&nbsp;</span>Mi-corsé et boisé.<span class="nb"> (1)</span></label></div>\n\t\t\t</div>');
		},

		test_show: function(){
			assert.isOk( document );

			var facets = new Facets();
			facets.show(
				{"groupByResults":[
					{"field":"tpcategorie","Field":"tpcategorie","values":[{"value":"Cocktail au vin","lookupValue":"Cocktail au vin","numberOfResults":3,"score":121110,"valueType":"Standard","Value":"Cocktail au vin","LookupValue":"Cocktail au vin","NumberOfResults":3,"Score":121110,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Cooler au vin","lookupValue":"Cooler au vin","numberOfResults":1,"score":785174,"valueType":"Standard","Value":"Cooler au vin","LookupValue":"Cooler au vin","NumberOfResults":1,"Score":785174,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Eau-de-vie aromatisée","lookupValue":"Eau-de-vie aromatisée","numberOfResults":1,"score":82129,"valueType":"Standard","Value":"Eau-de-vie aromatisée","LookupValue":"Eau-de-vie aromatisée","NumberOfResults":1,"Score":82129,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Grappa","lookupValue":"Grappa","numberOfResults":18,"score":1273655,"valueType":"Standard","Value":"Grappa","LookupValue":"Grappa","NumberOfResults":18,"Score":1273655,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin blanc","lookupValue":"Vin blanc","numberOfResults":31,"score":1471302,"valueType":"Standard","Value":"Vin blanc","LookupValue":"Vin blanc","NumberOfResults":31,"Score":1471302,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin de dessert","lookupValue":"Vin de dessert","numberOfResults":3,"score":247723,"valueType":"Standard","Value":"Vin de dessert","LookupValue":"Vin de dessert","NumberOfResults":3,"Score":247723,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin mousseux rosé","lookupValue":"Vin mousseux rosé","numberOfResults":6,"score":109852,"valueType":"Standard","Value":"Vin mousseux rosé","LookupValue":"Vin mousseux rosé","NumberOfResults":6,"Score":109852,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin rosé","lookupValue":"Vin rosé","numberOfResults":14,"score":247106,"valueType":"Standard","Value":"Vin rosé","LookupValue":"Vin rosé","NumberOfResults":14,"Score":247106,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Vin rouge","lookupValue":"Vin rouge","numberOfResults":1121,"score":106596712,"valueType":"Standard","Value":"Vin rouge","LookupValue":"Vin rouge","NumberOfResults":1121,"Score":106596712,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Whisky écossais","lookupValue":"Whisky écossais","numberOfResults":4,"score":211854,"valueType":"Standard","Value":"Whisky écossais","LookupValue":"Whisky écossais","NumberOfResults":4,"Score":211854,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					// {"field":"tpformat","Field":"tpformat","values":[{"value":"1 L","lookupValue":"1 L","numberOfResults":13,"score":4349186,"valueType":"Standard","Value":"1 L","LookupValue":"1 L","NumberOfResults":13,"Score":4349186,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"1,5 L","lookupValue":"1,5 L","numberOfResults":27,"score":413982,"valueType":"Standard","Value":"1,5 L","LookupValue":"1,5 L","NumberOfResults":27,"Score":413982,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"250 ml","lookupValue":"250 ml","numberOfResults":4,"score":512528,"valueType":"Standard","Value":"250 ml","LookupValue":"250 ml","NumberOfResults":4,"Score":512528,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"3 L","lookupValue":"3 L","numberOfResults":15,"score":475717,"valueType":"Standard","Value":"3 L","LookupValue":"3 L","NumberOfResults":15,"Score":475717,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"375 ml","lookupValue":"375 ml","numberOfResults":21,"score":1027746,"valueType":"Standard","Value":"375 ml","LookupValue":"375 ml","NumberOfResults":21,"Score":1027746,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"4 L","lookupValue":"4 L","numberOfResults":4,"score":3915373,"valueType":"Standard","Value":"4 L","LookupValue":"4 L","NumberOfResults":4,"Score":3915373,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"4 X 270 ml","lookupValue":"4 X 270 ml","numberOfResults":1,"score":23377,"valueType":"Standard","Value":"4 X 270 ml","LookupValue":"4 X 270 ml","NumberOfResults":1,"Score":23377,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"500 ml","lookupValue":"500 ml","numberOfResults":14,"score":762377,"valueType":"Standard","Value":"500 ml","LookupValue":"500 ml","NumberOfResults":14,"Score":762377,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"6 L","lookupValue":"6 L","numberOfResults":3,"score":57225,"valueType":"Standard","Value":"6 L","LookupValue":"6 L","NumberOfResults":3,"Score":57225,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"700 ml","lookupValue":"700 ml","numberOfResults":17,"score":1287777,"valueType":"Standard","Value":"700 ml","LookupValue":"700 ml","NumberOfResults":17,"Score":1287777,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tppays","Field":"tppays","values":[{"value":"Afrique du Sud","lookupValue":"Afrique du Sud","numberOfResults":35,"score":2759792,"valueType":"Standard","Value":"Afrique du Sud","LookupValue":"Afrique du Sud","NumberOfResults":35,"Score":2759792,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Argentine","lookupValue":"Argentine","numberOfResults":18,"score":2058468,"valueType":"Standard","Value":"Argentine","LookupValue":"Argentine","NumberOfResults":18,"Score":2058468,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Australie","lookupValue":"Australie","numberOfResults":26,"score":2890210,"valueType":"Standard","Value":"Australie","LookupValue":"Australie","NumberOfResults":26,"Score":2890210,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Autriche","lookupValue":"Autriche","numberOfResults":2,"score":180598,"valueType":"Standard","Value":"Autriche","LookupValue":"Autriche","NumberOfResults":2,"Score":180598,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Bulgarie","lookupValue":"Bulgarie","numberOfResults":2,"score":303478,"valueType":"Standard","Value":"Bulgarie","LookupValue":"Bulgarie","NumberOfResults":2,"Score":303478,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Canada","lookupValue":"Canada","numberOfResults":36,"score":2250821,"valueType":"Standard","Value":"Canada","LookupValue":"Canada","NumberOfResults":36,"Score":2250821,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Chili","lookupValue":"Chili","numberOfResults":25,"score":3773988,"valueType":"Standard","Value":"Chili","LookupValue":"Chili","NumberOfResults":25,"Score":3773988,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Espagne","lookupValue":"Espagne","numberOfResults":43,"score":952044,"valueType":"Standard","Value":"Espagne","LookupValue":"Espagne","NumberOfResults":43,"Score":952044,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"États-Unis","lookupValue":"États-Unis","numberOfResults":189,"score":47458976,"valueType":"Standard","Value":"États-Unis","LookupValue":"États-Unis","NumberOfResults":189,"Score":47458976,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"France","lookupValue":"France","numberOfResults":525,"score":23508514,"valueType":"Standard","Value":"France","LookupValue":"France","NumberOfResults":525,"Score":23508514,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tpprixbande","Field":"tpprixbande","values":[{"value":"0$ - 10$","lookupValue":"0$ - 10$","numberOfResults":21,"score":7014666,"valueType":"Standard","Value":"0$ - 10$","LookupValue":"0$ - 10$","NumberOfResults":21,"Score":7014666,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"10$ - 15$","lookupValue":"10$ - 15$","numberOfResults":162,"score":40106598,"valueType":"Standard","Value":"10$ - 15$","LookupValue":"10$ - 15$","NumberOfResults":162,"Score":40106598,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"100$ - 250$","lookupValue":"100$ - 250$","numberOfResults":98,"score":3076729,"valueType":"Standard","Value":"100$ - 250$","LookupValue":"100$ - 250$","NumberOfResults":98,"Score":3076729,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"15$ - 20$","lookupValue":"15$ - 20$","numberOfResults":208,"score":15194840,"valueType":"Standard","Value":"15$ - 20$","LookupValue":"15$ - 20$","NumberOfResults":208,"Score":15194840,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"20$ - 30$","lookupValue":"20$ - 30$","numberOfResults":318,"score":13395208,"valueType":"Standard","Value":"20$ - 30$","LookupValue":"20$ - 30$","NumberOfResults":318,"Score":13395208,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"250$ - 500$","lookupValue":"250$ - 500$","numberOfResults":44,"score":599559,"valueType":"Standard","Value":"250$ - 500$","LookupValue":"250$ - 500$","NumberOfResults":44,"Score":599559,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"30$ - 40$","lookupValue":"30$ - 40$","numberOfResults":121,"score":3654731,"valueType":"Standard","Value":"30$ - 40$","LookupValue":"30$ - 40$","NumberOfResults":121,"Score":3654731,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"40$ - 50$","lookupValue":"40$ - 50$","numberOfResults":67,"score":4570698,"valueType":"Standard","Value":"40$ - 50$","LookupValue":"40$ - 50$","NumberOfResults":67,"Score":4570698,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"50$ - 75$","lookupValue":"50$ - 75$","numberOfResults":106,"score":21013739,"valueType":"Standard","Value":"50$ - 75$","LookupValue":"50$ - 75$","NumberOfResults":106,"Score":21013739,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"500$ - 1000$","lookupValue":"500$ - 1000$","numberOfResults":15,"score":474325,"valueType":"Standard","Value":"500$ - 1000$","LookupValue":"500$ - 1000$","NumberOfResults":15,"Score":474325,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]},
					{"field":"tppastilledegout","Field":"tppastilledegout","values":[{"value":"Aromatique et charnu.","lookupValue":"Aromatique et charnu.","numberOfResults":49,"score":2211432,"valueType":"Standard","Value":"Aromatique et charnu.","LookupValue":"Aromatique et charnu.","NumberOfResults":49,"Score":2211432,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Aromatique et rond.","lookupValue":"Aromatique et rond.","numberOfResults":2,"score":62585,"valueType":"Standard","Value":"Aromatique et rond.","LookupValue":"Aromatique et rond.","NumberOfResults":2,"Score":62585,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Aromatique et souple.","lookupValue":"Aromatique et souple.","numberOfResults":106,"score":28585250,"valueType":"Standard","Value":"Aromatique et souple.","LookupValue":"Aromatique et souple.","NumberOfResults":106,"Score":28585250,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Délicat et léger.","lookupValue":"Délicat et léger.","numberOfResults":5,"score":195045,"valueType":"Standard","Value":"Délicat et léger.","LookupValue":"Délicat et léger.","NumberOfResults":5,"Score":195045,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et doux.","lookupValue":"Fruité et doux.","numberOfResults":2,"score":73813,"valueType":"Standard","Value":"Fruité et doux.","LookupValue":"Fruité et doux.","NumberOfResults":2,"Score":73813,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et extra-doux.","lookupValue":"Fruité et extra-doux.","numberOfResults":1,"score":44921,"valueType":"Standard","Value":"Fruité et extra-doux.","LookupValue":"Fruité et extra-doux.","NumberOfResults":1,"Score":44921,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et généreux.","lookupValue":"Fruité et généreux.","numberOfResults":86,"score":11498387,"valueType":"Standard","Value":"Fruité et généreux.","LookupValue":"Fruité et généreux.","NumberOfResults":86,"Score":11498387,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et léger.","lookupValue":"Fruité et léger.","numberOfResults":26,"score":11817918,"valueType":"Standard","Value":"Fruité et léger.","LookupValue":"Fruité et léger.","NumberOfResults":26,"Score":11817918,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Fruité et vif.","lookupValue":"Fruité et vif.","numberOfResults":5,"score":220050,"valueType":"Standard","Value":"Fruité et vif.","LookupValue":"Fruité et vif.","NumberOfResults":5,"Score":220050,"computedFieldResults":[],"ComputedFieldResults":[]},{"value":"Mi-corsé et boisé.","lookupValue":"Mi-corsé et boisé.","numberOfResults":1,"score":33254,"valueType":"Standard","Value":"Mi-corsé et boisé.","LookupValue":"Mi-corsé et boisé.","NumberOfResults":1,"Score":33254,"computedFieldResults":[],"ComputedFieldResults":[]}],"globalComputedFieldResults":[],"GlobalComputedFieldResults":[]}]
				});

			var nFacets = document.getElementsByClassName('facet');

			assert.equal( nFacets.length, 4 );
			var nFacet = nFacets[1].getElementsByClassName('facet-value')[1];

			assert.equal( nFacet.textContent, 'Argentine (18)' );

			return new Promise(resolve=> {
				facets._pageHandler = {
					addFilter: (field, value)=>{
						assert.equal( field, 'tppays' );
						assert.equal( value, 'Argentine' );
						resolve();
					}
				};

				// this should call addFilter
				nFacet.click();
			});

		}
	});
});
