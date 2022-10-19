// Declare a variable and set it to a value of 1.  This is the primary key for each piece of pottery.

let idNumber = 1

// Define and export a function named makePotter

export const makePottery = (shape, weight, height) => {
    const potteryObject = {
    shape: shape,
    weight: weight,
    height: height,
    id: idNumber ++
    }

    return potteryObject
}