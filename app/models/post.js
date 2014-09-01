import DS from 'ember-data';

var Post = DS.Model.extend({
	title: DS.attr('string'),
	content: DS.attr('string'),
	publishDate: DS.attr('date')
});

Post.reopenClass({
	FIXTURES: [{
		id: 1,
		title: "Writing a blog in Ember",
		content: "I am writting a blog",
		publishDate: "05/22/2104"
	}, {
		id: 2,
		title: "Writing a blog in Ember",
		content: "I am writting a blog",
		publishDate: "05/22/2104"
	}]
});

export
default Post;