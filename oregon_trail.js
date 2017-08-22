(function(){

//random number generator needed for food amount
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

//Traveler object shell
  function Traveler(name, amount, isHealthy){
    this.name = name;
    this.amount = amount;
    this.isHealthy = isHealthy;
  }

//Wagon object shell
  function Wagon(passengers, capacity){
    this.passengers = passengers;
    this.capacity = capacity;
  }

//function to make a traveler using Traveler object
  function makeTraveler(name){
    return new Traveler(name, getRandomIntInclusive(0, 100), true);
}

//function to make a wagon using Wagon object
  function makeWagon(capacity){
    return new Wagon([],capacity);
  }

//function to hunt
  function hunt(traveler){
    let success = getRandomIntInclusive(0, 1);
    //console log to check if this was printing correctly
    //console.log(traveler.amount)
    //console.log(success);
    if(success === 1){
      traveler.amount = traveler.amount + 100;
      return traveler.amount;
      console.log("success")
    }else {
      return traveler.amount;
      console.log("fail")
    }
  }

//function to eat
  function eat(traveler){
    //console.log(traveler.amount);
    traveler.amount = traveler.amount - 20;
    //console.log(traveler.amount);
    if(traveler.amount < 20){
      traveler.isHealthy = false;
      //console.log(traveler.isHealthy)
    }
  }

//function to join wagon
  function join(wagon, traveler){
    if(wagon.passengers.length < wagon.capacity) {
      wagon.passengers.push(traveler)
    }
  }

//quarantine the wagon
  function quarantine(wagon){
    // console.log(wagon.passengers)
    // console.log(wagon.passengers.length)
    for(let i=0; i < wagon.passengers.length ; i++){
      if (wagon.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }

//return total amount of food
  function food(wagon){
    let wagonFood = 0;
    for(let i=0; i < wagon.passengers.length ; i++){
      wagonFood += wagon.passengers[i].amount;
  }
  return wagonFood;
}

//stuff to test code
// Create a wagon called 'wagon'
let wagon = makeWagon(5);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
eat(traveler2);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food

})()
