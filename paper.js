class Paper{   
    constructor(r){
        var options={
            isStatic: false,
            restitution: 0.7,
            friction: 0.5,
            density: 1.2

        }
        this.body=Bodies.circle(160,660,r,options);
        this.radius=r;
        World.add(world,this.body);
    
    }
    display(){
        fill("white")
        circle(this.body.position.x,this.body.position.y,40);
        console.log(this.body.position.y);
    } 
     
    }