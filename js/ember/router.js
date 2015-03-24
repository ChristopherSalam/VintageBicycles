App.Router.map(function() {
  this.route('about', function() {
  	this.resource('person', {path: '/:person' });
  });
  this.route('catalog', function() {
  });
  this.resource('bianchi', {path: '/catalog/bianchi/:bianchi'});  
  this.resource('cannondale', {path: '/catalog/cannondale/:cannondale'});
  this.resource('peugeot', {path: '/catalog/peugeot/:peugeot'});
  this.resource('trek', {path: '/catalog/trek/:trek'});
  this.resource('japanese', {path: '/catalog/japanese/:japanese'})
  this.resource('english', {path: '/catalog/english/:english'})
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