App.AboutRoute = Ember.Route.extend({
  model: function() {
    return App.ABOUT;
  }
});

App.PersonRoute = Ember.Route.extend({
  model: function(params) {
    return App.ABOUT.findBy('person', params.person);
  }
});

App.CatalogRoute = Ember.Route.extend({
  model: function() {
    return App.CATALOG;
  }
});

App.BikeRoute = Ember.Route.extend({
  model: function(params) {
    return App.CATALOG.findBy('make', params.make);
  }
});