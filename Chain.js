
class Chain{
    constructor(bodyA,bodyB){

    var options ={ 
        bodyA: bodyA,
        
        bodyB : bodyB,
        stiffness : 0.04,
        length : 10
    }
 this.chain = Constraint.create(options);
  World.add(world,this.chain)
}
display(){
    var BodyA = this.chain.bodyA.position
    var pointB = this.chain.pointB.position

    strokeWeight(3);
line(BodyA.x,BodyA.y,pointB.x,pointB.y)
    
}


}