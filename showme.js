// Copyright (c) 2011. Johannes Boyne.
// www.about.me/johannesboyne
// http://twitter.com/#!/johannesboyne
// ----------------------------------------
// Apple Adressbook like 'Large Type' util.
// 
// ShowMe.js is freely distributable under 
// the MIT license.
// ----------------------------------------
var ShowMe = new function() {
	if (!$) { alert('jQuery not ready!'); }
	this.now = function () {
		// remove current showMe Wrapper (if any is active)
		$('#showmeWrapper').fadeOut(300).remove();
		switch (arguments.length) {
			case 0:
				alert('showMe.js: invalid arguments.');
				return false;
				break;
			case 1:
				this._now(arguments[0]);
				break;
		}
		return true;
	}
	this._now = function (msg) {
		var wrapper_css = 	'z-index: 1003;'+
							'width: 0px;'+
							'height: 0px;'+
							'background: #ff0;'+
							'overflow: visible;';
		var style_css = 	'display: none;'+
							'position: fixed;'+
							'margin: 0 auto;'+
							'padding: 20px;'+
							'background: #333;'+
							'background: rgba( 0,0,0,0.75 );'+
							'-moz-box-shadow: 0px 0px 30px #333;'+
							'-webkit-box-shadow: 0px 0px 30px #333;'+
							'box-shadow: 0px 0px 50px rgba( 0,0,0,0.5 );'+
							'-moz-border-radius: 10px;'+
							'-webkit-border-radius: 10px;'+
							'border-radius: 10px;'+
							'font-family: Arial, Helvetica, sans-serif;'+
							'font-size: 78px;'+
							'font-weight: bold;'+
							'text-shadow: 1px 1px 2px #000;'+
							'color: #fff;'+
							'z-index: 1006;';
		// check if IE :/
		var userAgent = navigator.userAgent;
		console.log(new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(userAgent));
		if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(userAgent)!=null) {
			style_css = 	'display: none;'+
							'position: fixed;'+
							'margin: 0 auto;'+
							'padding: 20px;'+
							'background: #ccc;'+
							'border: 1px solid #999;'+
							'font-family: Arial, Helvetica, sans-serif;'+
							'font-size: 78px;'+
							'font-weight: bold;'+
							'text-shadow: 1px 1px 2px #000;'+
							'color: #fff;'+
							'z-index: 1006;';
		}
		var showID = (((1+Math.random())*0x10000)|0).toString(16).substring(1)+'_showmeUID';
		$(document.body).append('<div id="showmeWrapper" style="'+wrapper_css+'"><div id="' + showID + '" style="'+style_css+'"><span>' + msg + '</span></div></div>');
		var w = $("#"+showID).width();
		var h = $("#"+showID).height();
		$("#"+showID).css("left", $(window).width()*0.5-w*0.5);
		$("#"+showID).css("top", $(window).height()*0.5-h*0.5);
		$("#"+showID).fadeIn(300);
		$(document).bind("mousedown", function() {
			$("#"+showID).fadeOut( 400 );
		});
	}
}