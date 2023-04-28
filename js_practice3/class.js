//                  Task 1
/*
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = "Junior";
  }
  setTechnologies(technologies) {
    this.technologies = [...this.technologies, ...technologies];
  }
  setNewStatus(newStatus){
    this.status = newStatus;

  }
}
const student = new Student("Maxim", 20);

student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewStatus("Middle");

console.log(student);
*/

//                            Task 2
/*
class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    compareAge(personToCompare){
        if(this.age<personToCompare.age){
            alert(`${this.name} is younger than ${personToCompare.name}`)
        }else if(this.age>personToCompare.age){
            alert(`${this.name} is older than ${personToCompare.name}`)
        }else{
            alert(`${this.name} is at the same age as ${personToCompare.name}`)

        }
    }
}

const person1 = new Person("Maxim", 24);
const person2 = new Person("Svetlana", 36);
const person3 = new Person("Irina", 23);

person1.compareAge(person2); 
person2.compareAge(person3); 
person3.compareAge(person1); 
*/

//                          Task 3
/*
class CarService {
  static DefaultWorkingHours = {
    from: "9:00",
    till: "20:00",
  };
  constructor(name, workingHours) {
    (this.name = name),
      (this.workingHours = {
        from: workingHours.from || DefaultWorkingHours.from,
        till: workingHours.till || DefaultWorkingHours.till,
      });
  }
  repairCar(carName) {
    if (!carName) {
      console.error(
        "You need to specify the name of the car in order to repair it"
      );
      
    } else {
      const dateNow = new Date();
      if (
        Number(this.workingHours.from.split(":")[0]) <
        dateNow.getHours <
        Number(this.workingHours.till.split(":")[0])
      ) {
        alert(`Now we will repair your car ${carName}! Please wait`)
      } else {
        alert("Unfortunately, we are closed now. Come back tomorrow.")
      }
    }
  }
}
const carService = new CarService("RepairCarNow", { from: "8:00", till: "20:00" });
carService.repairCar("BMW");
*/

//                                  Task 4
/*
class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(wordInput, descriptionInput) {
    const newWord = {
      word: wordInput,
      description: descriptionInput,
    };
    if (!this.words.hasOwnProperty(wordInput)) {
      this.words[`${wordInput}`] = newWord;
    }
  }
  remove(wordInput) {
    if (this.words.hasOwnProperty(wordInput)) {
      delete this.words[`${wordInput}`];
    }
  }
  get(wordInput) {
    if (this.words.hasOwnProperty(wordInput)) {
      console.log(this.words[`${wordInput}`]);

      return this.words[`${wordInput}`];
    }
  }
  showAllWords() {
    for (const [key, value] of Object.entries(this.words)) {
      console.log(`${key}: ${value.description}`);
    }
  }
}
/*
const dictionary = new Dictionary("Explanatory Dictionary");
dictionary.add("JavaScript", "popular programming language");
dictionary.add(
  "Web developer",
  "A person who creates new services and sites or maintains and supplements existing ones"
);

dictionary.remove("JavaScript");
dictionary.showAllWords();
*/
//                                      Task 5
/*
class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(wordInput, descriptionInput) {
    const newWord = {
      word: wordInput,
      description: descriptionInput,
      isDifficult: true
    };
    if (!this.words.hasOwnProperty(wordInput)) {
      this.words[`${wordInput}`] = newWord;
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary("Hard words");
hardWordsDictionary.add("amateur", "One who practices science or art without special training, having only a superficial knowledge.");
hardWordsDictionary.add("neologism", "A new word or expression, as well as the new meaning of the old word.");
hardWordsDictionary.add("quantum", "The indivisible part of some quantity in physics.");

hardWordsDictionary.remove("neologism");
hardWordsDictionary.showAllWords();
*/

//                                            Task 6
/*
class Dictionary {
  #name;
  #words;
  constructor(name) {
    this.#name = name;
    this.#words = {};
  }
  get mainName() {
    return this.#name;
  }
  set setMainName(settedName) {
    this.#name = settedName;
  }
  get allWords() {
    return this.#words;
  }
  add(wordInput, descriptionInput) {
    const newWord = {
      word: wordInput,
      description: descriptionInput,
    };
    let words = this.allWords;

    words[`${wordInput}`] = newWord;
  }
  remove(wordInput) {
    let words = this.allWords;

    if (words.hasOwnProperty(wordInput)) {
      delete words[`${wordInput}`];
    }
  }
  get(wordInput) {
    let words = this.allWords;

    if (words.hasOwnProperty(wordInput)) {
      console.log(this.words[`${wordInput}`]);

      return words[`${wordInput}`];
    }
  }
  showAllWords() {
    let words = this.allWords;

    for (const [key, value] of Object.entries(words)) {
      console.log(`${key}: ${value.description}`);
    }
  }
}


class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(wordInput, descriptionInput) {
    const newWord = {
      word: wordInput,
      description: descriptionInput,
      isDifficult: true
    };
    let words = this.allWords;
    if (!words.hasOwnProperty(wordInput)) {
      words[`${wordInput}`] = newWord;
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary("Hard words");
hardWordsDictionary.add("amateur", "One who practices science or art without special training, having only a superficial knowledge.");
hardWordsDictionary.add("neologism", "A new word or expression, as well as the new meaning of the old word.");
hardWordsDictionary.add("quantum", "The indivisible part of some quantity in physics.");

hardWordsDictionary.remove("neologism");
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Difficult words
hardWordsDictionary.setMainName = "New Dictionary";
console.log(hardWordsDictionary.mainName); // New Dictionary
console.log(hardWordsDictionary.allWords); // displays an object that contains the words dilettante and quantum
*/

//                                            Task 7
/*
class Develooper{
  constructor(fullName,age,position){
    this.fullName = fullName,
    this.age = age,
    this.position = position
    this.technologies = []
  }
  code(){}
  learnNewTechnology(technology){
    this.technologies.push(technology)
  }
}

class JuniorDeveloper extends Develooper{
  constructor(fullName,age){
    super(fullName,age,"Junior");
    this.technologies.push("HTML","CSS","Javascript")
  }
  code(){
    console.log("Junior developer is writiing code...");
  }

}

class MiddleDeveloper extends Develooper{
  constructor(fullName,age){
    super(fullName,age,"Middle");
    this.technologies.push("HTML","CSS","Javascript","React")
  }
  code(){
    console.log("Middle developer is writiing code...");
  }

}

class SeniorDeveloper extends Develooper{
  constructor(fullName,age){
    super(fullName,age,"Senior");
    this.technologies.push("HTML","CSS","Javascript","React","NodeJS")
  }
  code(){
    console.log("Senior developer is writiing code...");
  }

}
let juniorDeveloper = new JuniorDeveloper("Anastasia", 20)
let middleDeveloper = new MiddleDeveloper("Igor", 25)
let seniorDeveloper = new SeniorDeveloper("Maxim", 30)
juniorDeveloper.code(); // Junior developer writes code...
middleDeveloper.code(); // Middle developer writes code...
seniorDeveloper.code(); // Senior developer writes code...

console.log(juniorDeveloper.fullName, juniorDeveloper.age,

juniorDeveloper.position); // "Anastasia", 20, "Junio";
console.log(middleDeveloper.fullName, middleDeveloper.age,

middleDeveloper.position); // "Igor", 25, "Middle"
console.log(seniorDeveloper.fullName, seniorDeveloper.age,

seniorDeveloper.position); // "Maxim", 30, "Senior"
*/