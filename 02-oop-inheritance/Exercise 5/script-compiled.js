class Actor{
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
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(eventName, callback){
    if( !this.events[eventName] ){
      this.events[eventName] = [];
    }
    
    this.events[eventName].push(callback)
  }
  
  emit(eventName){
    if( this.events[eventName] ) {
      this.events[eventName].forEach(callback => {
        callback.call(eventName);
      });
    }
  }
  
  off(eventName, callback){
    if ( this.events[eventName] ) {
      this.events[eventName] = this.events[eventName].filter(call => call !== callback);
    }
  }
  
}
class Logger {
  constructor() {}

  log(info) {
    console.log("The '" + info + "' event has been emitted");
  }

}
class Movie extends EventEmitter{
  constructor (name, year, duration){
    super();
    this._title = name;
    this._year = year;
    this._duration = duration;
    this.cast = [];
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get year() {
    return this._year;
  }

  set year(year) {
    this._year = year;
  }

  get duration() {
    return this._duration;
  }

  set duration(duration) {
    this._duration = duration;
  }

  play() {
    super.emit("play");
  }

  pause() {
    super.emit("pause");
  }

  resume() {
    super.emit("resume");
  }

  addCast(cast) {
    if (Array.isArray(cast)) {
      for (var i = 0; i < cast.length; i++) {
        if (cast[i] instanceof Actor) {
          this.cast.push(cast[i]);
        }
      }
    }
    else {
      if (cast instanceof Actor) {
        this.cast.push(cast);
      }
    }
  }

}
const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
terminator.addCast(arnold);
terminator.addCast(actors);
terminator.play();
let mixin = {
  share(friendName) {
    return friendName + " shared " + this.title;
  },

  like(friendName) {
    return friendName + " liked " + this.title;
  }

};
var ironman = new Movie("Ironman", 2008, 126);
Object.assign(ironman, mixin);
