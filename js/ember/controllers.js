App.IndexController = Em.Controller.extend({
	time: function() {
		return (new Date()).toDateString();
	}.property()
})

App.CatalogController = Em.ArrayController.extend({
	//sortProperties: ['make','model'],
	catalogCount: Em.computed.alias('length'),
	actions: { 
		sortByMake: (function() {
      					this.set('sortProperties', ['make','model']);
 		}),
	}
});

App.BianchiController = Em.ArrayController.extend({
	sortProperties: ['model','make'],
	sortBianchi: Em.computed.filterBy('model', 'make', 'Bianchi'), 
	bianchiCount: Em.computed.alias('sortBianchi.length')
});

App.CannondaleController = Em.ArrayController.extend({
	sortProperties: ['model','make'],
	sortCannondale: Em.computed.filterBy('model', 'make', 'Cannondale'), 
	cannondaleCount: Em.computed.alias('sortCannondale.length')
});

App.PeugeotController = Em.ArrayController.extend({
	sortProperties: ['model','make'],
	sortPeugeot: Em.computed.filterBy('model', 'make', 'Peugeot'), 
	peugeotCount: Em.computed.alias('sortPeugeot.length')
});

App.TrekController = Em.ArrayController.extend({
	sortProperties: ['model','make'],
	sortTrek: Em.computed.filterBy('model', 'make', 'Trek'), 
	trekCount: Em.computed.alias('sortTrek.length')
});

