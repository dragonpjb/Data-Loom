

var lp = lp || {};
lp.jQuery = jQuery.noConflict( true );
		
lp = lp || {};
lp.webFontLoad = {
	google: {
		families: ['Roboto:400,400italic,700,700italic','Oswald:400,400italic,700,700italic']
	},
	active: function() {
		if(lp && lp.text && typeof lp.text.fixTextHeights === "function") {
			lp.text.fixTextHeights();
		}
	}
};
window.WebFont.load(lp.webFontLoad);