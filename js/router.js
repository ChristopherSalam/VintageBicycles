App.Router.map(function() {
  this.resource('about', function() {
  	this.resource('person', {path: '/:person' });
  });
  this.resource('catalog', function() {
  });
  //this.resource('bianchi', {path: 'bianchi/:bianchi'});
  this.route('bianchi', {path: 'bianchi/:bianchi'});
  this.resource('bike', {path: ':make/:model'});
  this.route('references');
  this.route('credits', {path: 'mymaudlincareer'});
});