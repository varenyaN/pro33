class Web {
 
    constructor(x,y,width,height) {
      var options = {
        isStatic: false
      }
    
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("snow4.webp");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     
      var pos =this.body.position;
      rectMode(CENTER);

      image(this.image, 0, 0, this.width, this.height);
      
    }
  };
