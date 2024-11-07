class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area() {
    return this.width * this.height;
  }
  
  get perimeter() {
    return (2 * this.width) + (2 * this.height);
  }
  
  set new_size({width, height}) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(9, 5);
console.log(rect);
rect.perimeter;
rect.area;

rect.new_size = {width: 10, height: 6};
console.log(rect);
rect.perimeter;
rect.area;
