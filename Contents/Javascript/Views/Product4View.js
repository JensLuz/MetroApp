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
		
		var  img_playmore = new MAF.element.Image({
			styles: {
				vOffset: 250,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_playmore.setSources({
			src: 'Images/Play More.png',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_LOTR1 = new MAF.element.Image({
			styles: {
				vOffset: 250,
				hOffset: 350,
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
		
		var  img_MATR1 = new MAF.element.Image({
			styles: {
				vOffset: 250,
				hOffset: 800,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_MATR1.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/232/MPW-116154',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_MATR2 = new MAF.element.Image({
			styles: {
				vOffset: 250,
				hOffset: 950,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_MATR2.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/27/MPW-13560',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_MATR3 = new MAF.element.Image({
			styles: {
				vOffset: 250,
				hOffset: 1100,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_MATR3.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/15/MPW-7923',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
				
		var  img_SW1 = new MAF.element.Image({
			styles: {
				vOffset: 500,
				hOffset: 350,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_SW1.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/13/A70-6999',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_SW2 = new MAF.element.Image({
			styles: {
				vOffset: 500,
				hOffset: 500,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_SW2.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/7/MPW-3507',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_SW3 = new MAF.element.Image({
			styles: {
				vOffset: 500,
				hOffset: 650,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_SW3.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/26/MPW-13388',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_SW7 = new MAF.element.Image({
			styles: {
				vOffset: 500,
				hOffset: 800,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_SW7.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/237/MPW-118589',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_SW8 = new MAF.element.Image({
			styles: {
				vOffset: 500,
				hOffset: 950,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_SW8.setSources({
			src: 'https://eu.movieposter.com/posters/archive/main/231/MPW-115784',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
		var  img_playsports = new MAF.element.Image({
			styles: {
				vOffset: 800,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);
		
		img_playsports.setSources({
			src: 'Images/Play Sports.png',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);
		
	},

	updateView: function () {
		var view = this;

	}
});
