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
  this.route('bike', {path: '/catalog/:make/:model'});
  this.route('references');
  this.route('credits', {path: 'mymaudlincareer'});
});