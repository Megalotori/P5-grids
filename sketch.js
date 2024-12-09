// let radius = 50;
// let diameter = 2 * radius;
const square_side = 50;

// create 4 variables for imgs
let textureOne;
let textureTwo;
let textureThree;
let textureFour;

let textures;

function preload() {
  // load each img
  textureOne = loadImage("Textures/texture-trans1.png");
  textureTwo = loadImage("Textures/texture-trans2.png");
  textureThree = loadImage("Textures/texture-trans3.png");
  textureFour = loadImage("Textures/texture-trans4.png");
}

function setup() {
  createCanvas(500, 500);
  // noLoop();

  // Circle

  // Circle co ords are the center
  //   for (let column = 0; column < 5; column = column + 1) {
  //     // shortcut column +1 = column++
  //     let x = radius + column * diameter;
  //     let y = radius;
  //     circle(x, y, diameter);
  //   }

  // square
  textures = [textureOne, textureTwo, textureThree, textureFour];
}

function draw() {
  background(220);
  frameRate(1.5);



  // Square

  // initialising the column, squares co ords are the top left corner
  for (column = 0; column < 10; column = column + 1) {
    // second loop establishes the rows below
    for (row = 0; row < 10; row = row + 1) {
      // calculate x & y for each column / row position
      let x = square_side * column;
      let y = square_side * row;

      // sets random textures
      let randomTexture = random(textures);

      // Draws the Square
      // square(x, y, square_side);
      image(randomTexture, x, y, square_side, square_side);

      // calculate random colour
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);

      // apply colour "Pick up brush"
      tint(r, g, b);
    }
  }
}
