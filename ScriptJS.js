let tripToParse = "Perdita 8 10 8";

function parseTrip(trip){
//convert string to array//
let array = trip.split(" ");

console.log(array);

//append values to object//
//key : value => array[i]//
const client = {client: array[0]};
console.log(client);
const start = {start: array[1]};
console.log(start);
const duration = {duration: array[2]};
console.log(duration);
const price = {price: array[3]};
console.log(price);

const infoTrip = Object.assign(client, start, duration, price);
console.log(infoTrip);
}

parseTrip(tripToParse);