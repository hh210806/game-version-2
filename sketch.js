
var containmentzone, containmentImg;
var Patient,patientImg;
var background,backgroundImg;
function preload()
{
	

backgroundImg = loadImage("road2.png");
patientImg = loadImage("infected person.png");
	containmentImg = loadImage("containment zone.jpg");
}

function setup() {
	createCanvas(600, 600);
background = createSprite(300,300);
background.addImage(backgroundImg);
background.scale = 0.7;
  
}


function draw() {

containmentZone();
patient();



	background.velocityY =3;
if (background.y > 400){


	background.y = 300;
  }
  
 



drawSprites();

}
function containmentZone (){
	if (frameCount % 50 === 0) {
		containmentzone = createSprite(random(100, 500), 0, 100, 100);
		containmentzone.addImage("conatinment",containmentImg);
		containmentzone.velocityY = 6;
		containmentzone.scale = 0.1;
	  lifetime = 700;
	  
	 
	}
}
function patient(){
	if (frameCount % 400 === 0) {
		
		
		Patient = createSprite(random(100, 500), 0, 100, 100);
	
		Patient.addImage("patient",patientImg);s
		Patient.velocityY = 6;
		Patient.scale = 0.1;
lifetime = 700;
	  
	  
	 
	}
}

