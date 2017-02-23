var HorizontalGridView = new MAF.Class({
	ClassName: 'HorizontalGridView',

	Extends: MAF.system.FullscreenView,

		// Add array of items on constructor of the class
	initialize: function () {
		var view = this;
		view.parent();
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0.8)');
		view.items = [
			{ title: $_('Play') },
			{ title: $_('Play More') },
			{ title: $_('Play Sports') },
			{ title: $_('Play Daypass') },
			{ title: $_('Play More Daypass') },
			{ title: $_('Play Sports Daypass') }
		];
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

		// Create a PageIndicator
		var pageindicator = new MAF.control.PageIndicator({
			styles: {
				height: 50,
				width: view.width,
				vAlign: 'bottom'
			}
		}).appendTo(view);

		var horizontalGrid = view.elements.horizontalGrid = new MAF.element.Grid({
			rows: 2,
			columns: 4,
			carousel: true,
			styles: {
				width: (view.width-200),
				height: (view.height - backButton.outerHeight - pageindicator.height -150),
				vOffset: backButton.outerHeight
				},
			cellCreator: function () {
				var cell = new MAF.element.GridCell({
					styles: this.getCellDimensions(),
					events:{
						onSelect: function () {
							log('onSelect GridCell', this.getCellIndex());
						},
						onFocus: function () {
							this.animate({
								backgroundColor: '#FFBF00',
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
						}
					}
				});

				cell.title = new MAF.element.Text({
					styles: {
						width: cell.width,
						height: cell.height,
						color: 'white',
						fontSize: 30,
						anchorStyle: 'center',
						wrap: true
					}
				}).appendTo(cell);

				return cell;
			},
			cellUpdater: function (cell, data) {
				cell.title.setText(data.title);
			}
		}).appendTo(view);

		pageindicator.attachToSource(horizontalGrid);
	},

	updateView: function () {
		var view = this;
		view.elements.horizontalGrid.changeDataset([
			{ title: $_('Play') },
			{ title: $_('Play More') },
			{ title: $_('Play Sports') },
			{ title: $_('Play Daypass') },
			{ title: $_('Play More Daypass') },
			{ title: $_('Play Sports Daypass') }
		], true);
	}
});
