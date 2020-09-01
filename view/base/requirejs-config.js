var config = {

	map: {
		'*': {
			'slick': 'magiccart/slick',
			'gridSlider': 'magiccart/grid-slider',
		},
	},

	paths: {
		'magiccart/slick'			: 'Magiccart_Community/js/plugin/slick.min',
		'magiccart/grid-slider'	: 'Magiccart_Community/js/grid-slider',
	},

	shim: {
		'magiccart/slick': {
			deps: ['jquery']
		}
	}

};
