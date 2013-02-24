


APP = {
	start: function() {

		console.log(window.Kinetic);
		
		var stage = new Kinetic.Stage({
        	container: 'container',
        	width: 578,
        	height: 200
      	});





      	

      var layer = new Kinetic.Layer();

      window.rect = new Kinetic.Rect({
        x: 239,
        y: 75,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
      });

      console.log(rect);

      // add the shape to the layer
      layer.add(rect);

      // add the layer to the stage
      stage.add(layer);

      window.direction = 1;

      var anim = new Kinetic.Animation(function(frame) {
      	APP.render(frame);//komentar
      }, layer);

       anim.start();
	},

	render: function(frame) {
		rect.attrs.x = ( rect.attrs.x + direction * ((Math.floor(500 * frame.timeDiff/1000)) ) ) % 478;
		
	}
};



$(document).ready( APP.start );


