var Product2View = new MAF.Class({
	ClassName: 'Product2View',

	Extends: MAF.system.FullscreenView,

	initialize: function () {
		var view = this;
		view.parent(); // Call the super class, in this case the FullscreenView
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0.8)');
		var counter = 0;
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
				vOffset: 100,
				paddingLeft: 50,
				width: 500
			}
		}).appendTo(view);
		
		img_playmore.setSources({
			src: 'Images/Play More.png',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);

		var slider1 = view.elements.slider1 = new MAF.element.SlideCarousel({
			visibleCells: 8,
			focusIndex: 1,
			slideDuration: 0.2,
			styles:{
				width: 2000,
				height: 350,
				hOffset: 50,
				vOffset: 250
			},
			cellCreator: function () {
				var cell = new MAF.element.SlideCarouselCell({
					styles: {							//this.getCellDimensions(),
						width: 270,
						height: 400,
					},
					events: {
						onFocus: function () {
							this.title.animate({
								duration: 0.2,
								//backgroundColor: 'white'
								backgroundColor: Theme.getStyles('BaseFocus', 'backgroundColor')
							});
						},
						onBlur: function(){
							this.title.animate({
								duration: 0.2,
								backgroundColor: 'black'
							});
						},
						onSelect: function(){
							var data = this.getCellDataItem();
							var available_views = ['view-VerticalGridView','view-HorizontalGridView',
							'view-ControlGridView','view-SlideCarouselView'];
							var index = this.getCellDataIndex();
							var view_ID = available_views[index];
							MAF.application.loadView(view_ID, {
							prevData: data
							});
						}
					}
				});

				cell.title = new MAF.element.Image({
					styles: {
						width: 250,
						height: 350,
						backgroundColor: 'black',
						paddingTop: 10,
						paddingLeft: 10,
						paddingRight: 10,
						paddingBottom: 10
					}
				}).appendTo(cell);
				return cell;
			},
				cellUpdater: function(cell, data){
					cell.title.setSources(data.title).appendTo(cell);
				},
			events: {
				onDatasetChanged: function(){
					this.getCurrentCell().focus();
					this.animate({
						opacity: 1,
						duration: 0.2
					});
				}
			}
		}).appendTo(view);
	},
	
	// After the update view the focus view is called
	focusView: function () {
		var view = this;
		
		var imageSources1=[
		'https://eu.movieposter.com/posters/archive/main/28/A70-14212',
		'https://eu.movieposter.com/posters/archive/main/7/MPW-3576',
		'https://eu.movieposter.com/posters/archive/main/16/MPW-8295',
		'https://eu.movieposter.com/posters/archive/main/32/MPW-16375',
		'https://eu.movieposter.com/posters/archive/main/27/MPW-13560',
		'https://eu.movieposter.com/posters/archive/main/15/MPW-7923',
		'https://eu.movieposter.com/posters/archive/main/13/A70-6997',
		'https://eu.movieposter.com/posters/archive/main/7/MPW-3507',
		'https://eu.movieposter.com/posters/archive/main/26/MPW-13388',
		'https://eu.movieposter.com/posters/archive/main/237/MPW-118589',
		'https://eu.movieposter.com/posters/archive/main/237/MPW-118589',
		'https://eu.movieposter.com/posters/archive/main/231/MPW-115784'
		];
		
		var imageSources2=[
		'http://cache2.allpostersimages.com/p/LRG/58/5890/3K2PG00Z/posters/game-of-thrones-winter-is-coming-house-stark.jpg',
		'http://cache2.allpostersimages.com/p/LRG/95/9515/8YP6500Z/posters/narcos-lies-are-necessary.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/69/6986/UXRK100Z/posters/breaking-bad-i-am-the-one-who-knocks.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/89/8961/FZBQ300Z/posters/house-of-cards-bad.jpg',
		'http://cache2.allpostersimages.com/p/LRG/87/8703/APQU300Z/posters/the-flash.jpg',
		'http://cache2.allpostersimages.com/p/LRG/87/8766/ZFAT300Z/posters/vikings.jpg',
		'http://cache2.allpostersimages.com/p/LRG/62/6228/XH93100Z/posters/dexter-angel.jpg',
		'http://cache2.allpostersimages.com/p/LRG/78/7802/OBQ5300Z/posters/suits.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/80/8012/KBS6300Z/posters/sherlock-close-up-foil-poster.jpg',
		'http://cache2.allpostersimages.com/p/LRG/86/8621/WQFM300Z/posters/supernatural-demons.jpg',
		'http://cache2.allpostersimages.com/p/LRG/95/9530/NQ94500Z/posters/the-100-key-art.jpg',
		'http://cache2.allpostersimages.com/p/LRG/97/9771/PFPZ500Z/posters/bojack-horseman-hollywood-poolside.jpg'
		];
		
		var sliderImages=[];
		for (var i=0; i<imageSources2.length; i++) {
			sliderImages[i]= new MAF.element.Image({
				styles: {
				width: 280,
				height: 380
			}});
			sliderImages[i].setSources({
				src: imageSources2[i],
				missingSrc: 'Images/telenet_logo.png'
			});
		}
		view.elements.slider1.changeDataset(
		sliderImages.map( function( e ) { return {title: $_(e)};}),true);

	},
});


