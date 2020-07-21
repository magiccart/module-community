var config = {

	map: {
		'*': {
			'slick': 'Magiccart_Community/js/plugin/slick.min',
		},
	},

	paths: {
		'magiccart/slick'	: 'Magiccart_Community/js/plugin/slick.min',
		'magiccart/easing'	: 'Magiccart_Community/js/plugin/jquery.easing.min'
	},

	shim: {
		'magiccart/slick': {
			deps: ['jquery']
		},
		'magiccart/easing': {
			deps: ['jquery']
		}
	}
};
