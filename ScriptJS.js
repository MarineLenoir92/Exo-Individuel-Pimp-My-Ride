let trips =  [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7",
  ]


//split an array in multiple array//
function parseTrip(trips){

    let clientUn = trips.slice(0,1).toString().split(" ");
    console.log(clientUn);
    
    let clientTwo = trips.slice(1,2).toString().split(" ");
    console.log(clientTwo);
    
    let clientThree = trips.slice(2,3).toString().split(" ");
    console.log(clientThree);
    
    let clientFour = trips.slice(3,4).toString().split(" ");
    console.log(clientFour);
     
   
//return multiple values//
return[clientUn, clientTwo, clientThree, clientFour]
}



function parseTrips(clientUn, clientTwo, clientThree, clientFour){

//value of the future array of objects//
let clients = [clientUn, clientTwo, clientThree, clientFour]
//keys of the future array of objects//
let keys = ["client", "start", "duration", "price"];
let array = [];

//for loop => create array of objects//
for (i=0; i<clients.length; i++){
let object = {};
keys.forEach((element, index) => (object[element] = clients[i][index]));
console.log(object);
array.push(object);
}

console.log(array);
return array;
}

// Extract specific keys values from array of object as new array//
function getPrices(array){
let sum = 0;
let i = 0;

let travelPrices = array.map( (extractprices) => parseInt(extractprices.price))
console.log(travelPrices);

// Find the sum of the array//
for(i; i<travelPrices.length; i++){
  sum += travelPrices[i];
}
console.log(sum);
return sum;
}






let [clientUn, clientTwo, clientThree, clientFour] = parseTrip(trips);
let array = parseTrips(clientUn, clientTwo, clientThree, clientFour);
let sum = getPrices(array)
