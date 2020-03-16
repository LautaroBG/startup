import EventEmitter from "./EventEmitter.js";
import Actor from "./Actor.js";

export default class Movie extends EventEmitter{

  constructor (name, year, duration){
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
    }
    else {
      if (cast instanceof Actor) {
        this.cast.push(cast);
      }
    }
  }
}