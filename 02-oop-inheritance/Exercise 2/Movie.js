import EventEmitter from "./EventEmitter.js";

export default class Movie extends EventEmitter{

  constructor (name, year, duration){
    super();
    this.title = name;
    this.year = year;
    this.duration = duration;
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

}