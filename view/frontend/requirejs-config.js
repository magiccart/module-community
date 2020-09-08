var config = {

	map: {
		'*': {
			'slick'			: 'magiccart/slick',
			'easing'		: 'magiccart/easing',
			'gridSlider'	: 'magiccart/grid-slider'
		},
	},

	paths: {
		'magiccart/slick'		: 'Magiccart_Community/js/plugin/slick.min',
		'magiccart/easing'		: 'Magiccart_Community/js/plugin/jquery.easing.min',
		'magiccart/grid-slider'	: 'Magiccart_Community/js/grid-slider'
	},

	shim: {
		'magiccart/slick': {
			deps: ['jquery']
		},
		'magiccart/easing': {
			deps: ['jquery']
		},
		'magiccart/magicslider': {
			deps: ['jquery', 'slick']
		},
	}
};
