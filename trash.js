class Trash {
    constructor(x,y,width) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,width,options);
      this.width = width;
     
      World.add(world, this.body);
     }
    
    
     display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
     ellipse(pos.x, pos.y, this.width);
    }
  };
  
function keyPressed() {
    if (keyCode === UP_ARROW) {
       // Look at the hints in the document and understand how to make the package body fall only on
       Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-85});
     }
   }