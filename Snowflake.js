class Snowflake {
constructor (x,y,width,height){

var options = {
'friction' : 1,
'density' : 1,
'restitution': 0.8
}
this.body = Bodies.rectangle (x,y,width,height,options)
this.width = width;
this.height = height;

this.image = loadImage ("snow4.webp");
World.add (world,this.body);

}
display (){
    push ();
    Image (this.Image, x,y,width, height)
    pop ();
}

}