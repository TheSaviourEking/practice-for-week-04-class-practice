// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  };

  static introducePeople(persons) {
    // console.log(persons)
    if (!Array.isArray(persons)) {
      console.log("introducePeople only takes an array as an argument.");
    } else {
      persons.forEach(person => {
        if (!(person instanceof Person)) {
          throw new Error("All items in array must be Person class instances.")
        } else {
          person.introduce();
        }
      })
    }
  }
}


// Example usage:
const person1 = new Person('John', 'Doe', 30);
const person2 = new Person('Jane', 'Smith', 25);

Person.introducePeople([person1, person2]);
Person.introducePeople('badInput');

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
