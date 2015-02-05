App.Router.map(function() {
  this.resource('about', function() {
  	this.resource('person', { path: '/:person' });
	});
  this.resource('catalog');
  this.resource('bike', { path: '/bike/:make' });
  this.route('available');
  this.route('credits');
});