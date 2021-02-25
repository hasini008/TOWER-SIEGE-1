class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.slingShot = loadImage("sprites/sling1.png");
        this.slingShot2 = loadImage("sprites/sling2.png");
        this.slingShot3 = loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

       image(this.slingShot , 200 , 75  , 30 , 147 );
       image(this.slingShot2 , 180 , 75  , 30 , 90 );
       //console.log(this.slingShot2.height);
       stroke(48 , 22 , 8);
    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            if(pointA.x > 200 ){
                strokeWeight(5);
                line(pointA.x + 18 , pointA.y, pointB.x + 24 , pointB.y);
                line(pointA.x + 18 , pointA.y, pointB.x - 10 , pointB.y);
    
                image(this.slingShot3 , pointA.x + 22 , pointA.y - 5);
            }
            else{
                strokeWeight(6);
                line(pointA.x - 16 , pointA.y, pointB.x + 24 , pointB.y);
                line(pointA.x - 16 , pointA.y, pointB.x - 10 , pointB.y);
    
                image(this.slingShot3 , pointA.x - 20 , pointA.y - 7);
    

            }
            
            
        
        }
    
    }
}
