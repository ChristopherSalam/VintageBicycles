App.IndexController = Em.Controller.extend({
	time: function() {
		return (new Date()).toDateString();
	}.property()
})

App.CatalogController = Em.ArrayController.extend({
	sortProperties: ['make','model'],
	catalogCount: Em.computed.alias('length'),
	actions: { 
		sortByMake: (function() {
      					this.set('sortProperties', ['make','model']);
 		})
	}
});

App.BianchiController = Em.ArrayController.extend({
	sortBianchi: Em.computed.filterBy('model', 'make', 'Bianchi'), 
	bianchiCount: Em.computed.alias('sortBianchi.length')
});

App.CatalogMiyataController = Em.ArrayController.extend({
	sortMiyata: Em.computed.filterBy('model', 'make', 'Miyata'), 
	miyataCount: Em.computed.alias('sortMiyata.length')
});
