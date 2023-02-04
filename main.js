// console.log("Hello world")
// Class selector
const grid = document.querySelector('.grid')

// variables
let width = 5
let isMovingRight = true
let direction = 1

// creating grids
for (let i = 0; i < 28; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

// arrange the created grids in an array-> squares
const squares = Array.from(document.querySelectorAll('.grid div'))

// console.log(squares)

// player index-> start point
let charIndex = 0

// draw() && erase() func
function draw() {squares[charIndex].classList.add('char')}
function erase() {squares[charIndex].classList.remove('char')}

draw() // calling draw() to draw character

// animate func
function animate() {
    // init edge
    // const leftEdge = charIndex % width === 0
    // const rightEdge = charIndex % width === width - 1

    erase() // remove character

    // check and move
    if (isMovingRight && direction) charIndex += 1
    //
    if (charIndex === 25) reset()
    //
    console.log(charIndex)
    draw()
}

// setInterval(animate, 500)

function reset() {
    charIndex = 0
    direction = 1
    isMovingRight = true
}