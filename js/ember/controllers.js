App.IndexController = Em.Controller.extend({
	year: function() {
		return (new Date()).getFullYear();
	}.property()
})

App.ReferencesController = Em.ArrayController.extend({
	actions: { 
	sortProperties: (function() {
     					this.set('sortProperties',['make']);
    	}),
	}
});

App.CatalogController = Em.ArrayController.extend({
	//sortProperties: ['make','model']
	catalogCount: Em.computed.alias('length'),
});

App.BianchiController = Em.ArrayController.extend({
	sortBianchi: Em.computed.filterBy('model', 'make', 'Bianchi'), 
	bianchiCount: Em.computed.alias('sortBianchi.length')
});

App.CannondaleController = Em.ArrayController.extend({
	sortCannondale: Em.computed.filterBy('model', 'make', 'Cannondale'), 
	cannondaleCount: Em.computed.alias('sortCannondale.length')
});

App.CenturionController = Em.ArrayController.extend({
	sortCenturion: Em.computed.filterBy('model', 'make', 'Centurion'), 
	centurionCount: Em.computed.alias('sortCenturion.length')
});

App.NishikiController = Em.ArrayController.extend({
	sortNishiki: Em.computed.filterBy('model', 'make', 'Nishiki'), 
	nishikiCount: Em.computed.alias('sortNishiki.length')
});

App.SpecializedController = Em.ArrayController.extend({
	sortSpecialized: Em.computed.filterBy('model', 'make', 'Specialized'), 
	specializedCount: Em.computed.alias('sortSpecialized.length')
});

App.PeugeotController = Em.ArrayController.extend({
	sortPeugeot: Em.computed.filterBy('model', 'make', 'Peugeot'), 
	peugeotCount: Em.computed.alias('sortPeugeot.length')
});

App.RaleighController = Em.ArrayController.extend({
	sortRaleigh: Em.computed.filterBy('model', 'make', 'Raleigh'), 
	raleighCount: Em.computed.alias('sortRaleigh.length')
});

App.TrekController = Em.ArrayController.extend({
	sortTrek: Em.computed.filterBy('model', 'make', 'Trek'), 
	trekCount: Em.computed.alias('sortTrek.length')
});

App.JapaneseController = Em.ArrayController.extend({
	sortJapanese: Em.computed.filterBy('model', 'country', 'japan'), 
	japaneseCount: Em.computed.alias('sortJapanese.length')
});

App.FrenchController = Em.ArrayController.extend({
	sortFrench: Em.computed.filterBy('model', 'country', 'france'), 
	frenchCount: Em.computed.alias('sortFrench.length')
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