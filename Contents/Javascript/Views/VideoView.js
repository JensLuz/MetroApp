var VideoView = new MAF.Class({
	ClassName: 'VideoView',

	Extends: MAF.system.FullscreenView,

		// Add array of items on constructor of the class
	initialize: function () {
		var view = this;
		view.parent();
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0)');
	},
	
	createView: function () {
		var view = this;

		var backButton = new MAF.control.BackButton({
			label: $_('BACK'),
			styles: {
				vOffset: 50,
				paddingLeft: 50,
				width: 200
			},
			events:{
				onSelect: function(){
					MAF.mediaplayer.control.stop();
				}
			}
		}).appendTo(view);
		
		MAF.mediaplayer.init(); // Initialize mediaplayer
		MAF.mediaplayer.setViewportBounds(80,120,480,360);
		MAF.mediaplayer.playlist.set(new MAF.media.Playlist().addEntry(new
		MAF.media.PlaylistEntry({url: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'})));
	},

	updateView: function () {
		var view = this;
		MAF.mediaplayer.playlist.start();
	}
});
