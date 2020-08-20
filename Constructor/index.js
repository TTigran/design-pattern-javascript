// var Person = function(name, surname, age) {
//     this.name = name;
//     this.surname =surname;
//     this.age = age;
//     this.getFullInfoThis=function () {
//       console.log(this.name+'|'+this.surname+'|'+this.age);
//     }
// };
//
// var prs1 = new Person('Vazgush', 'Vazganushyan', 25);
// prs1.getFullInfoThis();
//
// var prs2 = new Person('Jeki', 'Chan', 56);
// prs2.getFullInfoThis();

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  getFullInfoThis() {
    console.log(this.name + '|' + this.surname + '|' + this.age);
  }

}

var prs1 = new Person('Vazgush', 'Vazganushyan', 25);
prs1.getFullInfoThis();

var prs2 = new Person('Jeki', 'Chan', 56);
prs2.getFullInfoThis();











