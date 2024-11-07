class Rec {

  constructor(w, h) {
    this.n = "Jethro";
    this.w = w;
    this.h = h;
  }
  
  get area() {
    return this.w * this.h;
  };
  
  get perimeter() {
    return (2 * this.w) + (2 * this.h);
  };
  
  set size({w, h}) {
    this.w = w;
    this.h = h;
  };
  
  set name(name) {
    this.n = name;
  }
}

const rec = new Rec(5, 7);
console.log(rec);
rec.area;
rec.perimeter;

rec.size = { w: 10, h: 4 };
console.log(rec);
rec.area;
rec.perimeter;

rec.name = "Yunus";

console.log(rec);


