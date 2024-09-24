
let gameBoard = document.getElementById(`gameArea`)
// - Cache at least one element using selectElementById.
let snake = document.getElementById(`snake`);
let head = document.getElementById(`snakeHead`);
// - Cache at least one element using querySelector or querySelectorAll.
let box = document.querySelectorAll(`#box`);


// - Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
let score = gameBoard.firstElementChild;

// - Register at least two different event listeners and create the associated event handler functions.
document.addEventListener('keydown',handleKeyDown)

let positionTop = 0;
let positionLeft = 0;
let canvasHeight = gameBoard.clientHeight;
let canvasWidth = gameBoard.clientWidth;
let foodPosTop = Math.floor(Math.random() * (canvasHeight/10)) *10 // ensures food placed in multiples of 10, then converting back to px
let foodPosLeft = Math.floor(Math.random() * (canvasWidth/10)) *10

setInterval(() => {
    foodAppears()
    }, 5000); // Interval set to 5 seconds

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
        score.innerHTML = `Score: 1`
    }
    }
// - Create at least one element using createElement.
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



// - Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 
// - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    //change scores

// - Modify at least one attribute of an element in response to user interaction.
    //change state of snake body to visible

// - Register at least two different event listeners and create the associated event handler functions.
    //create click listener on start button
// - Use at least two Browser Object Model (BOM) properties or methods.
    //alert and prompt
// - Include at least one form and/or input with HTML attribute validation.
    //enter name to start game
// - Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
    // start button can be submit button. add event listener to ensure all fields populated before game starts.
// - Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
// - Commit frequently to the git repository.
// - Include a README file that contains a description of your application.
// - Level of effort displayed in creativity, presentation, and user experience.


// - Iterate over a collection of elements to accomplish some task.