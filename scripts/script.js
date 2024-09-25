
let gameBoard = document.getElementById(`gameArea`)
// - Cache at least one element using selectElementById.
let snake = document.getElementById(`snake`);
// - Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
let head = snake.firstElementChild;
// - Cache at least one element using querySelector or querySelectorAll.
let box = document.querySelectorAll(`#box`);
let startBtn = document.getElementById(`startGameBtn`);
let player = document.getElementById(`playerName`);
let consent = document.getElementById(`consent`);
let form = document.getElementsByTagName(`form`);
let error = document.getElementById(`errorBox`);
let scoreBoard = document.getElementById(`score`);

let score = 0;
let positionTop = 0;
let positionLeft = 0;
let canvasHeight = gameBoard.clientHeight;
let canvasWidth = gameBoard.clientWidth;
let foodPosTop = Math.floor(Math.random() * (canvasHeight/10)) *10 // ensures food placed in multiples of 10, then converting back to px
let foodPosLeft = Math.floor(Math.random() * (canvasWidth/10)) *10

// Register at least two different event listeners and create the associated event handler functions.
// Include at least one form and/or input with DOM event-based validation.
form[0].addEventListener(`submit`,startGame)
document.addEventListener(`keydown`,handleKeyDown)
foodAppears()


// - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
function handleKeyDown(event) {
    const snakeMove = 10;
    if (event.key == `ArrowDown` && positionTop <= canvasHeight-20) { //minus 2* snake size
            positionTop += snakeMove;
        }
    else if (event.key == `ArrowUp` && positionTop >= 10) { //minus snake size
        positionTop -= snakeMove;
        }
    else if (event.key == `ArrowLeft` && positionLeft >= 10) { //minus snake size
        positionLeft -= snakeMove;
        }
    else if (event.key == `ArrowRight`&& positionLeft <= canvasWidth-20) { //minus 2* snake size
        positionLeft += snakeMove;
        }
    snake.style.top = positionTop + `px`;
    snake.style.left = positionLeft + `px`;
    
    if (positionTop == foodPosTop && positionLeft == foodPosLeft){
        foodVanish(); // Remove old food
        foodAppears(); // Create new food
        updateScore(); // Update score
    }
    }
// Create at least one element using createElement.
function foodAppears(){
    let food = document.createElement(`div`);
    food.classList.add(`food`);
    foodPosTop = Math.floor(Math.random() * (canvasHeight/10)) *10 // ensures food placed in multiples of 10, then converting back to px
    foodPosLeft = Math.floor(Math.random() * (canvasWidth/10)) *10
    food.style.top = foodPosTop + `px`;
    food.style.left = foodPosLeft + `px`;
//Use appendChild and/or prepend to add new elements to the DOM.
    gameBoard.appendChild(food);
}

function foodVanish(){
    let existingFood = document.querySelectorAll(`.food`);
    existingFood.forEach(food => { food.remove()
    });
}

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
function updateScore(){
    score++;
    scoreBoard.innerHTML = `${player.value}'s Score: ${score}`;
}

function startGame(event){
    event.preventDefault();
    error.style.display=`none`;
    if (!player.value){
        error.style.display=`block`;
        return
    } 
// Modify at least one attribute of an element in response to user interaction.    
    snake.removeAttribute(`hidden`);
    startBtn.setAttribute(`hidden`,`true`);
    player.setAttribute(`hidden`,`true`);
    consent.setAttribute(`hidden`,`true`);
    scoreBoard.innerHTML = `${player.value}'s Score: 0`;

}

// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
// - Use at least two Browser Object Model (BOM) properties or methods.
    //alert and prompt


// - Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// - Commit frequently to the git repository.
// - Include a README file that contains a description of your application.
// - Level of effort displayed in creativity, presentation, and user experience.


// - Iterate over a collection of elements to accomplish some task.
    //for i in form...