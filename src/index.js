const possibleChoices = document.querySelectorAll('button')

let userChoice

//const rock = document.querySelector('#rock')
//const paper = document.querySelector('#paper')
//const scissors = document.querySelector('#scissors')
//
const scoreBoard = document.getElementById('score')
const options = document.getElementById('options')
const selectionPage = document.getElementById('selection')
let choicesArray = ['rock', 'paper', 'scissors'] 


const randomChoice = choicesArray[Math.floor(Math.random()*2)];

let score = 0


const userSelect = document.getElementById('user-select');
const computerChosen = document.getElementById('computer-choice')

const playAgain = document.getElementById('play-again')
const resultStatus = document.getElementById('result-status')

const handleRules = document.getElementById('rules');
const handleRuleImage = document.getElementById('rulesImage')
const closeRules = document.getElementById('close-rules')

const resultPanel = document.getElementById('result-board')

const updateScore = (value) => {
    score += value
    scoreBoard.innerHTML = score
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    userChoice = possibleChoice.getAttribute('id') //getting the value of the id
    options.classList.add('hidden');
    selectionPage.classList.remove('hidden')
    setTimeout(()=> {
        resultBoard()
    }, 2000)
    
    console.log(userChoice)
    //computerChoice = randomSelection()
    chooseResults()
    console.log(randomChoice)
    //computerChoice = randomSelection()
    //console.log(typeof(userChoice))
    //console.log(typeof(random))
    
}))

// Game Logic
const chooseResults = () => {
    
    setTimeout(()=> {
        updateDisplay(userSelect, userChoice)
    }, 500) 
    
    setTimeout(()=> {
        updateDisplay(computerChosen, randomChoice)
    }, 1540)
    


    if (userChoice === randomChoice) {
        console.log('draw')
        draw()
        addRings(userSelect)
    } else  if ((userChoice === "rock" && randomChoice === "scissors") 
        || (userChoice === "scissors" && randomChoice === "paper")
        || (userChoice === "paper" && randomChoice ==="rock"))
     {
        console.log("you win")
        setTimeout(()=> {
            updateScore(1)
        }, 2000)
        addRings(userSelect, computerChosen)
        winStatus()
    } else {
        console.log("you loooose")
        setTimeout(()=> {
            updateScore(-1)
        }, 2000)
        addRings(computerChosen, userSelect)
        lossStatus()
    }
}

const updateDisplay = (selected, choice) => {

    selected.classList.remove('hidden')

    const displayed = selected.querySelector('img')

    displayed.src= `../images/icon-${choice}.svg`

    selected.classList.add(choice)
}

const addRings = (add, remove) => {
    add.classList.add('rings')
    remove.classList.remove('rings')}


const winStatus = () => {
    resultStatus.innerHTML = "YOU WIN"
}
const lossStatus = () => {
    resultStatus.innerHTML = "YOU LOSE"
}
const draw = () => {
    resultStatus.innerHTML = "DRAW"
}

const resultBoard = () => {
    playAgain.classList.remove('hidden')
    resultStatus.classList.remove('hidden')
    resultPanel.classList.add('anim')
}


const replay = (e) => {
    e.classList.add('hidden')
}
const replayyy = (e) => {
    e.classList.remove('hidden')
}
playAgain.addEventListener('click', () => {
    replay(userSelect)
    replay(computerChosen)
    replay(playAgain)
    replay(resultStatus)
    replayyy(options)
})


handleRules.addEventListener('click', () => {
    handleRuleImage.classList.remove('hidden')
    handleRuleImage.classList.add('ruleActive')
})
closeRules.addEventListener('click', ()=>{
    handleRuleImage.classList.add('hidden')
})