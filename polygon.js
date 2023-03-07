class Polygon {
  sides;

  constructor(sides) {
    this.sides = sides;
  }

  getSides() {
    console.log(`This polygon has ${this.sides} sides.`);
  }

  setSides(n) {
    this.sides = n;
  }
}

const triangle = new Polygon(3);
triangle.getSides();

const octogon = new Polygon(8);
octogon.getSides();

class Square extends Polygon {
  sides = 4;

  getSides() {
    console.log(`The square has ${this.sides} sides.`);
  }
}

const square = new Square();
square.getSides();

triangle.setSides(200);
triangle.getSides();

square.setSides(10);
square.getSides();
