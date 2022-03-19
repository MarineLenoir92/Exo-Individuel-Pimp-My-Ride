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

let clients = [clientUn, clientTwo, clientThree, clientFour]
let keys = ["client", "start", "duration", "price"];
let object = {};

for (i=0; i<clients.length; i++){
keys.forEach((element, index) => (object[element] = clients[i][index]));
console.log(object);
}
}


let [clientUn, clientTwo, clientThree, clientFour] = parseTrip(trips);
parseTrips(clientUn, clientTwo, clientThree, clientFour);