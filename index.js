// let firstCard = randomcard()
// let secondCard = randomcard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard

//Initial game conditions
let cards =[]
let sum = 0
let blackJackHas = false
let isAlive = false    //Game didnt started yet

let player =
{
    Name : "Teja",
    pts : 156
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": $"+ player.pts

let message = ""

let messageEl = document.getElementById("msg-el")

// let sumEL = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")  //more dynamic so we need to be more specific to tell sum-el is a id selector by using # before it

let cardEl = document.querySelector("#card-el")

function randomcard()
{
    let randNum = Math.floor( Math.random(0,1)* 13 + 1)
    if(randNum>10)
    {
        return 10;
    }
    else if(randNum === 1)
    {
        return 11;
    }
    return randNum

    // return Math.ceil(randNum)
}

function startGame()
{
   
    if(blackJackHas===true ||sum > 21)
    {
        blackJackHas = false
        sum =0
        sumEl.textContent = "Sum: "
        cardEl.textContent = "Cards: "
        messageEl.textContent = "Want to play around ?"
    }
    else if(isAlive===false)
    {
        isAlive = true
        let firstCard = randomcard()
        let secondCard = randomcard()

        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame()
{
    
    cardEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent += cards[i] +" "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum<21)
    {
        message = "Do you want to draw new card? 😃"
    }
    else if(sum === 21)
    {
        message = "Woohoo! You've won the game 😍"
        blackJackHas = true
        isAlive = false
    }
    else
    {
        message = "You're out of the game! 😣"
        isAlive = false
    }
    
    messageEl.textContent = message
    // console.log(blackJackHas)
    // console.log(isAlive)
    // console.log(message)
     
}
function newcard()
{
    if(isAlive===true && blackJackHas===false)
    {
        let card = randomcard()
        cards.push(card)
        sum += card
        renderGame()
    }    
}