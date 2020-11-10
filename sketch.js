var car1,car2,car3;
var wall;
var speed;
var weight;




function setup() {
  createCanvas(1600,400);

car1 = createSprite(50,200,20,20);
car2 = createSprite(50,100,20,20);
car3 = createSprite(50,300,20,20);

wall = createSprite(1500,200,40,height/2);

speed = random(55,90);

weight = random(400,1500);

}

function draw() {
  background(220);  

  car1.velocityX = speed;
 car2.velocityX = speed;
  car3.velocityX = speed;


  console.log(wall.x - car1.x);

  if(wall.x-car1.x < (car1.width+wall.width)/2) { 
car1.velocityX=0; 
var deformation=0.5 * weight * speed* speed/22500; 
if(deformation>180) { 
  car1.shapeColor=color(255,0,0);
 } 
 if(deformation<180 && deformation>100) { 
   car1.shapeColor=color(230,230,0); 
  } 
  if(deformation<100) { 
    car1.shapeColor=color(0,255,0);
   } 
  }

  if(wall.x-car2.x < (car2.width+wall.width)/2) { 
    car2.velocityX=0; 
    var deformation=0.5 * weight * speed* speed/22500; 
    if(deformation>180) { 
      car2.shapeColor=color(255,0,0);
     } 
     if(deformation<180 && deformation>100) { 
       car2.shapeColor=color(230,230,0); 
      } 
      if(deformation<100) { 
        car2.shapeColor=color(0,255,0);
       } 
      }

      if(wall.x-car3.x < (car3.width+wall.width)/2) { 
        car3.velocityX=0; 
        var deformation=0.5 * weight * speed* speed/22500; 
        if(deformation>180) { 
          car3.shapeColor=color(255,0,0);
         } 
         if(deformation<180 && deformation>100) { 
           car3.shapeColor=color(230,230,0); 
          } 
          if(deformation<100) { 
            car3.shapeColor=color(0,255,0);
           } 
          }
    

  drawSprites();
}
