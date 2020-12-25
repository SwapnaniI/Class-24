class Ground{
    
   
constructor(){
    var options={
        isStatic: true
    }
    this.body=Bodies.rectangle(450,690,900,30,options);
    World.add(world,this.body);

}
display(){
    rectMode(CENTER);
    fill("brown");
    rect(450,690,900,30);
}
    

}