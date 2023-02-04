
// class selector
const GRID = document.querySelector('.grid')

// console.log(GRID)

// variables
var width = 5
var isMovingRight = true
var direction = 1

// create grids in html
for (let i=0; i < 27; i++) {
    const SQUARE = document.createElement('div')
    GRID.appendChild(SQUARE)
}

// creating array from all squares
const SQUARES = Array.from(document.querySelectorAll('.grid div'))

// console.log(SQUARES)

// character / player
var charIndex = 22

// draw() && erase() func
function draw() {
    SQUARES[charIndex].classList.add('char')
}
function erase() {
    SQUARES[charIndex].classList.remove('char')
}

draw() // function call to draw character

// animation func
function move(e) {
    //
    erase() // to remove so that we can redraw character
    //
    switch(e.key) {
        case 'ArrowLeft':
            if (charIndex % width !== 0) { charIndex -=1 }
            break
        case 'ArrowRight':
            if (charIndex % width < width-1) { charIndex +=1 }
            break
    }
    //
    draw() // to draw character
}

document.addEventListener('keydown', move)