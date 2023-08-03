// Smaller objects (components)
const Eat = {
    eat() {
      console.log("Eating...");
    },
  };
  
  const Dance = {
    dance() {
      console.log("danceing...");
    },
  };
  
  const Play = {
    play() {
      console.log("Playing...");
    },
  };
  
  const person = Object.assign({}, Eat, Dance, Play);
  
  person.eat();
  person.dance(); 
  person.play(); 
  