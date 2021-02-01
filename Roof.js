class Roof{
    Constructor(x,y,width,height){
        var options={
            isStatic:true,
        }

        this.roof = Bodies.rectangle(x,y,width,height);
        World.add(world,this.roof);
        //properties
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.roof.positin;
        var angle = this.roof.angle;

        push();
        Translate(this.roof.position.x,this.roof.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }

    
}