class rope{
	constructor(body1,body2, offsetX,offsetY)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
		this.offsetX = offsetY
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);


		var Anchor1X = pointA.x;
		var Anchor1Y = pointA.y;
        
		var Anchor2X = pointB.x + this.oofsetX;
		var Anchor2Y = pointB.y + this.offsety;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
        
		
	}

}