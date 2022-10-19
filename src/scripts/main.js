// Imports go first
import {makePottery} from "./PotteryWheel.js"

//Import the function from Kiln.js so can invoke firePottery function (below comment on Line 32):
import {firePottery} from "./Kiln.js"



// Make 5 pieces of pottery at the wheel
// Invoke the makePottery function and provide required values as arguments:
let mug = makePottery("mug", 2, 3)
console.log(mug)

//Make five pieces of pottery:

let dinnerPlate = makePottery("dinner plate", 10, 1)
console.log(dinnerPlate)

let bowl = makePottery("bowl", 10, 5)
console.log(bowl)


let saladPlate = makePottery("salad plate", 8, 1)
console.log(saladPlate)


let butterDish = makePottery("butter dish", 5, 3)
console.log(butterDish)



// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



