import './styles.css'
const Player = require('./player')
const DOMControl = require('./domcontrol')


const shipCoords = [
    [{r:0, c:0}, {r:0, c:1}],
    [{r:2, c:3}, {r:3, c:3}, {r:4, c:3}],
    [{r:5, c:2}, {r:6, c: 2}],
    [{r:4, c:7}, {r:5, c:7}, {r:6, c:7}, {r:7, c:7}],
    [{r:9, c:1}, {r:9, c:2}, {r:9, c:3}, {r:9, c:4}, {r:9, c:5}]
]

const player1 = Player()
const player2 = Player()

let currentTurn = 'real-player'

const control = DOMControl()

let shipCoordsForPlayer2 = player2.generateRandomBoard([2, 2, 3, 4, 5])
// console.log(shipCoordsForPlayer2)
// for (const ship of shipCoordsForPlayer2) {
//     control.updateBoard('computer-player', ship, 'new-ship')
// }

// for (const ship of shipCoords) {
//     player1.placeShip(ship)
//     control.updateBoard('real-player', ship, 'new-ship')
// }

const realPlayerBoard = document.querySelector('.real-player')
const computerPlayerBoard = document.querySelector('.computer-player')

computerPlayerBoard.addEventListener('click', (e) => {
    if (gameOver===true) return
    if (currentTurn !== 'real-player') return
    let col = e.target.cellIndex-1
    let row = e.target.parentElement.rowIndex-1
    if (col < 0 || row < 0) return
    let result = player2.receiveAttack(row, col)
    switch (result.action) {
        case 0:
            control.updateBoard('computer-player', [{r:row, c:col}], 'new-miss')
            break 
        case 1:
            control.updateBoard('computer-player', [{r:row, c:col}], 'new-hit')
            break
        case 2:
            control.updateBoard('computer-player', [{r:row, c:col}], 'new-hit')
            break
    }
    currentTurn = 'computer-player'
    banner.textContent = ''

    while (currentTurn === 'computer-player'){
        generateComputerMove()
    }
})

function generateComputerMove() {
    if (gameOver===true) return
    while (currentTurn === 'computer-player') {
        let row = Math.floor(Math.random() * 10)
        let col = Math.floor(Math.random() * 10)
        
        if (nextMoves.length !== 0) {
            row = nextMoves[0][0]
            col = nextMoves[0][1]
            nextMoves.shift()
        }

        if (col < 0 || row < 0) {
            if (shipIdentifiedMode) {
                iter++
            }
            return
        } 
        if (col > 9 || row > 9 ) {
            if (shipIdentifiedMode) {
                iter++
            }
            
            return
        }

        let missedShots = player1.getMissedShots()
        if (Object.keys(missedShots).length !== 0  && `${row}` in missedShots) {
            if (missedShots[`${row}`].includes(col)) {
                return
            }
        }

        let hitShots = player1.getHitShots()
        if (Object.keys(hitShots).length !== 0  && `${row}` in hitShots) {
            if (hitShots[`${row}`].includes(col)) {
                return
            }
        }

        let result = player1.receiveAttack(row, col)
        switch (result.action) {
            case 0:
                control.updateBoard('real-player', [{r:row, c:col}], 'new-miss')
                break 
            case 1:
                control.updateBoard('real-player', [{r:row, c:col}], 'new-hit')
                shipIdentifiedMode = true
                break
            case 2:
                control.updateBoard('real-player', [{r:row, c:col}], 'new-hit')
                shipIdentifiedMode = false
                iter = 0
                nextMoves = []
        }
        currentTurn = 'real-player'
        if (shipIdentifiedMode) {
            optimizeNextMoves(result.action, row, col)
        }
    }
    checkGameOver()
}

function optimizeNextMoves(lastMoveAction, lastMoveRow, lastMoveCol) {
    if (nextMoves.length === 0) {
        for (let dir of smartMoves) {
            nextMoves.push([dir[0]+lastMoveRow, dir[1]+lastMoveCol])
        }
        nextMoves.push([smartMoves[3][0]+lastMoveRow, smartMoves[3][1]+lastMoveCol])
    } else {
        if (lastMoveAction === 1) {
            nextMoves = []
            nextMoves.push([smartMoves[iter][0]+lastMoveRow, smartMoves[iter][1]+lastMoveCol])
            for (let i =0; i<4; i++) {
                nextMoves.push([-1*(i+1)*smartMoves[iter][0]+lastMoveRow, -1*(i+1)*smartMoves[iter][1]+lastMoveCol])
            }
        } else {
            iter++
        }
    }
}

const banner = document.querySelector('.banner')

function checkGameOver() {
    if (player1.getNumberUnsunk()===0) {
        gameOver = true
        banner.textContent = 'Computer is Winner!'
        showMissingShips()
    }

    if (player2.getNumberUnsunk()===0) {
        gameOver = true
        banner.textContent = 'You are Winner!'
    }
}

function showMissingShips () {
    console.log(shipCoordsForPlayer2)
    for (const ship of shipCoordsForPlayer2) {
        control.updateBoard('computer-player', ship, 'new-ship')    
    }

}

const resetButton = document.querySelector('.new-game')
resetButton.addEventListener('click', resetGame)

function resetGame() {
    banner.textContent = ''
    player1.reset()
    player2.reset()

    control.reset('real-player')
    control.reset('computer-player')

    shipCoordsForPlayer2 = player2.generateRandomBoard([2, 2, 3, 4, 5])
    userBuildBoard([2, 2, 3, 4, 5])
    // for (const ship of shipCoords) {
    //     player1.placeShip(ship)
    //     control.updateBoard('real-player', ship, 'new-ship')
    // }

    currentTurn = 'real-player'
    gameOver = false
}

let gameOver = false

let iter = 0

let nextMoves = []

let shipIdentifiedMode = false

const smartMoves = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
]

async function userBuildBoard(shipLengthArray) {
    realPlayerBoard.addEventListener('click', (e) => {

    })

    let allShips = []
    for (let length of shipLengthArray) {
        let ship = []
        for (let i=0; i<length;i++) {
            banner.textContent = `Select Cell ${i+1} of ${length} for this ship`
            let cell = await waitForUserSelection()
            //assume all valid for now
            ship.push(cell)
            control.updateBoard('real-player', ship, 'new-ship')
        }
        allShips.push(ship)
        player1.placeShip(ship)
        control.updateBoard('real-player', ship, 'new-ship')
    }
    banner.textContent = 'Game on! You have first move..'
}


function waitForUserSelection() {
    return new Promise((resolve) => {
        const eventListener = (e) => {
            let col = e.target.cellIndex-1
            let row = e.target.parentElement.rowIndex-1

            realPlayerBoard.removeEventListener('click', eventListener)

            resolve({r:row, c:col})

        }

        realPlayerBoard.addEventListener('click', eventListener)
    })
}

userBuildBoard([2, 2, 3, 4, 5])



// Computer make smart moves - DONE
// Announcement of winner - DONE
// show missing ships -DONE
// Computer randomly generate ships -DONE
// User can select placement of ships
