var bg, player, playerI, ball, ballI;

function preload(){
bg = loadImage("bg.jpg");
ballI = loadImage("bb.png");
playerI = loadImage("player.png");
}

function setup(){
createCanvas(windowWidth, windowHeight);
ball = createSprite(width/2-0.10, height/2+120);
ball.addImage(ballI);
ball.scale = 0.1;
player = createSprite(width/2+60, height/2+100);
player.addImage(playerI);
player.scale = 0.3;
}

function draw(){
 background(bg);

 drawSprites();

 if(keyDown("d") && player.x < width-500){
     player.x +=7;
     ball.x = player.x-50;
 }

 if(keyDown("a") && player.x > width-width+300){
     player.x-=7;
     ball.x = player.x - 50;
 }

 if(keyDown("space")){
     ball.velocityX = 7;
     ball.velocityY = -1;

     if(ball.x > 360){
         ball.velocityY -= 5;
     }
 }

 var sprite = createSprite(width/2+425, height-height+268, 40, 20);
sprite.visible = false;


noFill();
rectMode(CENTER);
strokeWeight(5);
stroke(0, 255, 0);
rect(width/2+425, height-height+268, 70, 50);


 if(ball.collide(sprite)){
     Swal.fire({
         title: "Good Job",
         text: "You Won The Game",
         icon : "success"
     })

     setTimeout(()=>{window.location.reload();},1500)
     
 }


}