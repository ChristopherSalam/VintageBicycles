App.Router.map(function() {
  this.resource('about', function() {
  	this.resource('person', { path: '/:person' });
  });
  this.resource('catalog', function() {
  	this.resource('bike', {path: ':make/:model'});
    this.resource('bianchi', { path: '/:bianchi' });
  });
  this.resource('bianchi', { path: '/:bianchi' });
  this.route('references');
  this.route('credits', { path: 'mymaudlincareer'});
});