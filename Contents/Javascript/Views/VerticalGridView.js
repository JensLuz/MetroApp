var VerticalGridView = new MAF.Class({
	ClassName: 'VerticalGridView',

	Extends: MAF.system.FullscreenView,

	// Add array of items on constructor of the class
	initialize: function () {
		var view = this;
		view.parent();
		//MAF.mediaplayer.init(); // Initialize mediaplayer
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0.8)');
		view.items = [
			{ title: $_('Play More') },
			{ title: $_('Play Sports') },
			{ title: $_('Play') },
			{ title: $_('Play Daypass') },
			{ title: $_('Play More Daypass') },
			{ title: $_('Play Sports Daypass') }
		];
		
/* 		// Init images
		img_play = new MAF.element.Image();
		img_playmore = new MAF.element.Image();
		img_playsports = new MAF.element.Image();
		
		img_play.setSources({
			src: 'Images/Play.png',
			missingSrc: 'Images/telenet_logo.png'
		});
		
		img_play.setSources({
			src: 'Images/Play More.png',
			missingSrc: 'Images/telenet_logo.png'
		});
		
		img_play.setSources({
			src: 'Images/Play Sports.png',
			missingSrc: 'Images/telenet_logo.png'
		});
		
		view.images = [
		
		]; */
	},

	createView: function () {
		var view = this;

		var backButton = new MAF.control.BackButton({
			label: $_('BACK'),
			styles: {
				vOffset: 50,
				paddingLeft: 50,
				width: 200
			}
		}).appendTo(view);

 		var scroller = new MAF.control.ScrollIndicator({
			theme: false,
			styles: {
				width: 30,
				height: view.height - backButton.outerHeight,
				vOffset: backButton.outerHeight,
				hAlign: 'right'
			},
			events:{
				onFocus: function () {
					this.setStyle('backgroundColor', Theme.getStyles('BaseFocus', 'backgroundColor'));
				},
				onBlur: function () {
					this.setStyle('backgroundColor', null);
				}
			}
		}).appendTo(view);

		var verticalGrid = view.elements.verticalGrid = new MAF.element.Grid({
			rows: 10,
			columns: 1,
			orientation: 'vertical',
			styles: {
				width: (view.width - scroller.width - 850),
				height: (view.height - backButton.outerHeight - 75),
				vOffset: (backButton.outerHeight)
			},
			cellCreator: function () {
				var cell = new MAF.element.GridCell({
					styles: {			//this.getCellDimensions(),
						height:50,
						vOffset:50,
						width:200,
						hOffset:200
					},

					events:{
						onFocus: function () {
							this.animate({
								backgroundColor:'#FFBF00',
								duration: 0.3,
								scale: 1.1
							});
						},
						onBlur: function () {
							this.animate({
								backgroundColor: null,
								duration: 0.3,
								scale: 1.0
							});
						},
						onSelect: function(){			
							
 							var data = this.getCellDataItem();
							var available_views = ['view-ProductView','view-Product2View'];
							var index = this.getCellDataIndex();
							var view_ID = available_views[index];
							MAF.application.loadView(view_ID, {
							prevData: data
							});
/* 						var data = this.getCellDataItem();
							var view_ID = 'view-ProductView';
							MAF.application.loadView(view_ID, {
							prevData: data 
							}); */
						}
					}
				});

				cell.title = new MAF.element.Text({
					styles: {
						width: 500,//cell.width,
						height: 50,//cell.height,
						color: 'white',
						fontSize: 48,
						anchorStyle: 'center',
						wrap: true
					},
					textStyles: {
						anchorStyle: 'center'
					}
				}).appendTo(cell);
				
				return cell;
			},
			cellUpdater: function (cell, data) {
				cell.title.setText(data.title);
			}
		}).appendTo(view);

		scroller.attachToSource(verticalGrid);
	},

	updateView: function () {
		var view = this;
		view.elements.verticalGrid.changeDataset(view.items, true);
	},

	// When closing the application make sure you unreference 
	// your objects and arrays from the view
	destroyView: function () {
		var view = this;
		delete view.items;
		delete view.images;
	}
});
