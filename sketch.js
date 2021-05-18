var platform, platformImage, platform2, platform2Image, platform3, platform3Image, platform4,platform4Image, backgroundImage
var player1, player2;
var Goal;
var edges;
var rand;
var Score;
var gameOver, restart, gameOverImage, restartImage;
var platformColor1, platformColor2, platformColor3, platformColor4;

var Lives

function preload(){
    platformImage=loadImage('PlatformGrass.png');
    platform2Image = loadImage('PlatformGrass.png');
    platform3Image = loadImage('PlatformGrass.png');
    platform4Image = loadImage('PlatformGrass.png');
    backgroundImage = loadImage('Background.jpg');

    gameOverImage = loadImage("gameOver.png");
    restartImage = loadImage("restart.png");
}

function setup(){
    createCanvas(1400,700);

    Lives = 25;
    
    randplatformX = Math.round(random(100,1000));
    randplatformY = Math.round(random(50,600));
    randplatform2X = Math.round(random(100,1000));
    randplatform2Y = Math.round(random(50,600));
    randplatform3X = Math.round(random(100,1000));
    randplatform3Y = Math.round(random(50,600));
    randplatform4X = Math.round(random(100,1000));
    randplatform4Y = Math.round(random(50,600));

    randgoalX = Math.round(random(100,1000));
    randgoalY = Math.round(random(50,600));

    randplatformSize = Math.round(random(50,150));
    randplatform2Size = Math.round(random(50,150));
    randplatform3Size = Math.round(random(50,150));
    randplatform4Size = Math.round(random(50,150));
    
    Score = 0;
    
    player1 = createSprite(40,40,80,80);

    player1.shapeColor = "green"
    platform = createSprite(randplatformX,randplatformY,randplatformSize*1.5,randplatformSize);
    platform3 = createSprite(randplatform3X,randplatform3Y,randplatform3Size,randplatform3Size*1.5);
    platform2 = createSprite(randplatform2X,randplatform2Y,randplatform2Size*1.5,randplatform2Size);
    platform4 = createSprite(randplatform4X,randplatform4Y,randplatform4Size,randplatform4Size*1.5);

    Goal = createSprite(1300, 600, 100,100);

    
platform.shapeColor = "red";
platform2.shapeColor = "red";
platform3.shapeColor = "red";
platform4.shapeColor = "red";

Goal.shapeColor = "blue";
    // platform2 = new Platform(250,400,50,400);
    // platform3 = new Platform(600,400,400,50);
    // platform4 = new Platform(200,200,400,50);
    platform.velocityX = 11;
    platform2.velocityY = 23;
    platform3.velocityX = -10;
    platform4.velocityY = -8;
    platform.velocityY = 8;
    platform2.velocityX = 9;
    platform3.velocityY = -12;
    platform4.velocityX = -15;
    
   
    gameOver = createSprite(700,350,20,20);
    restart = createSprite(700,490,20,20);
    
    restart.addImage("restartGame", restartImage);
    gameOver.addImage("gameOver", gameOverImage);
    
    gameOver.scale = 1;
    restart.scale = 1;
    gameOver.visible = false;
    restart.visible = false;
    
}

function draw(){
    background("black");

    edges = createEdgeSprites();
    
    // 0left1right2up3bottom
    
    console.log(Lives);

    // if(platform.isTouching(platform2)){
    //     platform.x = Math.round(random(1,1000));
    //     platform.y = Math.round(random(1,600));

    //     platform.shapeColor = "red";
    // }
    // if(platform.isTouching(platform3)){
    //     platform.x = Math.round(random(1,1000));
    //     platform.y = Math.round(random(1,600));

    //     platform.shapeColor = "black";
    // }
    // if(platform.isTouching(platform4)){
    //     platform.x = Math.round(random(1,1000));
    //     platform.y = Math.round(random(1,600));

    //     platform.shapeColor = "black";
    // }
    // if(platform2.isTouching(platform3)){
    //     platform2.x = Math.round(random(1,1000));
    //     platform2.y = Math.round(random(1,600));

    //    platform2.shapeColor = "black";
    // }
    // if(platform2.isTouching(platform4)){
    //     platform2.x = Math.round(random(1,1000));
    //     platform2.y = Math.round(random(1,600));

    //     platform2.shapeColor = "black";
    // }
    // if(platform3.isTouching(platform4)){
    //     platform3.x = Math.round(random(1,1000));
    //     platform3.y = Math.round(random(1,600));

    //     platform3.shapeColor = "black";
    // }

    if(player1.isTouching(platform)){
        platformColor1 = 1;
        if(platformColor1 === 1){
            platform.shapeColor = "red";
        }
    }
    if(player1.isTouching(platform2)){
        platformColor2 = 1;
        if(platformColor2 === 1){
            platform2.shapeColor = "red";
        }
    }
    if(player1.isTouching(platform3)){
        platformColor3 = 1;
        if(platformColor3 === 1){
            platform3.shapeColor = "red";
        }
    }
    if(player1.isTouching(platform4)){
        platformColor4 = 1;
        if(platformColor4 === 1){
            platform4.shapeColor = "red";
        }
    }

    // if(platform.isTouching(Goal)){
    //     platform.destroy();
    //     Score = Score + 1;
    // }
    // if(platform2.isTouching(Goal)){
    //     platform2.destroy();
    //     Score = Score + 1;
    // }
    // if(platform3.isTouching(Goal)){
    //     platform3.destroy();
    //     Score = Score + 1;
    // }
    // if(platform4.isTouching(Goal)){
    //     platform4.destroy();
    //     Score = Score + 1;
    // }

    // if(Score === 4){
    //     stop();
    // }

    console.log(Score);
    // platform.bounce(player1);
    // platform2.bounce(player1);
    // platform3.bounce(player1);
    // platform4.bounce(player1);

    platform.bounceOff(edges);
    platform2.bounceOff(edges);
    platform3.bounceOff(edges);
    platform4.bounceOff(edges);

    platform.bounce(platform2);
    platform.bounce(platform3);
    platform.bounce(platform4);
    platform2.bounce(platform3);
    platform2.bounce(platform4);
    platform3.bounce(platform4);

    player1.collide(edges);
   


    if (keyDown(LEFT_ARROW)) {
        player1.velocityX = -10
      }
      if (keyDown(RIGHT_ARROW)) {
        player1.velocityX = 10;
      }
      if (keyDown(UP_ARROW)) {
        player1.velocityY = -10;
      }
      if (keyDown(DOWN_ARROW)) {
        player1.velocityY = 10;
      }
    

    
      
      
//     switch(rand) {   
//       case 1: 
//       platform.x = 200;
//       platform2.x = 400;
//               break;
//       case 2: 
//       platform.x = 400;
//       platform2.x = 200;
//               break;
//       case 3: 
//       platform.x = 600;
//       platform2.x = 100;
//               break;
//       case 4: 
//       platform.x = 100;
//       platform2.x = 600;
//               break;
//       case 5: 
//       platform.x = 200;
//       platform2.x = 100;
//               break;
//       case 6: 
//       platform.x = 100;
//       platform2.x = 200;
//               break;
//       default: break;
//     }
   



    if(player1.isTouching(platform)){

            player1.x = 10;
            player1.y = 10;
            
            Lives = Lives - 1
    }
    
    if(player1.isTouching(platform2)){
        
        player1.x = 10;
        player1.y = 10;

        Lives = Lives - 1
    }
    if(player1.isTouching(platform3)){
        
        player1.x = 10;
        player1.y = 10;

        Lives = Lives - 1
    }
    if(player1.isTouching(platform4)){
       
        player1.x = 10;
        player1.y = 10;

        Lives = Lives - 1
    }

    if(player1.isTouching(Goal)){
        textSize(40);
        fill("red");
        text("You Win!", 700, 350);

        platform.setVelocity(0,0);
        platform2.setVelocity(0,0);
        platform3.setVelocity(0,0);
        platform4.setVelocity(0,0);

        player1.setVelocity(0,0);
    }

    if(Lives === 0){
        gameOver.visible = true;
        restart.visible = true;

        platform.setVelocity(0,0);
        platform2.setVelocity(0,0);
        platform3.setVelocity(0,0);
        platform4.setVelocity(0,0);

        player1.setVelocity(0,0);
    }
   
    if(mousePressedOver(restart)) {
        reset();
    }
      
   
    drawSprites();
    textSize(30);
    stroke("red")
    text("Lives: " + Lives, 1200,40);
}   

function reset(){
    gameOver.visible = false;
    restart.visible = false;
    Lives = 25;
    
    platform.velocityX = 11;
    platform2.velocityY = 23;
    platform3.velocityX = -10;
    platform4.velocityY = -8;
    platform.velocityY = 8;
    platform2.velocityX = 9;
    platform3.velocityY = -12;
    platform4.velocityX = -15;


  }