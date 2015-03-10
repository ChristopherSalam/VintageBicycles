App.Router.map(function() {
  this.route('about', function() {
  	this.resource('person', {path: '/:person' });
  });
  this.route('catalog', function() {
  });
  this.resource('bianchi', {path: '/catalog/:bianchi'});  
  this.resource('cannondale', {path: '/catalog/:cannondale'});
  this.resource('peugeot', {path: '/catalog/:peugeot'});
  this.resource('trek', {path: '/catalog/:trek'});
  this.route('bike', {path: '/catalog/:make/:model'});
  this.route('references');
  this.route('credits', {path: 'mymaudlincareer'});
});