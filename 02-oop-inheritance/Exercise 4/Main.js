import EventEmitter from "./EventEmitter.js";
import Actor from "./Actor.js";
import Logger from "./Logger.js";
import Movie from "./Movie.js";

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);

terminator.play();

let mixin = {
  share(friendName){
    return (friendName + " shared " + this.title);
  },
  like(friendName){
    return (friendName + " liked " + this.title);
  }
};

var ironman = new Movie("Ironman", 2008, 126);

Object.assign(ironman, social);

