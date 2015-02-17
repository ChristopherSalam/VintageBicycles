App.IndexController = Ember.Controller.extend({
	time: function() {
		return (new Date()).toDateString();
	}.property()
})

App.CatalogController = Ember.ArrayController.extend({
	actions: {
		sortByMake: (function() {
			this.set('sortProperties', ['make']);
		})
	},
	catalogCount: Ember.computed.alias('length')
});
