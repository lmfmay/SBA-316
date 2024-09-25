// Cache at least one element using selectElementById.
let gameBoard = document.getElementById(`gameArea`)
let snake = document.getElementById(`snake`);
// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
let head = snake.firstElementChild;
// Cache at least one element using querySelector or querySelectorAll.
let box = document.querySelectorAll(`#box`);
let startBtn = document.getElementById(`startGameBtn`);
let player = document.getElementById(`playerName`);
let consent = document.getElementById(`consent`);
let form = document.getElementsByTagName(`form`);
let error = document.getElementById(`errorBox`);
let scoreBoard = document.getElementById(`score`);
let stopGameBtn = document.getElementById(`stopGameBtn`);
let gameOverMsg = document.getElementById(`gameOver`)
// Cache variables required for game functionality
let score = 0;
let positionTop = 0;
let positionLeft = 0;
let canvasHeight = gameBoard.clientHeight;
let canvasWidth = gameBoard.clientWidth;
let foodPosTop = Math.floor(Math.random() * (canvasHeight/10)) *10 // ensures food placed in multiples of 10, then converting back to px
let foodPosLeft = Math.floor(Math.random() * (canvasWidth/10)) *10
let foodInterval;

// Register at least two different event listeners and create the associated event handler functions.
// Include at least one form and/or input with DOM event-based validation.
// Use at least two Browser Object Model (BOM) properties or methods (alert method and document property in this case)
window.alert(`Welcome to a never-ending game of snake. This snake never stops eating but it doesn't ever get longer. It is also really lazy and doesn't move unless directed, so use the arrow keys to control every step. When you get bored, just click the Stop Game button.`)
form[0].addEventListener(`submit`,startGame); //hide form and show game elements after validation
document.addEventListener(`keydown`,handleKeyDown); //move snake to eat food
stopGameBtn.addEventListener(`click`,stopGame); //stop game


// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
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
    snake.style.top = positionTop + `px`; //get snake's x position
    snake.style.left = positionLeft + `px`; //get snake's y position
    
    eatsFood(); //execute function to eat food
    }
    
// Create at least one element using createElement.
// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
function foodAppears(){
    let fragment = document.createDocumentFragment(); 
    let food = document.createElement(`div`); //create food element
    food.classList.add(`food`); //add food class for styling
    foodPosTop = Math.floor(Math.random() * (canvasHeight/10)) *10 // ensures food placed in multiples of 10, then converting back to px
    foodPosLeft = Math.floor(Math.random() * (canvasWidth/10)) *10
    food.style.top = foodPosTop + `px`; //get food x position
    food.style.left = foodPosLeft + `px`; //get food y position
//Use appendChild and/or prepend to add new elements to the DOM.
    fragment.appendChild(food);
    gameBoard.appendChild(fragment); //add fragment to gameboard
}

// Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
function updateScore(){
    score++; //update 1 when food is eaten
    scoreBoard.innerHTML = `${player.value}'s Score: ${score}`; //change scoreboard
}

function startGame(event){
    event.preventDefault(); //stop pg from reloading
    error.style.display=`none`; //clear error box if exists
    if (!player.value){ //if no name entered
        error.style.display=`block`; //display error box
        return
    } 
// Modify at least one attribute of an element in response to user interaction.    
//remove/show elements to 'start game
    snake.removeAttribute(`hidden`);
    stopGameBtn.removeAttribute(`hidden`);
    startBtn.setAttribute(`hidden`,`true`);
    player.setAttribute(`hidden`,`true`);
    consent.setAttribute(`hidden`,`true`);
    scoreBoard.innerHTML = `${player.value}'s Score: 0`;

    foodAppears()
// set food to appear at regular intervals of 3s
    foodInterval = setInterval(() => {
    foodAppears();
    }, 3000);

}

// Iterate over a collection of elements to accomplish some task.
function eatsFood() {
    let foodCollection = document.querySelectorAll(`.food`);
    foodCollection.forEach(food => {
        if (snake.style.top == food.style.top && snake.style.left == food.style.left){ //if snake collides with food..
            food.remove() // remove food
            updateScore(); // Update score
        };
    });
}

// Stop game when stop game button is pressed.
function stopGame() {
    clearInterval(foodInterval) //stop food generation
    snake.setAttribute(`hidden`,`true`); //hide snake
    gameOverMsg.style.display=`block`; //display gameover
} 



