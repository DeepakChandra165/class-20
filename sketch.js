var backg,backgroundImg;
var garden;
var cat1,cat2,cat3,cat4;
var moise1,mouse2,mouse3,mouse4;
var mouse,cat;




function preload() {
    garden = loadImage("garden.png");
    cat1 = loadImage("cat1.png");
    cat2 = loadImage("cat2.png");
    cat3 = loadImage("cat3.png");
    cat4 = loadImage("cat4.png");

    mouse1 = loadImage("mouse1.png");
    mouse2 = loadImage("mouse2.png");
    mouse3 = loadImage("mouse3.png");
    mouse4 = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1080,800);
   
    backg = createSprite(0,0,975 ,705);
    backg.addImage(garden);
    backg.scale = 2.5;
   

    cat = createSprite(800,600,20,20);
    cat.addImage(cat1);
    cat.scale = 0.15;
    cat.setCollider("rectangle",0,0,cat.width,cat.height);
cat.debug = true

    mouse = createSprite(200,600,20,20);
    mouse.addImage(mouse2);
    mouse.scale = 0.15;
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
  mouse.debug = true
}

function draw() {

   background(255);
    //Write condition here to evalute if tom and jerry collide
text(mouseX + ',' + mouseY,200,405);

if(mouse.x-cat.x<cat.width/2+mouse.width/2
    && cat.x-mouse.x<cat.width/2+mouse.width/2
    && mouse.y-cat.y<cat.width/2+mouse.width/2
    && cat.y-mouse.y<cat.width/2+mouse.width/2){

    cat.velocityX = 0;
     cat.addImage(cat4);
      
     mouse.addImage(mouse4);
    }
  
 
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX =-5;
     

      cat.addImage(cat2);
      mouse.addImage(mouse1);
  }


}
