let logoGlitching = false; //variable for "glitch" state
let randOffset = 0; //main stroke offset
let randGhostOffset = 0; //ghost stroke offset
//---------------------------------------------------------------------------
function setup() {
  createCanvas(500, 500);
}
//---------------------------------------------------------------------------

function draw() {
  background(color(11,11,11));
  
  //Checks if the mouse is hovering over the logo
  if ((mouseX > 120 && mouseX < 380 && mouseY > 70 && mouseY < 250) || (mouseX > 75 && mouseX < 425 && mouseY < 430 && mouseY > 250)) {
    logoGlitching = true;
    //console.log("logoGlitching is true!!")
  } else {
    logoGlitching = false;
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
    
    triangle(250 + randGhostOffset, 430, 75 + randGhostOffset, 250, 425 + randGhostOffset, 250) //roof triangle
    rect(120 + randGhostOffset, 70, 260, 180); //walls
    rect(160+ randGhostOffset, 70, 85, 145); //door

    strokeWeight(1);

}
//---------------------------------------------------------------------------
  //MAIN Strokes (White)
  noFill();
  stroke('white')
  strokeWeight(10)
  strokeCap(SQUARE);
  
  triangle(250 + randOffset, 430, 75 + randOffset, 250, 425 + randOffset, 250) //triangle - base
  rect(120 + randOffset, 70, 260, 180); // house walls
  rect(160+ randOffset, 70, 85, 145); //door

  //chimney
  line(300 + randOffset, 380, 300 + randOffset, 415); //short line
  line(295 + randOffset, 415, 365 + randOffset, 415); //horizontal line
  line(360 + randOffset, 415, 360 + randOffset, 320); //tall line

  strokeWeight(7);
  rect(280 + randOffset, 140, 70, 70); //window squares
  line(315 + randOffset, 140, 315 + randOffset, 210);
  line(280 + randOffset, 175, 350 + randOffset, 175);

}

//---------------------------------------------------------------------------

// function mousePressed() {
//   logoGlitching = true;
//   console.log("logoGlitching is true")
// } 
// test commit test