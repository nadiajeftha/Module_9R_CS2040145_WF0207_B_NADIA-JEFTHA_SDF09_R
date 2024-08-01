// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 3
let secondCard = 10

let sum = firstCard + secondCard

console.log(sum)

if (sum <= 20 ) {
    console.log("Do you want to draw a new card?  🃏")
} else if (sum === 21) {
    console.log("Good job! You've got BLACKJACK! 🏅")
} else {
    console.log("You lost! 😞 Try again next time. ")
}