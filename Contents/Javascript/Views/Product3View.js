var ProductView = new MAF.Class({
	ClassName: 'ProductView',

	Extends: MAF.system.FullscreenView,

		// Add array of items on constructor of the class
	initialize: function () {
		var view = this;
		view.parent();
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0.8)');
	},
	
	createView: function () {
		var view = this;
		
		
		var  img_background = new MAF.element.Image({
			styles: {
				width: 2500,
				height: 1400
				}
		}).appendTo(view);
		
		img_background.setSources({
			src: 'https://i.ytimg.com/vi/voWpbz1De_M/maxresdefault.jpg',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);

		var backButton = new MAF.control.BackButton({
			label: $_('BACK'),
			styles: {
				vOffset: 50,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_LOTR1.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/28/A70-14212',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_LOTR2 = new MAF.element.Image({
			styles: {
				vOffset: 250,
				hOffset: 500,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_LOTR2.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/7/MPW-3576',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_LOTR3 = new MAF.element.Image({
			styles: {
				vOffset: 250,
				hOffset: 650,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_LOTR3.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/16/MPW-8295',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);	
	},

	updateView: function () {
		var view = this;

	}
});
