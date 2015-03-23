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

App.ReferencesRoute = Em.Route.extend({
  model: function() {
    return App.REFERENCES;
  }
});

App.VendorsRoute = Em.Route.extend({
  model: function() {
    return App.VENDORS;
  }
});

// App.ReferenceRoute = Em.Route.extend({
//   model: function(params) {
//     return App.REFERENCES
//   }
// });