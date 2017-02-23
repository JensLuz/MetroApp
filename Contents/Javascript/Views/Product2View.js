var Product2View = new MAF.Class({
	ClassName: 'Product2View',

	Extends: MAF.system.FullscreenView,

	initialize: function () {
		var view = this;
		view.parent(); // Call the super class, in this case the FullscreenView
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 1)'); //0,0,0,0.8
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
		
 		var  img_background = new MAF.element.Image().appendTo(view);
		
		img_background.setSources({
			src: 'Images/wallpaper1.jpg',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view); 

		var backButton = new MAF.control.BackButton({
			label: $_('Back'),
			styles: {
				vOffset: 50,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);

		// Create a Text button with a select event
		var buyButton = new MAF.control.TextButton({
			label: $_('Purchase'),
			styles: {
				width: 160,
				height: 60,
				hOffset: 50,
				vOffset: 1000
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onSelect: function () {
					ActiveLabel.appendTo(view);
					//MAF.application.reloadView('view');
					var reloadthisView = {view:"view-Product2View"};
					MAF.application.reloadView(reloadthisView);
				}
			}
		}).appendTo(view);
		
		var statusString = "Hallo";
		
		var ActiveLabel = new MAF.element.Text({
			label: $_("Hallo"),
			styles: {
				width: 250,
				height: 60,
				hOffset: 350,
				vOffset: 1015
			},
			textStyles: {
				anchorStyle: 'center'
			}
		});
		
		var  img_playmore = new MAF.element.Image({
			styles: {
				vOffset: 100,
				paddingLeft: 50,
				width: 500
			}
		}).appendTo(view);
		
		img_playmore.setSources({
			src: 'Images/play_more.png',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(view);

		// Creates the Carousel and returns it as var 50, 250
		var createCarousel = function(posx,posy) {
			
		var slider = new MAF.element.SlideCarousel({
			visibleCells: 8,
			focusIndex: 1,
			slideDuration: 0.2,
			styles:{
				width: 2000,
				height: 350,
				hOffset: posx,
				vOffset: posy
			},
			cellCreator: function () {
				var cell = new MAF.element.SlideCarouselCell({
					styles: {
						//this.getCellDimensions(),
						width: 270,
						height: 400,
					},
					events: {
						onFocus: function () {
							this.title.animate({
								//transform: 'translate3d(+1500px, 0px, 0px)',
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
					hideWhileLoading: true,
					manageWaitIndicator: true,
					//aspect: "auto",
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
					cell.title.setSources(data.title);
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
		return slider;
		}
		
		view.elements.slider1 = createCarousel(50,250);
		view.elements.slider2 = createCarousel(50,600);
	
	
		var imageSources1=[
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5663/7EGUG00Z/posters/lord-of-the-rings-1-the-fellowship-of-the-ring.jpg', //339x488
		'http://imgc.allpostersimages.com/images/P-473-488-90/62/6212/G9S1100Z/posters/lord-of-the-rings-two-toweres.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5661/HZDUG00Z/posters/lord-of-the-rings-the-return-of-the-king.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5666/DM3UG00Z/posters/the-matrix.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/55/5580/JZ3VG00Z/posters/the-matrix-reloaded.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5662/U1FUG00Z/posters/the-matrix-revolutions.jpg',
		'http://imgc.allpostersimages.com/images/P-488-488-90/93/9337/SKU7500Z/posters/star-wars-episode-i.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/7/789/LLEI000Z/posters/star-wars-episode-ii-attack-of-the-clones.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/38/3899/G5RJF00Z/posters/star-wars-episode-3.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/95/9514/QJS6500Z/posters/star-wars-the-force-awakens-one-sheet.jpg',
		'http://cache2.allpostersimages.com/p/LRG/98/9834/SO4Y500Z/posters/star-wars-rogue-one-teaser.jpg',
		'http://cache2.allpostersimages.com/p/LRG/93/9318/CK67500Z/posters/james-bond-spectre-colour-teaser.jpg'
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
		
		
/* 		loadImages(imageSources1, slider1);
		loadImages(imageSources2, slider2);
		
		var loadImages = function(imgArray, carousel){
			var sliderImages=[];
			for (var i=0; i<imageArray.length; i++) {
				sliderImages[i]= new MAF.element.Image({
					styles: {
					width: 280,
					height: 380
					}
				});
				sliderImages[i].setSources({
					src: imgArray[i],
					missingSrc: 'Images/telenet_logo.png'
				});
			}
			view.elements.carousel.changeDataset(
			sliderImages.map( function( e ) { return {title: $_(e)};}),true);
		} */
		
		
			var sliderImages=[];
			for (var i=0; i<imageSources1.length; i++) {
				sliderImages[i]= new MAF.element.Image({
					styles: {
						width: 280,
						height: 380
					}
				});
				sliderImages[i].setSources({
					src: imageSources1[i],
					missingSrc: 'Images/telenet_logo.png'
				});
			}
			view.elements.slider1.changeDataset(
			sliderImages.map( function( e ) { return {title: $_(e)};}),true);
			
			for (var i=0; i<imageSources2.length; i++) {
				sliderImages[i]= new MAF.element.Image({
					styles: {
						width: 280,
						height: 380
					}
				});
				sliderImages[i].setSources({
					src: imageSources2[i],
					missingSrc: 'Images/telenet_logo.png'
				});
			}
			view.elements.slider2.changeDataset(
			sliderImages.map( function( e ) { return {title: $_(e)};}),true);
	},
	
	// After create view and when returning to the view
	// the update view is called
	updateView: function () {
		// Data from previous view 
		var view = this,
			myBackData = view.backParams && view.backParams.myBackData;
		if (myBackData)
			log('updateView received data from previous view', myBackData);
		
		//imageSources1[5]="http://imgc.allpostersimages.com/images/P-473-488-90/56/5685/GYXUG00Z/posters/raiders-of-the-lost-ark.jpg";
		
	}
});


