
let cards = []
let sum = 0
let jackPot = false
let inGame = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "myke",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor (Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    inGame = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You got Blackjack!"
        jackPot = true
    }
    else {
        message = "you are out of the game!"
        inGame = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let x = 0; x < cards.length; x += 1) {
        cardsEl.textContent += cards[x] + " "
    }
}
function newCard() {
    if (inGame === true && jackPot === false) {
        let cardPick = getRandomCard()
        sum += cardPick
        cards.push(cardPick)
        renderGame()   
    }
    
}

