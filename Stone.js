class Stone{
    constructor(x,y)
    {
        var options = {
        restitution: 0.8,
        friction: 0.9,
        density:30
        }

        this.stone = Bodies.rectangle(x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;

        World.add(world, this.stone);

    }

    display(){

        var pos = this.stone.position;
        var ang = this.stone.angle;

        push();
        translate(pos.x, pos.y);
        rotate(ang);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }
}