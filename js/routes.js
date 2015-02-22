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
    return App.CATALOG.findBy('desc', params.desc);
  }
});

App.BianchiRoute = Em.Route.extend({
  model: function() {
    return App.CATALOG;
  }
});

App.CatalogMiyataRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('catalog').filter(function(bike){
      return bike.get('make') == "Miyata";
    });
  }
});