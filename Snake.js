function Snake(){
    this.x = 300;
    this.y = 300;
    this.xspeed = 1;
    this.yspeed = 0;
    this.wholeBody = 0;
    this.body = [];

    this.eat = function(pos){
      var d = dist(this.x,this.y,pos.x,pos.y)
       if (d < 5){
         this.wholeBody++;
         score+=20;
         return true;  
        } else {
         return false;
       }
    }

    this.dir = function(x,y){
        this.xspeed = x;
        this.yspeed = y;
    }
    
    this.end = function(){
      for (var i = 0; i < this.body.length; i++ ){
        var pos = this.body[i];
        var d = dist(this.x,this.y,pos.x,pos.y)
       if (d < 5){
         this.wholeBody = 0;
         this.body=[];
         gameState = 'over';
       }   
      }
    }


    this.update = function(){
     if (this.wholeBody === this.body.length){
       for (var i = 0; i < this.body.length-1; i++ ){
          this.body[i] = this.body[i+1];
        }
      }     
      this.body[this.wholeBody-1] = createVector(this.x, this.y);
  
     this.x = this.x + this.xspeed*scl;
     this.y = this.y + this.yspeed*scl;

     this.x = constrain(this.x,0,width-scl)
     this.y = constrain(this.y,0,height-scl)


    }

    this.show = function(){
      fill(150,0,200);  
      stroke(150,0.200);
      for (var i = 0; i < this.body.length; i++ ){
        rect(this.body[i].x,this.body[i].y,scl,scl);
      }
      rect(this.x,this.y,scl,scl);
    }

}