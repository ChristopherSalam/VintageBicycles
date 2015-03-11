App.AboutRoute = Em.Route.extend({
  model: function() {
    return App.ABOUT;
  }
});

App.PersonRoute = Em.Route.extend({
  model: function(params) {
    return App.ABOUT.findBy('person', params.person);
  }
});

App.CatalogRoute = Em.Route.extend({
  model: function() {
    return App.CATALOG;
  }
});

App.BikeRoute = Em.Route.extend({
  model: function(params) {
    return App.CATALOG.findBy('model', params.model);
  }
});