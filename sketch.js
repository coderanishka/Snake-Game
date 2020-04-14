var snake;
var scl = 30;
var food;
var score = 0;
var gameState = 'play';  
function setup(){
 createCanvas(610,600);

 snake = new Snake();
 frameRate(10);

 pickLocation();
}

function pickLocation(){
    var columns = floor(width/scl)
    var rows = floor(height/scl)
    food = createVector(floor(random(columns)), floor(random(rows)));
    food.mult(scl);
}

function draw(){
 background(0);
  if (gameState === 'play'){
   
    snake.end();
    snake.update();
    snake.show();
   
    fill(255,0,100)
    rect(food.x,food.y,scl,scl);
   
    if (snake.eat(food)){
      pickLocation();
    }
    fill(255);
    textSize(30);
    text("Score : " + score,10,40);
    
  }

  if (gameState === 'over'){
      background("red");
      score = 0;
      text("Game Over!", 220,230);
      text("Press Space Key to Start over again",50,280);
  }
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ){
        snake.dir(0,-1);
    } else if (keyCode === DOWN_ARROW ){
        snake.dir(0,1);
    } else if (keyCode === RIGHT_ARROW){
        snake.dir(1,0);
    } else if (keyCode === LEFT_ARROW ){
        snake.dir(-1,0);
    }

    if (keyCode === 32){
        gameState = 'play';
    }

   /* if (keyCode === 115 && gameState ==='start'){
        gamestate = 'play';
    }*/
}

