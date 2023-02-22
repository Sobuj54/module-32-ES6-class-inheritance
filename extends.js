// this is the common class
class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  feedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

// ------------------->
// we need to use extends to use the common class
class Instructor extends TeamMember {
  designation = "web course instructor";
  team = "web team";
  //   constructor is used to take values of name and location
  constructor(name, location) {
    super(name, location);
  }
  //   these functions that are inside the class are called method
  supportSessionTime(time) {
    console.log(`start support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`create quiz for module ${module}`);
  }
}

// ---------------->
class Developer extends TeamMember {
  designation = "web developer";
  team = "developer";
  tech;
  //   constructor is used to take values of name and location
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  //   these functions that are inside the class are called method
  developThisFeature(feature) {
    console.log(`please develop ${feature}`);
  }
  releaseVersion(version) {
    console.log(`release this ${version} version`);
  }
}

// --------------------------->
class JobPlacement extends TeamMember {
  designation = "job placement commandos";
  team = "job Placement";
  region;
  //   constructor is used to take values of name and location
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  //   these functions that are inside the class are called method
  developThisFeature(feature) {
    console.log(`start support session at ${feature}`);
  }
  releaseVersion(version) {
    console.log(`create quiz for module ${version}`);
  }
}
// using classes
const sobuj = new Developer("sobuj", "dhaka", "react");
console.log(sobuj);
sobuj.developThisFeature("comment live");
sobuj.releaseVersion("3.1");
