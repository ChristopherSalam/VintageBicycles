App.Router.map(function() {
  this.route('about', function() {
  	this.resource('person', {path: '/:person' });
  });
  this.resource('catalog', function() {
    this.resource('make', {path: '/:make'});
  });
  this.resource('bianchi', {path: '/catalog/bianchi/:bianchi'});  
  this.resource('cannondale', {path: '/catalog/cannondale/:cannondale'});
  this.resource('centurion', {path: '/catalog/centurion/:centurion'});
  this.resource('nishiki', {path: '/catalog/nishiki/:nishiki'});
  this.resource('peugeot', {path: '/catalog/peugeot/:peugeot'});
  this.resource('raleigh', {path: '/catalog/raleigh/:raleigh'});
  this.resource('specialized', {path: '/catalog/specialized/:specialized'}); 
  this.resource('trek', {path: '/catalog/trek/:trek'});
  this.resource('japanese', {path: '/catalog/japanese/:japanese'})
  this.resource('english', {path: '/catalog/english/:english'})
  this.resource('french', {path: '/catalog/french/:french'})
  this.resource('italian', {path: '/catalog/italian/:italian'})
  this.resource('usa', {path: '/catalog/usa/:usa'})
  this.route('bike', {path: '/catalog/:make/:model'});
  this.route('references', function() {
    this.resource('reference', {path: '/:make' });
  });
  this.route('vendors', function() {
    this.resource('vendor', {path: '/:make' });
  });
  this.route('credits', {path: 'mymaudlincareer'});
});