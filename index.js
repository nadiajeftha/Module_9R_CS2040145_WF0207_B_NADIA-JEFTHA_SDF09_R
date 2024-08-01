let firstCard = 3
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20 ) {
    message ="Do you want to draw a new card?  🃏"
} else if (sum === 21) {
    message = "Good job! You've got BLACKJACK! 🏅" 
    hasBlackJack = true
} else {
    message = "You lost! 😞 Try again next time. "
    isAlive = false
}

console.log (message)