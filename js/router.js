App.Router.map(function() {
  this.resource('about', function() {
  	this.resource('person', { path: '/:person' });
  });
  this.resource('catalog');
   this.resource('bianchi', { path: '/:bianchi' });
  this.resource('bike', { path: '/bike/:make/:model' });
  this.route('references');
  this.route('credits');
});