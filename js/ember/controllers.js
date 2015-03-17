App.IndexController = Em.Controller.extend({
	time: function() {
		return (new Date()).toDateString();
	}.property()
})

App.ReferencesController = Em.ArrayController.extend({
});

App.CatalogController = Em.ArrayController.extend({
	//sortProperties: ['make','model']
	catalogCount: Em.computed.alias('length'),
	actions: { 
		sortByMake: (function() {
      					this.set('sortProperties', ['make','model']);
 		}),
	}
});

App.BianchiController = Em.ArrayController.extend({
	sortBianchi: Em.computed.filterBy('model', 'make', 'Bianchi'), 
	bianchiCount: Em.computed.alias('sortBianchi.length')
});

App.CannondaleController = Em.ArrayController.extend({
	sortCannondale: Em.computed.filterBy('model', 'make', 'Cannondale'), 
	cannondaleCount: Em.computed.alias('sortCannondale.length')
});

App.PeugeotController = Em.ArrayController.extend({
	sortPeugeot: Em.computed.filterBy('model', 'make', 'Peugeot'), 
	peugeotCount: Em.computed.alias('sortPeugeot.length')
});

App.TrekController = Em.ArrayController.extend({
	sortTrek: Em.computed.filterBy('model', 'make', 'Trek'), 
	trekCount: Em.computed.alias('sortTrek.length')
});

App.JapaneseController = Em.ArrayController.extend({
	sortJapanese: Em.computed.filterBy('model', 'country', 'japan'), 
	japaneseCount: Em.computed.alias('sortJapanese.length')
});

App.EnglishController = Em.ArrayController.extend({
	sortUk: Em.computed.filterBy('model', 'country', 'uk'), 
	ukCount: Em.computed.alias('sortUk.length')
});

App.ItalianController = Em.ArrayController.extend({
	sortItalian: Em.computed.filterBy('model', 'country', 'italy'), 
	italianCount: Em.computed.alias('sortItalian.length')
});

App.UsaController = Em.ArrayController.extend({
	sortUsa: Em.computed.filterBy('model', 'country', 'usa'), 
	usaCount: Em.computed.alias('sortUsa.length')
});