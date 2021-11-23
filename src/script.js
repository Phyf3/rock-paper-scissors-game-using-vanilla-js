const forRules = document.querySelector('#rules');
const rulesImage = document.querySelector('#rulesImage')
const closeRules = document.getElementById('close-rules')

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const option = document.querySelector('#options')

const clickedRock = document.querySelector('#rock-clicked')
const clickedPaper = document.querySelector('#paper-clicked')
const clickedScissors = document.querySelector('#scissors-clicked');

const rockWin =  document.querySelector('#rock-win')
const paperWin = document.querySelector('#paper-win')
const scissorsWin = document.querySelector('.pick')

const yourPick = document.querySelector('#your-pick')
const housePicked = document.querySelector('#house-pick')


const scoreBoard = document.getElementById('score')
const test = document.getElementById('test')




const updateScore = () => {
    let score =  0
    scoreBoard.innerHTML = score += 2;
} 

test.addEventListener('click', updateScore())


//G A M E   L O G I C

// i want to show an entirely new thing when the rock is clicked not retain what's clicked
let optionArray = [clickedPaper, clickedRock, clickedPaper] 
const random = optionArray[Math.floor(Math.random()*2)];

rock.addEventListener('click', () => {
    rock.classList.add('hidden');
    paper.classList.add('hidden')
    scissors.classList.add('hidden')
    yourPick.classList.remove('hidden')
    housePicked.classList.remove('hidden')

    if (random === clickedRock) {
        rock.classList.remove('hidden')
        rockWin.classList.remove('hidden')
        rock.style.order = "1"
        alert('you win!')
    } else {
        clickedRock.classList.remove('hidden')
        random.classList.remove('hidden')
        clickedRock.style.order = "1"
        alert('you lose')
    }
})

paper.addEventListener('click', () => {
    rock.classList.add('hidden');
    paper.classList.add('hidden')
    scissors.classList.add('hidden')
    yourPick.classList.remove('hidden')
    housePicked.classList.remove('hidden')

    if (random === clickedPaper) {
        paper.classList.remove('hidden')
        paperWin.classList.remove('hidden')
        paper.style.order = "1"
        alert('you win!')
    } else {
        clickedPaper.classList.remove('hidden')
        random.classList.remove('hidden')
        clickedPaper.style.order = "1"
        alert('you lose')
    }
})

scissors.addEventListener('click', () => {
    rock.classList.add('hidden');
    paper.classList.add('hidden')
    scissors.classList.add('hidden')
    yourPick.classList.remove('hidden')
    housePicked.classList.remove('hidden')

    if (random === clickedScissors) {
        scissors.classList.remove('hidden')
        scissorsWin.classList.remove('hidden')
        scissors.style.order = "1"
        alert('you win!')
    } else {
        clickedScissors.classList.remove('hidden')
        random.classList.remove('hidden')
        clickedScissors.style.order = "1"
        alert('you lose')
    }
})


//R U L E S   A C T I O N
forRules.addEventListener('click', ()=> {
    if (rulesImage.classList.contains('hidden')) {
        rulesImage.classList.remove('hidden')   
    } else {
        rulesImage.classList.add('hidden')
    }
    console.log('E dey work')
});

//Closing the rules page on click
closeRules.addEventListener('click', ()=> {
    if(!rulesImage.classList.contains('hidden')) {
        rulesImage.classList.add('hidden')
    }
})