requirejs.config({
	paths: {
		'jquery': 'vendor/jquery',
		'jquery.easing': 'vendor/jquery.easing',
		'jquery.scrollTo': 'vendor/jquery.scrollTo-1.4.2-min',
		'jquery.colorbox': 'vendor/colorbox/jquery.colorbox-min',
		'jquery.mousewheel': 'vendor/jquery.mousewheel',
		'jquery.scrollpane': 'vendor/jscrollpane/jquery.jscrollpane.min'
	},

	shim: {
		'jquery.easing' : ['jquery'],
		'jquery.scrollTo' : ['jquery'],
		'jquery.colorbox' : ['jquery'],
		'jquery.mousewheel' : ['jquery'],
		'jquery.scrollpane' : ['jquery']
	}
});

requirejs(['scripts']);