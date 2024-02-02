//common js method
// const person = {
//    name: 'Dave',
//    age: 19,
//    city: 'New York',
//    hobbies: 'Public speaking'
// }
//module.exports = person;


//es module
export default class Person {
   constructor(name, age) {
      this.name = name
      this.age = age
   }

   greetings() {
      console.log(`My name is ${this.name} and I'm ${this.age} years old`)
   }
}
