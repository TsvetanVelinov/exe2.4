function shop (input) {
let travel = Number(input[0]) ;   
let puzzles = Number(input[1]);
let toys = Number(input[2]);
let bears = Number(input[3]);
let minions = Number(input[4]);
let tracks = Number(input[5]);
let allToysPrice = (input[1]*2.60+input[2]*3+input[3]*4.10+input[4]*8.20+
    input[5]*2);

let allToysNumber = (puzzles+toys+bears+minions+tracks);

if (allToysNumber >=50){
    allToysPrice= allToysPrice - (allToysPrice*0.25)
}
let earningsAfterRent = allToysPrice - (allToysPrice*0.10)


let difference = earningsAfterRent- travel;

if (difference >=0){
    console.log(`Yes! ${difference.toFixed(2)} lv left.`)
} else { 
    console.log(`Not enough money! ${Math.abs(difference).toFixed(2)} lv needed.`)
}

}

shop(["40.8","20","25","30","50","10"])
shop(["320","8","2","5","5","1"])
