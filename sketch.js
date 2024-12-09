// let radius = 50;
// let diameter = 2 * radius;
const square_side = 50;

function setup() {
  createCanvas(500, 500);
  background(220);

  // Circle

  // Circle co ords are the center
  //   for (let column = 0; column < 5; column = column + 1) {
  //     // shortcut column +1 = column++
  //     let x = radius + column * diameter;
  //     let y = radius;
  //     circle(x, y, diameter);
  //   }

  // Square

  // initialising the column, squares co ords are the top left corner
  for (column = 0; column < 10; column = column + 1) {
    // second loop establishes the rows below
    for (row = 0; row <10; row = row + 1) {
      // calculate x & y for each column / row position
      let x = square_side * column;
      let y = square_side * row;

      // Draws the Square
      square(x, y, square_side);

      // calculate random colour
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);

      // apply colour "Pick up brush"
      fill(r, g, b);
    }
  }
}

function draw() {}
