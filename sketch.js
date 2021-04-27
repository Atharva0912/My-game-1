var backgroundImg;
var man, manImage_Puppy, manImage_Changed;

function preload(){
backgroundImg = loadImage("bg2.jpg");
manImage_Puppy = loadImage("man for the game.gif");
manImage_Changed = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png", "walking_5.png","walking_6.png",
"walking_7.png", "walking_8.png");
}

function setup(){
  createCanvas(1200,700)
 game  =  new Game();
}

function draw(){
    background(backgroundImg);

    man = createSprite(600,600,20,20);
    man.addImage(manImage_Puppy);
    textSize(20);
    
    text("There was a man who was walking with his pet but soon his pet got lost.", 100,200);
         text("Help the man find his pet but listen the pet is kidnapped by the witty monster, The Leonard.", 100,220)
         text( "Defeat the monster in the quiz so that you could get your pet back.", 100,240)
         text("There are a total of 6 levels in which the boss comes in the final level.", 100,260)
         text("The monster is very witty, he would try to defeat you in a quiz. If you get defeated, the monster wins.", 100,280)
         text("If you lose one time you have to start again from the first level. You have to defeat Leonard and get your pet back.", 100,300)
         text("1.	The man has to complete 6 levels to get his pet back.", 100,320)
         text("2.	There are some fruits in the easy and normal level that is the 1st and 2nd level", 100,340)
         text("and if you eat it your size will increase and if you get touched by any obstacle, your size decreases", 100, 360)
         text("and if you touch the obstacles with your original size, your game is over and you have to start again.", 100, 380)
         text("3.	When you win or lose, your feedback will be displayed that is your total score.", 100, 400)

         strokeWeight(20);
         stroke(255);
         text("The Lost Puppy" , 350, 100);
    game.display();
    drawSprites();
}
