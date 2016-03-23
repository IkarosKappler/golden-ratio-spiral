
var LEFTUP    = 0;
var RIGHTUP   = 1;
var RIGHTDOWN = 2;
var LEFTDOWN  = 3;
// An approximation ^^
var GOLDENRATIO = (1 + Math.sqrt(5))/2;  // ~=1.61803398875...;

function init() {

    var width  = 300*GOLDENRATIO;
    var height = 300;
    var canvas = document.getElementById( "myCanvas" );
    var ctx    = canvas.getContext( "2d", { } );

    drawSpiral( ctx, 0, 0, width, height, LEFTUP, 16);
}

function drawSpiral( ctx, x, y, width, height, direction, iterations ) {

    if( iterations <= 0 )
	return;

    // Draw box?
    
    ctx.strokeStyle="grey";
    ctx.rect(x,y,width,height);
    ctx.stroke();
    
    
    ctx.lineWidth   = 1;
    ctx.strokeStyle = 'red';
    if( direction == LEFTUP ) {
	
	var a = width*(1.0/GOLDENRATIO);
	var b = width-a;
	ctx.beginPath();
	ctx.arc( x+a,
		 y+a,
		 a,            // radius,
		 -Math.PI,     // startAngle,
		 -Math.PI/2.0, // endAngle,
		 false         // counterClockwise
	       );
	ctx.stroke();
	drawSpiral( ctx, x+a, y, b, height, RIGHTUP, iterations-1 ); 
	
    } else if( direction == RIGHTUP ) {

	var a = height*(1.0/GOLDENRATIO);
	var b = height-a;
	ctx.beginPath();
	ctx.arc( x,
		 y+a,
		 a,            // radius,
		 -Math.PI/2.0, // startAngle,
		 0.0,          // endAngle,
		 false         // counterClockwise
		   );
	ctx.stroke();
	drawSpiral( ctx, x, y+a, width, b, RIGHTDOWN, iterations-1 ); 

    } else if( direction == RIGHTDOWN ) {

	var a = width*(1.0/GOLDENRATIO);
	var b = width-a;
	ctx.beginPath();
	ctx.arc( x+b,
		 y,
		 a,            // radius,
		 0,            // startAngle,
		 Math.PI/2.0,  // endAngle,
		 false         // counterClockwise
		   );
	ctx.stroke();
	drawSpiral( ctx, x, y, b, height, LEFTDOWN, iterations-1 ); 

    } else if( direction == LEFTDOWN ) {

	var a = height*(1.0/GOLDENRATIO);
	var b = height-a;
	ctx.beginPath();
	ctx.arc( x+width,
		 y+b,
		 a,            // radius,
		 Math.PI/2.0,  // startAngle,
		 Math.PI,      // endAngle,
		 false         // counterClockwise
		   );
	ctx.stroke();
	drawSpiral( ctx, x, y, width, b, LEFTUP, iterations-1 ); 

    }
	
    
}
