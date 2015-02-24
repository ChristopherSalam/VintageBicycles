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
      					this.set('sortProperties', ['model']);
 		})
	}
});

App.BianchiController = Em.ArrayController.extend({
	sortBianchi: Em.computed.filterBy('model', 'make', 'Bianchi'), 
	sortProperties: ['model'],
	bianchiCount: Em.computed.alias('sortBianchi.length')
});


