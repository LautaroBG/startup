export default class Actor {
  constructor(name, age) {
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
export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => {
        callback.call(eventName);
      });
    }
  }

  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(call => call !== callback);
    }
  }

}
export default class Logger {
  constructor() {}

  log(info) {
    console.log("The '" + info + "' event has been emitted");
  }

}
import EventEmitter from "./EventEmitter.js";
import Actor from "./Actor.js";
import Logger from "./Logger.js";
import Movie from "./Movie.js";
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
Object.assign(ironman, social);
import EventEmitter from "./EventEmitter.js";
import Actor from "./Actor.js";
export default class Movie extends EventEmitter {
  constructor(name, year, duration) {
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }

  get year() {
    return this.year;
  }

  set year(year) {
    this.year = year;
  }

  get duration() {
    return this.duration;
  }

  set duration(duration) {
    this.duration = duration;
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
    } else {
      if (cast instanceof Actor) {
        this.cast.push(cast);
      }
    }
  }

}
