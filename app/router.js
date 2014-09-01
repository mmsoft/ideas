import Ember from 'ember';

var Router = Ember.Router.extend({
	location: IdeasENV.locationType
});

Router.map(function() {
	this.resource('posts', {
		path: '/'
	});
	//this.resource('reveal');
	//this.route('application');
});

export
default Router;