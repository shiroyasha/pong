
var Person = Class.extend({

	init: function() {
		console.log("pocetak");
		this.ime = 'Pera';
		this.adresa = 'perislava 12';
	},

	pevaj: function() {
		console.log( this.ime + this.adresa );
	}

});

var Renderer = Class.extend({
	init: function() {
		requestAnimFrame( this.render() );

		this.paddle = { x : 100, y : 100 };
	},

	render: function() {
		
	}
});


APP = {
	start: function() {
		
		var person1 = new Person();

		person1.pevaj();

	}
};


















$(document).ready( APP.start );


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


