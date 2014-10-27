import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.resource('posts', {
		path: '/'
	});
	//this.resource('reveal');

	this.resource('todos', {
		path: '/task'
	}, function() {
		this.route('active');
		this.route('complete');
	});

});

export
default Router;