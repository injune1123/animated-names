// This is a project from codeacademy, called "animate your name"
// The functions used in this file is written in another file
//"I want to thank Google, Rob Hawkes, and Mark Brenig-Jones & Emile Petrone. This course was inspired by and built on their work."

var myName = "Jun Yin";
//these are colors," computers can understand colors as an array of numbers."
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

// This shows how to use control flow to control the shape of a bubble
if(10 < 3)
{
    bubbleShape = 'square';
}
else
{	// the shape of the bubble
    bubbleShape = 'circle';
}

// bounce the name
bounceName();
// bounce the bubbles
bounceBubbles();