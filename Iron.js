class Iron{
    constructor(x,y)
    {

        var options = {
          restitution: 0.8,
          friction: 3,
          density: 30  
        }

        this.iron = Bodies.rectangle(x, y, 50, 70, options);
        this.width = 50;
        this.height = 70;

        World.add(world, this.iron);

    }

    display(){

        var pos = this.iron.position;
        var ang = this.iron.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }
}