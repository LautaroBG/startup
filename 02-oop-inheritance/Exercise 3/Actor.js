export default class Actor{

  constructor (name, age){
    this.name = name;
    this.age = age;
  }

  get age() {
    return this.age;
  }

  set age(age) {
    this.age = age;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }
}