/**
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
*/