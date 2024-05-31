let imgDrwPrps = {aspect: 0, width: 0, height: 0, xOffset: 0, yOffset: 0}; //Used to store canvas properties (width, height, offset, etc.)
let canvasAspectRatio = 0; //Stores the aspect ratio of the canvas
let numRects1, numRects2, numRects3, numRects4, numRects5, numRects6, numRects7, numRects8, numRects9, numRects11, numRects15, numRects17, numRects18, numRects19, numRects20, numRects23; // Numbers of moved squares

//define moved rects
let rects1 = [];
let rects2 = [];
let rects3 = [];
let rects4 = [];
let rects5 = [];
let rects6 = [];
let rects9 = [];
let rects11 = [];

let rects15 = [];
let rects17 = [];
let rects18 = [];
let rects19 = [];
let rects20 = [];
let rects23 = [];

//Array storing the colors of the squares
let colors = [
  [173, 58, 47],   // red
  [75, 107, 186],   // blue
  [219, 217, 213]  // gray
];
let colorIndex = 0; // For color indexing
let cycleDuration = 1200; // Duration of each cycle

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30); //Set the frame rate to 30 frames per second
  calculateCanvasProps();
  numRects1 = int(random(3, 7));  // set random numbers of rects
  numRects2 = int(random(4, 6));
  numRects3 = int(random(3, 7));
  numRects4 = int(random(4, 8));
  numRects5 = int(random(2, 7));
  numRects6 = int(random(3, 6));
  numRects9 = int(random(4, 7));
  numRects11 = int(random(2, 6));

  numRects15 = 4;
  numRects17 = 5;
  numRects18 = 3;
  numRects19 = 3;
  numRects20 = 4;
  numRects23 = 4;
  initializeRects();
  setInterval(updateRects, 35); //Update the square position and color every 35 milliseconds
}

function draw() {
  let cycleTime = frameCount % cycleDuration; // Set time period
  let lerpFactor; // Calculate the interpolation factor lerpFactor for smooth transition of background color and transparency of the square

  if (cycleTime < cycleDuration / 2) {
    // The first half of the time period, from white to nearly black
    lerpFactor = map(cycleTime, 0, cycleDuration / 2, 0, 1);
  } else {
    // The second half of the time cycle, from nearly black to white
    lerpFactor = map(cycleTime, cycleDuration / 2, cycleDuration, 1, 0);
  }

  let backgroundColor = lerpColor(color(240, 240, 240), color(50, 50, 50), lerpFactor);
  background(backgroundColor); // Background color


  noStroke(); // Disable border edges

  // Calculating relative position and size
  // The yellow line rectangle from top to bottom on the Y axis
  let rect1X = imgDrwPrps.xOffset;
  let rect1Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect1W = imgDrwPrps.width;
  let rect1H = imgDrwPrps.height * 0.02;

  let rect2X = imgDrwPrps.xOffset;
  let rect2Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.16;
  let rect2W = imgDrwPrps.width;
  let rect2H = imgDrwPrps.height * 0.02;

  let rect3X = imgDrwPrps.xOffset;
  let rect3Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.35;
  let rect3W = imgDrwPrps.width;
  let rect3H = imgDrwPrps.height * 0.02;

  let rect4X = imgDrwPrps.xOffset;
  let rect4Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.43;
  let rect4W = imgDrwPrps.width;
  let rect4H = imgDrwPrps.height * 0.02;

  let rect5X = imgDrwPrps.xOffset;
  let rect5Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.56;
  let rect5W = imgDrwPrps.width;
  let rect5H = imgDrwPrps.height * 0.02;

  let rect6X = imgDrwPrps.xOffset;
  let rect6Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect6W = imgDrwPrps.width;
  let rect6H = imgDrwPrps.height * 0.02;

  let rect7X = imgDrwPrps.xOffset;
  let rect7Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.685;
  let rect7W = imgDrwPrps.width * 0.06;
  let rect7H = imgDrwPrps.height * 0.02;

  let rect8X = imgDrwPrps.xOffset;
  let rect8Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.775;
  let rect8W = imgDrwPrps.width * 0.06;
  let rect8H = imgDrwPrps.height * 0.02;

  let rect9X = imgDrwPrps.xOffset;
  let rect9Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.85;
  let rect9W = imgDrwPrps.width;
  let rect9H = imgDrwPrps.height * 0.02;

  let rect10X = imgDrwPrps.xOffset;
  let rect10Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.885;
  let rect10W = imgDrwPrps.width * 0.06;
  let rect10H = imgDrwPrps.height * 0.02;

  let rect11X = imgDrwPrps.xOffset;
  let rect11Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect11W = imgDrwPrps.width;
  let rect11H = imgDrwPrps.height * 0.02;

  let rect12X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.08;
  let rect12Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect12W = imgDrwPrps.width * 0.457;
  let rect12H = imgDrwPrps.height * 0.02;

  let rect13X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect13Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.805;
  let rect13W = imgDrwPrps.width * 0.1;
  let rect13H = imgDrwPrps.height * 0.02;

  

  // The yellow line rectangle from left to right on the X axis
  let rect14X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect14Y = imgDrwPrps.yOffset;
  let rect14W = imgDrwPrps.width * 0.02;
  let rect14H = imgDrwPrps.height * 0.35;

  let rect15X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect15Y = imgDrwPrps.yOffset;
  let rect15W = imgDrwPrps.width * 0.02;
  let rect15H = imgDrwPrps.height;

  let rect16X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect16Y = imgDrwPrps.yOffset;
  let rect16W = imgDrwPrps.width * 0.02;
  let rect16H = imgDrwPrps.height * 0.96;

  let rect17X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect17Y = imgDrwPrps.yOffset;
  let rect17W = imgDrwPrps.width * 0.02;
  let rect17H = imgDrwPrps.height;

  let rect18X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect18Y = imgDrwPrps.yOffset;
  let rect18W = imgDrwPrps.width * 0.02;
  let rect18H = imgDrwPrps.height;

  let rect19X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect19Y = imgDrwPrps.yOffset;
  let rect19W = imgDrwPrps.width * 0.02;
  let rect19H = imgDrwPrps.height;

  let rect20X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect20Y = imgDrwPrps.yOffset;
  let rect20W = imgDrwPrps.width * 0.02;
  let rect20H = imgDrwPrps.height;

  let rect21X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect21Y = imgDrwPrps.yOffset;
  let rect21W = imgDrwPrps.width * 0.02;
  let rect21H = imgDrwPrps.height * 0.35;

  let rect22X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect22Y = imgDrwPrps.yOffset;
  let rect22W = imgDrwPrps.width * 0.02;
  let rect22H = imgDrwPrps.height * 0.430;

  let rect23X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect23Y = imgDrwPrps.yOffset;
  let rect23W = imgDrwPrps.width * 0.02;
  let rect23H = imgDrwPrps.height;

  let rect24X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.647;
  let rect24Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.450;
  let rect24W = imgDrwPrps.width * 0.02;
  let rect24H = imgDrwPrps.height * 0.175;

  let rect25X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect25Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.645;
  let rect25W = imgDrwPrps.width * 0.02;
  let rect25H = imgDrwPrps.height * 0.160;

  //Fixed intersection square blue block
  //Row one
  let rect26X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect26Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect26W = imgDrwPrps.width * 0.02;
  let rect26H = imgDrwPrps.height * 0.02;

  let rect27X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect27Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect27W = imgDrwPrps.width * 0.02;
  let rect27H = imgDrwPrps.height * 0.02;

  let rect28X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect28Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect28W = imgDrwPrps.width * 0.02;
  let rect28H = imgDrwPrps.height * 0.02;

  //Row 2
  let rect29X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect29Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect29W = imgDrwPrps.width * 0.02;
  let rect29H = imgDrwPrps.height * 0.02;

  let rect30X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect30Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect30W = imgDrwPrps.width * 0.02;
  let rect30H = imgDrwPrps.height * 0.02;

  let rect31X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect31Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect31W = imgDrwPrps.width * 0.02;
  let rect31H = imgDrwPrps.height * 0.02;

  let rect32X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect32Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect32W = imgDrwPrps.width * 0.02;
  let rect32H = imgDrwPrps.height * 0.02;

  //Row 3
  let rect33X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect33Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect33W = imgDrwPrps.width * 0.02;
  let rect33H = imgDrwPrps.height * 0.02;

  let rect34X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect34Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect34W = imgDrwPrps.width * 0.02;
  let rect34H = imgDrwPrps.height * 0.02;

  let rect35X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect35Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect35W = imgDrwPrps.width * 0.02;
  let rect35H = imgDrwPrps.height * 0.02;

  let rect36X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect36Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect36W = imgDrwPrps.width * 0.02;
  let rect36H = imgDrwPrps.height * 0.02;

  //Row 4
  let rect37X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect37Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect37W = imgDrwPrps.width * 0.02;
  let rect37H = imgDrwPrps.height * 0.02;

  let rect38X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect38Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect38W = imgDrwPrps.width * 0.02;
  let rect38H = imgDrwPrps.height * 0.02;

  //Row 5
  let rect39X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect39Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect39W = imgDrwPrps.width * 0.02;
  let rect39H = imgDrwPrps.height * 0.02;

  let rect40X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect40Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect40W = imgDrwPrps.width * 0.02;
  let rect40H = imgDrwPrps.height * 0.02;

  let rect41X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect41Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect41W = imgDrwPrps.width * 0.02;
  let rect41H = imgDrwPrps.height * 0.02;

  //Row 6
  let rect42X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect42Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect42W = imgDrwPrps.width * 0.02;
  let rect42H = imgDrwPrps.height * 0.02;

  let rect43X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect43Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect43W = imgDrwPrps.width * 0.02;
  let rect43H = imgDrwPrps.height * 0.02;

  //Row 8
  let rect44X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect44Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect44W = imgDrwPrps.width * 0.02;
  let rect44H = imgDrwPrps.height * 0.02;
  
  //Row 10
  let rect45X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect45Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.805;
  let rect45W = imgDrwPrps.width * 0.02;
  let rect45H = imgDrwPrps.height * 0.02;

  //Row 11
  let rect46X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect46Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect46W = imgDrwPrps.width * 0.02;
  let rect46H = imgDrwPrps.height * 0.02;
  
  let rect47X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect47Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect47W = imgDrwPrps.width * 0.02;
  let rect47H = imgDrwPrps.height * 0.02;
  
  let rect48X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect48Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect48W = imgDrwPrps.width * 0.02;
  let rect48H = imgDrwPrps.height * 0.02;

  let rect49X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect49Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect49W = imgDrwPrps.width * 0.02;
  let rect49H = imgDrwPrps.height * 0.02;

  //Row 13
  let rect50X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect50Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect50W = imgDrwPrps.width * 0.02;
  let rect50H = imgDrwPrps.height * 0.02;
  
  let rect51X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect51Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect51W = imgDrwPrps.width * 0.02;
  let rect51H = imgDrwPrps.height * 0.02;

  let rect52X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect52Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect52W = imgDrwPrps.width * 0.02;
  let rect52H = imgDrwPrps.height * 0.02;


  //Fixed square red block at intersection
  //Row 2
  let rect53X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect53Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect53W = imgDrwPrps.width * 0.02;
  let rect53H = imgDrwPrps.height * 0.02;
  
  let rect54X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect54Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.160;
  let rect54W = imgDrwPrps.width * 0.02;
  let rect54H = imgDrwPrps.height * 0.02;

  //Row 3
  let rect55X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.025;
  let rect55Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect55W = imgDrwPrps.width * 0.02;
  let rect55H = imgDrwPrps.height * 0.02;

  let rect56X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect56Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect56W = imgDrwPrps.width * 0.02;
  let rect56H = imgDrwPrps.height * 0.02;

  let rect57X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect57Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect57W = imgDrwPrps.width * 0.02;
  let rect57H = imgDrwPrps.height * 0.02;

  //Row 4
  let rect58X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect58Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect58W = imgDrwPrps.width * 0.02;
  let rect58H = imgDrwPrps.height * 0.02;

  let rect59X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect59Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect59W = imgDrwPrps.width * 0.02;
  let rect59H = imgDrwPrps.height * 0.02;

  let rect60X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect60Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect60W = imgDrwPrps.width * 0.02;
  let rect60H = imgDrwPrps.height * 0.02;

  let rect61X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect61Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect61W = imgDrwPrps.width * 0.02;
  let rect61H = imgDrwPrps.height * 0.02;

  //Row 5
  let rect62X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.647;
  let rect62Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect62W = imgDrwPrps.width * 0.02;
  let rect62H = imgDrwPrps.height * 0.02;
  
  let rect63X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect63Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect63W = imgDrwPrps.width * 0.02;
  let rect63H = imgDrwPrps.height * 0.02;
  
  let rect64X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect64Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect64W = imgDrwPrps.width * 0.02;
  let rect64H = imgDrwPrps.height * 0.02;

  //Row 6
  let rect65X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect65Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect65W = imgDrwPrps.width * 0.02;
  let rect65H = imgDrwPrps.height * 0.02;
  
  let rect66X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect66Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect66W = imgDrwPrps.width * 0.02;
  let rect66H = imgDrwPrps.height * 0.02;
  
  let rect67X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect67Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect67W = imgDrwPrps.width * 0.02;
  let rect67H = imgDrwPrps.height * 0.02;

  //Row 7
  let rect68X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect68Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.685;
  let rect68W = imgDrwPrps.width * 0.02;
  let rect68H = imgDrwPrps.height * 0.02;

  //Row 8
  let rect69X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect69Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect69W = imgDrwPrps.width * 0.02;
  let rect69H = imgDrwPrps.height * 0.02;

  let rect70X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect70Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect70W = imgDrwPrps.width * 0.02;
  let rect70H = imgDrwPrps.height * 0.02;

  //Row 9
  let rect71X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect71Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.775;
  let rect71W = imgDrwPrps.width * 0.02;
  let rect71H = imgDrwPrps.height * 0.02;

  //Row 10
  let rect72X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect72Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect72W = imgDrwPrps.width * 0.02;
  let rect72H = imgDrwPrps.height * 0.02;
  
  let rect73X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect73Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect73W = imgDrwPrps.width * 0.02;
  let rect73H = imgDrwPrps.height * 0.02;

  let rect74X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect74Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.850;
  let rect74W = imgDrwPrps.width * 0.02;
  let rect74H = imgDrwPrps.height * 0.02;

  //Row 13
  let rect75X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect75Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect75W = imgDrwPrps.width * 0.02;
  let rect75H = imgDrwPrps.height * 0.02;

  let rect76X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect76Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect76W = imgDrwPrps.width * 0.02;
  let rect76H = imgDrwPrps.height * 0.02;

  //Square grey blocks at fixed intersections
  //Row 1
  let rect77X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect77Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect77W = imgDrwPrps.width * 0.02;
  let rect77H = imgDrwPrps.height * 0.02;

  //Row 3
  let rect78X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.115;
  let rect78Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect78W = imgDrwPrps.width * 0.02;
  let rect78H = imgDrwPrps.height * 0.02;

  let rect79X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.922;
  let rect79Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect79W = imgDrwPrps.width * 0.02;
  let rect79H = imgDrwPrps.height * 0.02;

  let rect80X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect80Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.350;
  let rect80W = imgDrwPrps.width * 0.02;
  let rect80H = imgDrwPrps.height * 0.02;
  
  //Row 4
  let rect81X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect81Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect81W = imgDrwPrps.width * 0.02;
  let rect81H = imgDrwPrps.height * 0.02;

  let rect82X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect82Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.430;
  let rect82W = imgDrwPrps.width * 0.02;
  let rect82H = imgDrwPrps.height * 0.02;

  //Row 5
  let rect83X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect83Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect83W = imgDrwPrps.width * 0.02;
  let rect83H = imgDrwPrps.height * 0.02;

  let rect84X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect84Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.560;
  let rect84W = imgDrwPrps.width * 0.02;
  let rect84H = imgDrwPrps.height * 0.02;

  //Row 6
  let rect85X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect85Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect85W = imgDrwPrps.width * 0.02;
  let rect85H = imgDrwPrps.height * 0.02;

  let rect86X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect86Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect86W = imgDrwPrps.width * 0.02;
  let rect86H = imgDrwPrps.height * 0.02;

  //Row 7
  let rect87X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect87Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.725;
  let rect87W = imgDrwPrps.width * 0.02;
  let rect87H = imgDrwPrps.height * 0.02;

  //Row 13
  let rect88X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect88Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect88W = imgDrwPrps.width * 0.02;
  let rect88H = imgDrwPrps.height * 0.02;

  let rect89X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect89Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect89W = imgDrwPrps.width * 0.02;
  let rect89H = imgDrwPrps.height * 0.02;

  //Fixed gray rectangle
  let rect106X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.165;
  let rect106Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.285;
  let rect106W = imgDrwPrps.width * 0.03;
  let rect106H = imgDrwPrps.height * 0.03;

  let rect107X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.17;
  let rect107Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.39;
  let rect107W = imgDrwPrps.width * 0.025;
  let rect107H = imgDrwPrps.height * 0.025;

  let rect108X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.170;
  let rect108Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.795;
  let rect108W = imgDrwPrps.width * 0.03;
  let rect108H = imgDrwPrps.height * 0.025;

  let rect115X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.407;
  let rect115Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.48;
  let rect115W = imgDrwPrps.width * 0.07;
  let rect115H = imgDrwPrps.height * 0.055;

  let rect116X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.72;
  let rect116Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.5;
  let rect116W = imgDrwPrps.width * 0.03;
  let rect116H = imgDrwPrps.height * 0.038;

  //Fixed red rectangle
  let rect90X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.155;
  let rect90Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.044;
  let rect90W = imgDrwPrps.width * 0.045;
  let rect90H = imgDrwPrps.height * 0.116;

  let rect91X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect91Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.495;
  let rect91W = imgDrwPrps.width * 0.09;
  let rect91H = imgDrwPrps.height * 0.065;

  let rect92X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect92Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.765;
  let rect92W = imgDrwPrps.width * 0.06;
  let rect92H = imgDrwPrps.height * 0.04;

  let rect93X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.697;
  let rect93Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.450;
  let rect93W = imgDrwPrps.width * 0.085;
  let rect93H = imgDrwPrps.height * 0.11;

  let rect95X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.652;
  let rect95Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.23;
  let rect95W = imgDrwPrps.width * 0.09;
  let rect95H = imgDrwPrps.height * 0.08;

  let rect109X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect109Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.780;
  let rect109W = imgDrwPrps.width * 0.09;
  let rect109H = imgDrwPrps.height * 0.07;

  let rect120X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.877;
  let rect120Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.21;
  let rect120W = imgDrwPrps.width * 0.065;
  let rect120H = imgDrwPrps.height * 0.06;

  let rect121X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.345;
  let rect121Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.94;
  let rect121W = imgDrwPrps.width * 0.065;
  let rect121H = imgDrwPrps.height * 0.06;

  //Fixed blue rectangle
  let rect94X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.652;
  let rect94Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.180;
  let rect94W = imgDrwPrps.width * 0.09;
  let rect94H = imgDrwPrps.height * 0.170;

  let rect96X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.285;
  let rect96Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.475;
  let rect96W = imgDrwPrps.width * 0.065;
  let rect96H = imgDrwPrps.height * 0.085;

  let rect97X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect97Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.665;
  let rect97W = imgDrwPrps.width * 0.06;
  let rect97H = imgDrwPrps.height * 0.065;

  let rect111X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.08;
  let rect111Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.22;
  let rect111W = imgDrwPrps.width * 0.055;
  let rect111H = imgDrwPrps.height * 0.055;

  let rect113X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.897;
  let rect113Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.08;
  let rect113W = imgDrwPrps.width * 0.065;
  let rect113H = imgDrwPrps.height * 0.035;

  let rect114X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.28;
  let rect114Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.67;
  let rect114W = imgDrwPrps.width * 0.055;
  let rect114H = imgDrwPrps.height * 0.055;

  //Fixed yellow rectangle
  let rect98X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect98Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.265;
  let rect98W = imgDrwPrps.width * 0.09;
  let rect98H = imgDrwPrps.height * 0.06;
  
  let rect99X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.155;
  let rect99Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.370;
  let rect99W = imgDrwPrps.width * 0.046;
  let rect99H = imgDrwPrps.height * 0.06;

  let rect100X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.285;
  let rect100Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.45;
  let rect100W = imgDrwPrps.width * 0.065;
  let rect100H = imgDrwPrps.height * 0.025;

  let rect101X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.407;
  let rect101Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.370;
  let rect101W = imgDrwPrps.width * 0.07;
  let rect101H = imgDrwPrps.height * 0.19;

  let rect102X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect102Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.48;
  let rect102W = imgDrwPrps.width * 0.1;
  let rect102H = imgDrwPrps.height * 0.05;

  let rect103X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.862;
  let rect103Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.72;
  let rect103W = imgDrwPrps.width * 0.06;
  let rect103H = imgDrwPrps.height * 0.045;

  let rect104X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.682;
  let rect104Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.260;
  let rect104W = imgDrwPrps.width * 0.045;
  let rect104H = imgDrwPrps.height * 0.035;

  let rect105X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.295;
  let rect105Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.5;
  let rect105W = imgDrwPrps.width * 0.045;
  let rect105H = imgDrwPrps.height * 0.035;
  
  let rect110X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.135;
  let rect110Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.1;
  let rect110W = imgDrwPrps.width * 0.09;
  let rect110H = imgDrwPrps.height * 0.03;

  //Fixed combination rectangle
  let rect117X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.32;
  let rect117Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.044;
  let rect117W = imgDrwPrps.width * 0.07;
  let rect117H = imgDrwPrps.height * 0.085;

  let rect118X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.32;
  let rect118Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.129;
  let rect118W = imgDrwPrps.width * 0.07;
  let rect118H = imgDrwPrps.height * 0.031;

  let rect119X = imgDrwPrps.xOffset + imgDrwPrps.width * (0.32 + 0.015);
  let rect119Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.069;
  let rect119W = imgDrwPrps.width * 0.04;
  let rect119H = imgDrwPrps.height * 0.035;

  // Draw color blocks
  fill(75, 107, 186); // Blue
  rect(rect113X, rect113Y, rect113W, rect113H);

  fill(230, 207, 48); // Yellow
  //Horizontal fixed yellow rectangular line
  rect(rect1X, rect1Y, rect1W, rect1H);
  rect(rect2X, rect2Y, rect2W, rect2H);
  rect(rect3X, rect3Y, rect3W, rect3H);
  rect(rect4X, rect4Y, rect4W, rect4H);
  rect(rect5X, rect5Y, rect5W, rect5H);
  rect(rect6X, rect6Y, rect6W, rect6H);
  rect(rect7X, rect7Y, rect7W, rect7H);
  rect(rect8X, rect8Y, rect8W, rect8H);
  rect(rect9X, rect9Y, rect9W, rect9H);
  rect(rect10X, rect10Y, rect10W, rect10H);
  rect(rect11X, rect11Y, rect11W, rect11H);
  rect(rect12X, rect12Y, rect12W, rect12H);
  rect(rect13X, rect13Y, rect13W, rect13H);
  //Vertical fixed yellow rectangular line
  rect(rect14X, rect14Y, rect14W, rect14H);
  rect(rect15X, rect15Y, rect15W, rect15H);
  rect(rect16X, rect16Y, rect16W, rect16H);
  rect(rect17X, rect17Y, rect17W, rect17H);
  rect(rect18X, rect18Y, rect18W, rect18H);
  rect(rect19X, rect19Y, rect19W, rect19H);
  rect(rect20X, rect20Y, rect20W, rect20H);
  rect(rect21X, rect21Y, rect21W, rect21H);
  rect(rect22X, rect22Y, rect22W, rect22H);
  rect(rect23X, rect23Y, rect23W, rect23H);
  rect(rect24X, rect24Y, rect24W, rect24H);
  rect(rect25X, rect25Y, rect25W, rect25H);

  //Vertical fixed yellow rectangular line
  rect(rect98X, rect98Y, rect98W, rect98H);
  rect(rect99X, rect99Y, rect99W, rect99H);
  rect(rect100X, rect100Y, rect100W, rect100H);
  rect(rect101X, rect101Y, rect101W, rect101H);
  rect(rect102X, rect102Y, rect102W, rect102H);
  rect(rect103X, rect103Y, rect103W, rect103H);

  fill(173, 58, 47); // Red
  //Row 2
  rect(rect53X, rect53Y, rect53W, rect53H);
  rect(rect54X, rect54Y, rect54W, rect54H);

  //Row 3
  rect(rect55X, rect55Y, rect55W, rect55H);
  rect(rect56X, rect56Y, rect56W, rect56H);
  rect(rect57X, rect57Y, rect57W, rect57H);

  //第四行四个
  rect(rect58X, rect58Y, rect58W, rect58H);
  rect(rect59X, rect59Y, rect59W, rect59H);
  rect(rect60X, rect60Y, rect60W, rect60H);
  rect(rect61X, rect61Y, rect61W, rect61H);

  //Row 5
  rect(rect62X, rect62Y, rect62W, rect62H);
  rect(rect63X, rect63Y, rect63W, rect63H);
  rect(rect64X, rect64Y, rect64W, rect64H);

  //Row 6
  rect(rect65X, rect65Y, rect65W, rect65H);
  rect(rect66X, rect66Y, rect66W, rect66H);
  rect(rect67X, rect67Y, rect67W, rect67H);
  rect(rect68X, rect68Y, rect68W, rect68H);

  //Row 7
  rect(rect69X, rect69Y, rect69W, rect69H);
  rect(rect70X, rect70Y, rect70W, rect70H);
  rect(rect71X, rect71Y, rect71W, rect71H);

  //第Row 10
  rect(rect72X, rect72Y, rect72W, rect72H);
  rect(rect73X, rect73Y, rect73W, rect73H);
  rect(rect74X, rect74Y, rect74W, rect74H);

  //Row 13
  rect(rect75X, rect75Y, rect75W, rect75H);
  rect(rect76X, rect76Y, rect76W, rect76H);

  //Fixed red rectangle
  rect(rect90X, rect90Y, rect90W, rect90H);
  rect(rect91X, rect91Y, rect91W, rect91H);
  rect(rect92X, rect92Y, rect92W, rect92H);
  rect(rect93X, rect93Y, rect93W, rect93H);
  rect(rect109X, rect109Y, rect109W, rect109H);
  rect(rect117X, rect117Y, rect117W, rect117H);
  rect(rect120X, rect120Y, rect120W, rect120H);

  //Personal code modification
  //Add a random number of rectangles that can move over time
  for (let i = 0; i < rects1.length; i++) {
    fill(rects1[i].color);
    rect(rects1[i].x, rects1[i].y, rects1[i].size, rects1[i].size);
  }

  for (let i = 0; i < rects2.length; i++) {
    fill(rects2[i].color);
    rect(rects2[i].x, rects2[i].y, rects2[i].size, rects2[i].size);
  }

  for (let i = 0; i < rects3.length; i++) {
    fill(rects3[i].color);
    rect(rects3[i].x, rects3[i].y, rects3[i].size, rects3[i].size);
  }

  for (let i = 0; i < rects4.length; i++) {
    fill(rects4[i].color);
    rect(rects4[i].x, rects4[i].y, rects4[i].size, rects4[i].size);
  }

  for (let i = 0; i < rects5.length; i++) {
    fill(rects5[i].color);
    rect(rects5[i].x, rects5[i].y, rects5[i].size, rects5[i].size);
  }

  for (let i = 0; i < rects6.length; i++) {
    fill(rects6[i].color);
    rect(rects6[i].x, rects6[i].y, rects6[i].size, rects6[i].size);
  }

  for (let i = 0; i < rects9.length; i++) {
    fill(rects9[i].color);
    rect(rects9[i].x, rects9[i].y, rects9[i].size, rects9[i].size);
  }

  for (let i = 0; i < rects11.length; i++) {
    fill(rects11[i].color);
    rect(rects11[i].x, rects11[i].y, rects11[i].size, rects11[i].size);
  }

  for (let i = 0; i < rects15.length; i++) {
    fill(rects15[i].color);
    rect(rects15[i].x, rects15[i].y, rects15[i].size, rects15[i].size);
  }

  for (let i = 0; i < rects17.length; i++) {
    fill(rects17[i].color);
    rect(rects17[i].x, rects17[i].y, rects17[i].size, rects17[i].size);
  }

  for (let i = 0; i < rects18.length; i++) {
    fill(rects18[i].color);
    rect(rects18[i].x, rects18[i].y, rects18[i].size, rects18[i].size);
  }

  for (let i = 0; i < rects19.length; i++) {
    fill(rects19[i].color);
    rect(rects19[i].x, rects19[i].y, rects19[i].size, rects19[i].size);
  }

  for (let i = 0; i < rects20.length; i++) {
    fill(rects20[i].color);
    rect(rects20[i].x, rects20[i].y, rects20[i].size, rects20[i].size);
  }

  for (let i = 0; i < rects23.length; i++) {
    fill(rects23[i].color);
    rect(rects23[i].x, rects23[i].y, rects23[i].size, rects23[i].size);
  }

  fill(75, 107, 186); // Blue
  //Row 1
  rect(rect26X, rect26Y, rect26W, rect26H);
  rect(rect27X, rect27Y, rect27W, rect27H);
  rect(rect28X, rect28Y, rect28W, rect28H);
  //Row 2
  rect(rect29X, rect29Y, rect29W, rect29H);
  rect(rect30X, rect30Y, rect30W, rect30H);
  rect(rect31X, rect31Y, rect31W, rect31H);
  rect(rect32X, rect32Y, rect32W, rect32H);
  //Row 3
  rect(rect33X, rect33Y, rect33W, rect33H);
  rect(rect34X, rect34Y, rect34W, rect34H);
  rect(rect35X, rect35Y, rect35W, rect35H);
  rect(rect36X, rect36Y, rect36W, rect36H);

  //Row 4
  rect(rect37X, rect37Y, rect37W, rect37H);
  rect(rect38X, rect38Y, rect38W, rect38H);

  //Row 5
  rect(rect39X, rect39Y, rect39W, rect39H);
  rect(rect40X, rect40Y, rect40W, rect40H);
  rect(rect41X, rect41Y, rect41W, rect41H);

  //Row 6
  rect(rect42X, rect42Y, rect42W, rect42H);
  rect(rect43X, rect43Y, rect43W, rect43H);

  //Row 8
  rect(rect44X, rect44Y, rect44W, rect44H);

  //Row 10
  rect(rect45X, rect45Y, rect45W, rect45H);

  //Row 11
  rect(rect46X, rect46Y, rect46W, rect46H);
  rect(rect47X, rect47Y, rect47W, rect47H);
  rect(rect48X, rect48Y, rect48W, rect48H);
  rect(rect49X, rect49Y, rect49W, rect49H);

  //Row 13
  rect(rect50X, rect50Y, rect50W, rect50H);
  rect(rect51X, rect51Y, rect51W, rect51H);
  rect(rect52X, rect52Y, rect52W, rect52H);

  //Fixed blue rectangle
  rect(rect94X, rect94Y, rect94W, rect94H);
  rect(rect96X, rect96Y, rect96W, rect96H);
  rect(rect97X, rect97Y, rect97W, rect97H);
  rect(rect111X, rect111Y, rect111W, rect111H);
  
  fill(173, 58, 47); // Red
  rect(rect95X, rect95Y, rect95W, rect95H);
  rect(rect121X, rect121Y, rect121W, rect121H);

  fill(219, 217, 213); // Gray
  //Row 1
  rect(rect77X, rect77Y, rect77W, rect77H);

  //Row 3
  rect(rect78X, rect78Y, rect78W, rect78H);
  rect(rect79X, rect79Y, rect79W, rect79H);
  rect(rect80X, rect80Y, rect80W, rect80H);

  //Row 4
  rect(rect81X, rect81Y, rect81W, rect81H);
  rect(rect82X, rect82Y, rect82W, rect82H);

  //Row 5
  rect(rect83X, rect83Y, rect83W, rect83H);
  rect(rect84X, rect84Y, rect84W, rect84H);

  //Row 6
  rect(rect85X, rect85Y, rect85W, rect85H);
  rect(rect86X, rect86Y, rect86W, rect86H);

  //Row 8
  rect(rect87X, rect87Y, rect87W, rect87H);

  //Row 13
  rect(rect88X, rect88Y, rect88W, rect88H);
  rect(rect89X, rect89Y, rect89W, rect89H);
  
  //Fixed gray rectangle
  rect(rect106X, rect106Y, rect106W, rect106H);
  rect(rect107X, rect107Y, rect107W, rect107H);
  rect(rect108X, rect108Y, rect108W, rect108H);
  rect(rect115X, rect115Y, rect115W, rect115H);
  rect(rect116X, rect116Y, rect116W, rect116H);
  rect(rect118X, rect118Y, rect118W, rect118H);
  rect(rect119X, rect119Y, rect119W, rect119H);

  fill(230, 207, 48); // Yellow
  //Fixed yellow rectangle
  rect(rect104X, rect104Y, rect104W, rect104H);
  rect(rect105X, rect105Y, rect105W, rect105H);
  rect(rect110X, rect110Y, rect110W, rect110H);

  fill(75, 107, 186); // Blue
  rect(rect114X, rect114Y, rect114W, rect114H);

  //How to fill both sides of the picture with black
  fill(0, 0, 0);
  rect(0, 0, imgDrwPrps.xOffset, height); // Black fill on left side
  rect(imgDrwPrps.xOffset + imgDrwPrps.width, 0, width - (imgDrwPrps.xOffset + imgDrwPrps.width), height); // Black fill on right side
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  calculateCanvasProps();
  numRects1 = int(random(9, 17)); 
  numRects2 = int(random(9, 17));
  numRects3 = int(random(9, 17));
  numRects4 = int(random(9, 17));
  numRects5 = int(random(9, 17));
  numRects6 = int(random(9, 17));
  numRects9 = int(random(9, 17));
  numRects11 = int(random(9, 17));

  numRects15 = int(random(9, 17));
  numRects17 = int(random(9, 17));
  numRects18 = int(random(9, 17));
  numRects19 = int(random(9, 17));
  numRects20 = int(random(9, 17));
  numRects23 = int(random(9, 17));
  initializeRects();
}

function calculateCanvasProps() {
  // Calculate the aspect ratio of the canvas
  canvasAspectRatio = windowWidth / windowHeight;
  
  // Set imgDrwPrps to match the window aspect ratio
  if (canvasAspectRatio >= 1) {
    // Landscape or square
    imgDrwPrps.width = windowHeight;
    imgDrwPrps.height = windowHeight;
    imgDrwPrps.xOffset = (windowWidth - windowHeight) / 2;
    imgDrwPrps.yOffset = 0;
  } else {
    // Portrait
    imgDrwPrps.width = windowWidth;
    imgDrwPrps.height = windowWidth;
    imgDrwPrps.xOffset = 0;
    imgDrwPrps.yOffset = (windowHeight - windowWidth) / 2;
  }
}

function initializeRects() {
  rects1 = [];
  rects2 = [];
  rects3 = [];
  rects4 = [];
  rects5 = [];
  rects6 = [];
  rects9 = [];
  rects11 = [];

  rects15 = [];
  rects17 = [];
  rects18 = [];
  rects19 = [];
  rects20 = [];
  rects23 = [];

  let rect1X = imgDrwPrps.xOffset;
  let rect1Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.024;
  let rect1W = imgDrwPrps.width;
  let rect1H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects1; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;  // Attempt Counter
    do {
      x = rect1X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect1Y + random(0, rect1H - size);
      overlap = false;
      for (let j = 0; j < rects1.length; j++) {
        if (isOverlapping(x, y, size, rects1[j].x, rects1[j].y, rects1[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {  // If the number of attempts exceeds 100, skip the overlap detection
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 6); // random speed
    rects1.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect2X = imgDrwPrps.xOffset;
  let rect2Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.16;
  let rect2W = imgDrwPrps.width;
  let rect2H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects2; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0; 
    do {
      x = rect2X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect2Y + random(0, rect2H - size);
      overlap = false;
      for (let j = 0; j < rects2.length; j++) {
        if (isOverlapping(x, y, size, rects2[j].x, rects2[j].y, rects2[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects2.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect3X = imgDrwPrps.xOffset;
  let rect3Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.35;
  let rect3W = imgDrwPrps.width;
  let rect3H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects3; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;
    do {
      x = rect3X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect3Y + random(0, rect3H - size);
      overlap = false;
      for (let j = 0; j < rects3.length; j++) {
        if (isOverlapping(x, y, size, rects3[j].x, rects3[j].y, rects3[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects3.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect4X = imgDrwPrps.xOffset;
  let rect4Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.43;
  let rect4W = imgDrwPrps.width;
  let rect4H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects4; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;
    do {
      x = rect4X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect4Y + random(0, rect4H - size);
      overlap = false;
      for (let j = 0; j < rects4.length; j++) {
        if (isOverlapping(x, y, size, rects4[j].x, rects4[j].y, rects4[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects4.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect5X = imgDrwPrps.xOffset;
  let rect5Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.56;
  let rect5W = imgDrwPrps.width;
  let rect5H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects5; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;
    do {
      x = rect5X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect5Y + random(0, rect5H - size);
      overlap = false;
      for (let j = 0; j < rects5.length; j++) {
        if (isOverlapping(x, y, size, rects5[j].x, rects5[j].y, rects5[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects5.push({x: x, y: y, size: size, color: color, speed: speed});
  }
  
  let rect6X = imgDrwPrps.xOffset;
  let rect6Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.625;
  let rect6W = imgDrwPrps.width;
  let rect6H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects6; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;
    do {
      x = rect6X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect6Y + random(0, rect6H - size);
      overlap = false;
      for (let j = 0; j < rects6.length; j++) {
        if (isOverlapping(x, y, size, rects6[j].x, rects6[j].y, rects6[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects6.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect9X = imgDrwPrps.xOffset;
  let rect9Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.85;
  let rect9W = imgDrwPrps.width;
  let rect9H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects9; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0; 
    do {
      x = rect9X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect9Y + random(0, rect9H - size);
      overlap = false;
      for (let j = 0; j < rects9.length; j++) {
        if (isOverlapping(x, y, size, rects9[j].x, rects9[j].y, rects9[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects9.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect11X = imgDrwPrps.xOffset;
  let rect11Y = imgDrwPrps.yOffset + imgDrwPrps.height * 0.940;
  let rect11W = imgDrwPrps.width;
  let rect11H = imgDrwPrps.height * 0.02;

  for (let i = 0; i < numRects11; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;
    do {
      x = rect11X + random(imgDrwPrps.width * 0.045, imgDrwPrps.width * 0.822);
      y = rect11Y + random(0, rect11H - size);
      overlap = false;
      for (let j = 0; j < rects11.length; j++) {
        if (isOverlapping(x, y, size, rects11[j].x, rects11[j].y, rects11[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) { 
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 5);
    rects11.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect15X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.06;
  let rect15Y = imgDrwPrps.yOffset;
  let rect15W = imgDrwPrps.width * 0.02;
  let rect15H = imgDrwPrps.height;

  for (let i = 0; i < numRects15; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;  
    do {
      x = rect15X + random(0, rect15W - size);
      y = rect15Y + random(imgDrwPrps.height * 0.045, imgDrwPrps.height * 0.822);
      overlap = false;
      for (let j = 0; j < rects15.length; j++) {
        if (isOverlapping(x, y, size, rects15[j].x, rects15[j].y, rects15[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {  
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 10); 
    rects15.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect17X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.225;
  let rect17Y = imgDrwPrps.yOffset;
  let rect17W = imgDrwPrps.width * 0.02;
  let rect17H = imgDrwPrps.height;

  for (let i = 0; i < numRects17; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;  
    do {
      x = rect17X + random(0, rect17W - size);
      y = rect17Y + random(imgDrwPrps.height * 0.045, imgDrwPrps.height * 0.822);
      overlap = false;
      for (let j = 0; j < rects17.length; j++) {
        if (isOverlapping(x, y, size, rects17[j].x, rects17[j].y, rects17[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {  
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 10); 
    rects17.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect18X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.537;
  let rect18Y = imgDrwPrps.yOffset;
  let rect18W = imgDrwPrps.width * 0.02;
  let rect18H = imgDrwPrps.height;

  for (let i = 0; i < numRects18; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;  
    do {
      x = rect18X + random(0, rect18W - size);
      y = rect18Y + random(imgDrwPrps.height * 0.045, imgDrwPrps.height * 0.822);
      overlap = false;
      for (let j = 0; j < rects18.length; j++) {
        if (isOverlapping(x, y, size, rects18[j].x, rects18[j].y, rects18[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {  
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 10); 
    rects18.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect19X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.577;
  let rect19Y = imgDrwPrps.yOffset;
  let rect19W = imgDrwPrps.width * 0.02;
  let rect19H = imgDrwPrps.height;

  for (let i = 0; i < numRects19; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0; 
    do {
      x = rect19X + random(0, rect19W - size);
      y = rect19Y + random(imgDrwPrps.height * 0.045, imgDrwPrps.height * 0.822);
      overlap = false;
      for (let j = 0; j < rects19.length; j++) {
        if (isOverlapping(x, y, size, rects19[j].x, rects19[j].y, rects19[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) { 
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 10); 
    rects19.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect20X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.842;
  let rect20Y = imgDrwPrps.yOffset;
  let rect20W = imgDrwPrps.width * 0.02;
  let rect20H = imgDrwPrps.height;
  
  for (let i = 0; i < numRects20; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;  
    do {
      x = rect20X + random(0, rect20W - size);
      y = rect20Y + random(imgDrwPrps.height * 0.045, imgDrwPrps.height * 0.822);
      overlap = false;
      for (let j = 0; j < rects20.length; j++) {
        if (isOverlapping(x, y, size, rects20[j].x, rects20[j].y, rects20[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {  
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 10); 
    rects20.push({x: x, y: y, size: size, color: color, speed: speed});
  }

  let rect23X = imgDrwPrps.xOffset + imgDrwPrps.width * 0.962;
  let rect23Y = imgDrwPrps.yOffset;
  let rect23W = imgDrwPrps.width * 0.02;
  let rect23H = imgDrwPrps.height;

  for (let i = 0; i < numRects23; i++) {
    let size = imgDrwPrps.width * 0.02;
    let x, y, overlap;
    let attempts = 0;  
    do {
      x = rect23X + random(0, rect23W - size);
      y = rect23Y + random(imgDrwPrps.height * 0.045, imgDrwPrps.height * 0.822);
      overlap = false;
      for (let j = 0; j < rects23.length; j++) {
        if (isOverlapping(x, y, size, rects23[j].x, rects23[j].y, rects23[j].size)) {
          overlap = true;
          break;
        }
      }
      attempts++;
      if (attempts > 100) {  
        break;
      }
    } while (overlap);
    let color = colors[i % colors.length];
    let speed = random(2, 10); 
    rects23.push({x: x, y: y, size: size, color: color, speed: speed});
  }
}

function updateRects() {
  let rect1X = imgDrwPrps.xOffset;
  let rect1W = imgDrwPrps.width;

  for (let i = 0; i < rects1.length; i++) {
    rects1[i].x -= rects1[i].speed;  // Move left with random speed
    if (rects1[i].x < rect1X) {
      let size = rects1[i].size;
      let x, overlap;
      let attempts = 0;  // Attempt Counter
      do {
        x = rect1X + rect1W - size;
        overlap = false;
        for (let j = 0; j < rects1.length; j++) {
          if (j !== i && isOverlapping(x, rects1[i].y, size, rects1[j].x, rects1[j].y, rects1[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  // If the number of attempts exceeds 100, skip the overlap detection
          break;
        }
      } while (overlap);
      rects1[i].x = x;  // Reappear from the right border with the right edge aligned to the right border
      rects1[i].speed = random(2, 10); // Random Speed
      colorIndex = (colorIndex + 1) % colors.length;  // Update Color Index
      rects1[i].color = colors[colorIndex];
    }
  }

  
  let rect2X = imgDrwPrps.xOffset;
  let rect2W = imgDrwPrps.width;

  for (let i = 0; i < rects2.length; i++) {
    rects2[i].x += rects2[i].speed;
    if (rects2[i].x > rect2X + rect2W) {
      let size = rects2[i].size;
      let x, overlap;
      let attempts = 0;  
      do {
        x = rect2X - size;
        overlap = false;
        for (let j = 0; j < rects2.length; j++) {
          if (j !== i && isOverlapping(x, rects2[i].y, size, rects2[j].x, rects2[j].y, rects2[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects2[i].x = x;  
      rects2[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects2[i].color = colors[colorIndex];
    }
  }

  let rect3X = imgDrwPrps.xOffset;
  let rect3W = imgDrwPrps.width;

  for (let i = 0; i < rects3.length; i++) {
    rects3[i].x += rects3[i].speed;
    if (rects3[i].x > rect3X + rect3W) {
      let size = rects3[i].size;
      let x, overlap;
      let attempts = 0; 
      do {
        x = rect3X - size;
        overlap = false;
        for (let j = 0; j < rects3.length; j++) {
          if (j !== i && isOverlapping(x, rects3[i].y, size, rects3[j].x, rects3[j].y, rects3[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects3[i].x = x;  
      rects3[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects3[i].color = colors[colorIndex];
    }
  }

  let rect4X = imgDrwPrps.xOffset;
  let rect4W = imgDrwPrps.width;

  for (let i = 0; i < rects4.length; i++) {
    rects4[i].x -= rects4[i].speed;  // Move left with random speed
    if (rects4[i].x < rect4X) {
      let size = rects4[i].size;
      let x, overlap;
      let attempts = 0;  
      do {
        x = rect4X + rect4W - size;
        overlap = false;
        for (let j = 0; j < rects4.length; j++) {
          if (j !== i && isOverlapping(x, rects4[i].y, size, rects4[j].x, rects4[j].y, rects4[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects4[i].x = x;  
      rects4[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects4[i].color = colors[colorIndex];
    }
  }

  let rect5X = imgDrwPrps.xOffset;
  let rect5W = imgDrwPrps.width;

  for (let i = 0; i < rects5.length; i++) {
    rects5[i].x += rects5[i].speed; 
    if (rects5[i].x > rect5X + rect5W) {
      let size = rects5[i].size;
      let x, overlap;
      let attempts = 0; 
      do {
        x = rect5X - size;
        overlap = false;
        for (let j = 0; j < rects5.length; j++) {
          if (j !== i && isOverlapping(x, rects5[i].y, size, rects5[j].x, rects5[j].y, rects5[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects5[i].x = x;  
      rects5[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects5[i].color = colors[colorIndex];
    }
  }

  let rect6X = imgDrwPrps.xOffset;
  let rect6W = imgDrwPrps.width;

  for (let i = 0; i < rects6.length; i++) {
    rects6[i].x += rects6[i].speed; 
    if (rects6[i].x > rect6X + rect6W) {
      let size = rects6[i].size;
      let x, overlap;
      let attempts = 0; 
      do {
        x = rect6X - size;
        overlap = false;
        for (let j = 0; j < rects6.length; j++) {
          if (j !== i && isOverlapping(x, rects6[i].y, size, rects6[j].x, rects6[j].y, rects6[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) { 
          break;
        }
      } while (overlap);
      rects6[i].x = x;  
      rects6[i].speed = random(2, 12); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects6[i].color = colors[colorIndex];
    }
  }

  let rect9X = imgDrwPrps.xOffset;
  let rect9W = imgDrwPrps.width;

  for (let i = 0; i < rects9.length; i++) {
    rects9[i].x -= rects9[i].speed;  
    if (rects9[i].x < rect9X) {
      let size = rects9[i].size;
      let x, overlap;
      let attempts = 0; 
      do {
        x = rect9X + rect9W - size;
        overlap = false;
        for (let j = 0; j < rects9.length; j++) {
          if (j !== i && isOverlapping(x, rects9[i].y, size, rects9[j].x, rects9[j].y, rects9[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects9[i].x = x;  
      rects9[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects9[i].color = colors[colorIndex];
    }
  }

  let rect11X = imgDrwPrps.xOffset;
  let rect11W = imgDrwPrps.width;

  for (let i = 0; i < rects11.length; i++) {
    rects11[i].x -= rects11[i].speed; 
    if (rects11[i].x < rect11X) {
      let size = rects11[i].size;
      let x, overlap;
      let attempts = 0;  
      do {
        x = rect11X + rect11W - size;
        overlap = false;
        for (let j = 0; j < rects11.length; j++) {
          if (j !== i && isOverlapping(x, rects11[i].y, size, rects11[j].x, rects11[j].y, rects11[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects11[i].x = x;  
      rects11[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects11[i].color = colors[colorIndex];
    }
  }

  let rect15Y = imgDrwPrps.yOffset;
  let rect15H = imgDrwPrps.height;

  for (let i = 0; i < rects15.length; i++) {
    rects15[i].y += rects15[i].speed;  // Move downward using random speed
    if (rects15[i].y > rect15Y + rect15H) {
      let size = rects15[i].size;
      let y, overlap;
      let attempts = 0;  
      do {
        y = rect15Y - size;
        overlap = false;
        for (let j = 0; j < rects15.length; j++) {
          if (j !== i && isOverlapping(rects15[i].x, y, size, rects15[j].x, rects15[j].y, rects15[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects15[i].y = y;  // Reappear from the top border, with the top edge aligned to the top border
      rects15[i].speed = random(2, 10);
      colorIndex = (colorIndex + 1) % colors.length;  
      rects15[i].color = colors[colorIndex];
    }
  }

  let rect17Y = imgDrwPrps.yOffset;
  let rect17H = imgDrwPrps.height;

  for (let i = 0; i < rects17.length; i++) {
    rects17[i].y -= rects17[i].speed;  // Move up using random speed
    if (rects17[i].y + rects17[i].size < rect17Y) {
      let size = rects17[i].size;
      let y, overlap;
      let attempts = 0;  
      do {
        y = rect17Y + rect17H - size;
        overlap = false;
        for (let j = 0; j < rects17.length; j++) {
          if (j !== i && isOverlapping(rects17[i].x, y, size, rects17[j].x, rects17[j].y, rects17[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects17[i].y = y;  // Reappear from the bottom border, and the bottom edge is aligned with the bottom border
      rects17[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects17[i].color = colors[colorIndex];
    }
  }

  let rect18Y = imgDrwPrps.yOffset;
  let rect18H = imgDrwPrps.height;

  for (let i = 0; i < rects18.length; i++) {
    rects18[i].y -= rects18[i].speed;  
    if (rects18[i].y + rects18[i].size < rect18Y) {
      let size = rects18[i].size;
      let y, overlap;
      let attempts = 0;  
      do {
        y = rect18Y + rect18H - size;
        overlap = false;
        for (let j = 0; j < rects18.length; j++) {
          if (j !== i && isOverlapping(rects18[i].x, y, size, rects18[j].x, rects18[j].y, rects18[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects18[i].y = y;  
      rects18[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length; 
      rects18[i].color = colors[colorIndex];
    }
  }

  let rect19Y = imgDrwPrps.yOffset;
  let rect19H = imgDrwPrps.height;

  for (let i = 0; i < rects19.length; i++) {
    rects19[i].y += rects19[i].speed;  
    if (rects19[i].y > rect19Y + rect19H) {
      let size = rects19[i].size;
      let y, overlap;
      let attempts = 0;  
      do {
        y = rect19Y - size;
        overlap = false;
        for (let j = 0; j < rects19.length; j++) {
          if (j !== i && isOverlapping(rects19[i].x, y, size, rects19[j].x, rects19[j].y, rects19[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects19[i].y = y;  
      rects19[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length; 
      rects19[i].color = colors[colorIndex];
    }
  }

  let rect20Y = imgDrwPrps.yOffset;
  let rect20H = imgDrwPrps.height;

  for (let i = 0; i < rects20.length; i++) {
    rects20[i].y -= rects20[i].speed;  
    if (rects20[i].y + rects20[i].size < rect20Y) {
      let size = rects20[i].size;
      let y, overlap;
      let attempts = 0;  
      do {
        y = rect20Y + rect20H - size;
        overlap = false;
        for (let j = 0; j < rects20.length; j++) {
          if (j !== i && isOverlapping(rects20[i].x, y, size, rects20[j].x, rects20[j].y, rects20[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) {  
          break;
        }
      } while (overlap);
      rects20[i].y = y;  
      rects20[i].speed = random(2, 10); 
      colorIndex = (colorIndex + 1) % colors.length; 
      rects20[i].color = colors[colorIndex];
    }
  }

  let rect23Y = imgDrwPrps.yOffset;
  let rect23H = imgDrwPrps.height;

  for (let i = 0; i < rects23.length; i++) {
    rects23[i].y += rects23[i].speed;  
    if (rects23[i].y > rect23Y + rect23H) {
      let size = rects23[i].size;
      let y, overlap;
      let attempts = 0; 
      do {
        y = rect23Y - size;
        overlap = false;
        for (let j = 0; j < rects23.length; j++) {
          if (j !== i && isOverlapping(rects23[i].x, y, size, rects23[j].x, rects23[j].y, rects23[j].size)) {
            overlap = true;
            break;
          }
        }
        attempts++;
        if (attempts > 100) { 
          break;
        }
      } while (overlap);
      rects23[i].y = y;  
      rects23[i].speed = random(2, 12); 
      colorIndex = (colorIndex + 1) % colors.length;  
      rects23[i].color = colors[colorIndex];
    }
  }
}

//Checks if two squares overlap
function isOverlapping(x1, y1, size1, x2, y2, size2) {
  return x1 < x2 + size2 &&
         x1 + size1 > x2 &&
         y1 < y2 + size2 &&
         y1 + size1 > y2;
}
