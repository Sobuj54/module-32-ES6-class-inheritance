// in ES6 class is known as syntactic sugar
class Instructor {
  name;
  designation = "web course instructor";
  team = "web team";
  location;
  //   constructor is used to take values of name and location
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  //   these functions that are inside the class are called method
  supportSessionTime(time) {
    console.log(`start support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`create quiz for module ${module}`);
  }
}
// creating object with class
const ami = new Instructor("sobuj", "dhaka");
console.log(ami);
ami.supportSessionTime("9.00");
ami.createQuiz(60);
// another instructor object
const tumi = new Instructor("rayhan", "tangail");
console.log(tumi);
