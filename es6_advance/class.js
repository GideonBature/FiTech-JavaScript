// creating a class
class Student {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  speak() {
    console.log(`my name is: ${this.name}, and I am ${this.age} years old.`);
  }
}

// instance of a class
const student = new Student("Obed", 78, "obed@st.fitech.com");

student.speak();

const student1 = new Student("Fatima", 96, "fatima@fitech.com");

student1.speak();

console.log(student);
console.log(student1);
