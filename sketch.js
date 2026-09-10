let logoGlitching = false; //variable for "glitch" state
let mouseHovering = false; //variable for general hover state
let randOffset = 0; //main stroke offset
let randGhostOffset = 0; //ghost stroke offset

//Drifting animation variables
let triOffset = 0; //roof drift offset
let rectOffset = 0; //base drift offset
let doorOffset = 0; //door drift offset
let windowOffset = 0; //window drift offset
let chimneyOffset = 0; //chimney drift offset

let dir1 = 0;
let dir2 = 0;
//-------------------------------------------------------------------

function setup() {
  createCanvas(500, 500);

  dir1 = random(-400,-200)
  dir2 = random(200,400)
}

//-------------------------------------------------------------------

function draw() {
  background(color(11,11,11));
  
  //Checks if the mouse is hovering over the logo
  if ((mouseX > 120 && mouseX < 380 && mouseY > 70 && mouseY < 250) || (mouseX > 75 && mouseX < 425 && mouseY < 430 && mouseY > 250)) {
    logoGlitching = true;
    mouseHovering = true;
  } else {
    logoGlitching = false;
    mouseHovering = false;
  }
  
  if (logoGlitching === true) {
    if (frameCount % 8 === 0) { //for every 8th frame..
      randOffset = random(-5, 5);
      randGhostOffset = random(-15, 15);
    }

    if (frameCount % 14 === 0) { //for every 14th frame..
      //glitch lines
      let randY = random(120, 180);
      rect(110,randY, 20, 4);
      rect(110,randY / 2, 20, 4);
      rect(370,randY, 20, 4);
      rect(170, 365, 30, 4);
    }

    //"ghost" outlines - alternate colors
    if (frameCount % 6 === 0) {
      stroke(20, 20, 250); //blue
    } else if (frameCount % 10 === 0) {
      stroke(250, 20, 20); //red
    } else {
      stroke(255, 255, 255, 100); //grey
    }

    noFill()
    strokeWeight(10)
    strokeCap(SQUARE);
    
    triangle(250 + randGhostOffset + triOffset, 430, 75 + randGhostOffset + triOffset, 250, 425 + randGhostOffset + triOffset, 250) //roof triangle
    rect(120 + randGhostOffset, 70 - rectOffset, 260, 180); //walls
    rect(160+ randGhostOffset  - doorOffset, 70, 85, 145); //door

    strokeWeight(1);
  }
//-------------------------------------------------------------------
//Drifitng Animation
  if (mouseHovering === true) {
    //takes current Position, moves it 5% way towards 0, saves it.
    //reassembles house
    triOffset = lerp(triOffset, 0, 0.05);
    rectOffset = lerp(rectOffset, 0, 0.05);
    doorOffset = lerp(doorOffset, 0, 0.05);
    windowOffset = lerp(windowOffset, 0, 0.05);
    chimneyOffset = lerp(chimneyOffset, 0, 0.05);
  } else {
    //"move triOffset .0005 closer to -200 position"
    //disassembles house
    triOffset = lerp(triOffset, dir1, 0.0008);
    rectOffset = lerp(rectOffset, dir2, 0.0005);
    doorOffset = lerp(doorOffset, dir2, 0.0008);
    windowOffset = lerp(windowOffset, dir2, 0.0005);
    chimneyOffset = lerp(chimneyOffset, dir2, 0.0005)
  }
  
//-------------------------------------------------------------------
  //MAIN Strokes (White)
  noFill();
  stroke('white')
  strokeWeight(10)
  strokeCap(SQUARE);
  
  triangle(250 + randOffset + triOffset, 430, 75 + randOffset + triOffset, 250, 425 + randOffset + triOffset, 250) //triangle - base
  rect(120 + randOffset, 70 - rectOffset, 260, 180); // house walls
  rect(160+ randOffset - doorOffset, 70, 85, 145); //door

  //chimney
  line(300 + randOffset, 380 + chimneyOffset, 300 + randOffset, 415 + chimneyOffset); //short line
  line(295 + randOffset, 415 + chimneyOffset, 365 + randOffset, 415 + chimneyOffset); //horizontal line
  line(360 + randOffset, 415 + chimneyOffset, 360 + randOffset, 320 + chimneyOffset); //tall line

  strokeWeight(7);
  rect(280 + randOffset + windowOffset, 140, 70, 70);//windows
  line(315 + randOffset + windowOffset, 140, 315 + randOffset +  windowOffset, 210);
  line(280 + randOffset + windowOffset, 175, 350 + randOffset + windowOffset, 175);
}

//-------------------------------------------------------------------
//Reverse the direction of movement: r
function keyPressed() {
  if (key === 'r') {
    let temp = dir1;
    dir1 = dir2;
    dir2 = temp;
  }
}