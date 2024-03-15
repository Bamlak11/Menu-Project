
function calculateFishCaught(totalFish){    //created a function for calculateFishCaught with totalFish perameter
    let total = 0; //lets total start at 0
    totalFish.forEach(fishQuantity =>{ // the .forEach goes over the totalFish 
        total += fishQuantity; //this adds the fish quantity within the total variable

    } )
    return total; //returns total
}

let fishCaught = [50, 75, 25]; //created a variable where fishCaught = 50, 75, and 25.




function filterEndangeredFish(fishOptions){ //function called filterEndangeredFish with the perameter fishOptions
    return fishOptions.filter(option => !option.edangered) //filters out the fish option of any fish that is not endangered
}

let fishOptions = [ //created a var for fishOptions cotaining an array
    {name: "Salmon", endangered: false}, //name of fish, check if its endangered, then return a boolean
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
]


class ResearchInstitute{ //created a class called ResearchInstitute
    constructor(name, location, specialty, size){ //constructor with an arrow of name, location, etc...
        this.name = name; // "this" referes to the current object. and equals it to the array name.
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    }
}

class MarineResearchInstitute extends ResearchInstitute{ // new class called MarineResearchInstitute that extends to the Research institute class
    constructor(name, location, specialty, size, waterLocation, climate){ // constructor with an array
        super(name, location, specialty, size) //super brings the the ResearchInstitute array
        this.waterLocation = waterLocation; //assigns the new object to this class
        this.climate = climate;
    }
}