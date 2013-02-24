var Program = Class.extend({
	init: function () {
		var that = this;

		this.stage = new Kinetic.Stage({
        	container: 'container',
        	width: 800,
        	height: 600
      	});


     	this.layer = new Kinetic.Layer();

     	this.model1 = new Model(50,0);
		this.model2 = new Model(650,0);
		this.circle = new Circle();

     	this.layer.add(this.model1.rect);
     	this.layer.add(this.model2.rect);
     	this.layer.add(this.circle.circle);

     	this.stage.add(this.layer);

     	this.animation = new Kinetic.Animation(function(frame) {
			that.render(frame);
		}, this.layer);

		this.animation.start();
	},

	render: function(frame) {
		var player1 = this.model1.rect.attrs;
		var player2 = this.model2.rect.attrs;
		player2.y = ( player2.y + ((Math.floor(500 * frame.timeDiff/1000)) ) ) % 500;
	}
});


var Model = Class.extend({
	init: function(tempX,tempY){
		
		this.rect = new Kinetic.Rect({
        	x: tempX,
        	y: tempY,
        	width: 100,
        	height: 50,
        	fill: 'green',
        	stroke: 'black',
        	strokeWidth: 4
      	});
	}
});

var Circle = Class.extend({
	init: function(){
		this.circle = new Kinetic.Circle({
        x: 400,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
		});
	}
});



APP = {
	start: function() {
		APP.program = new Program();
	}
};



$(document).ready( APP.start );

$('#container').on('keydown',function(key){
	var player1=APP.program.model1.rect.attrs;
	console.log('nesto');
	if(key.keyCode===87)
		player1.y = ( player1.y +2) % 500;
	if(key.keyCode===83)
		player1.y = ( player1.y -2) % 500;
});


