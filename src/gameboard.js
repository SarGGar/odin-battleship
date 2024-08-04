const Ship = require('./ship')

function Gameboard () {
    let numberUnsunk = 0
    let occupiedCoords = {}
    let missedShots = {}
    let hitShots = {}

    const reset = () => {
        numberUnsunk = 0
        occupiedCoords = {}
        missedShots = {}
        hitShots = {}
    }

    const generateRandomBoard = (shipLengthArray) => {
        let allShips = []
        for (let len of shipLengthArray) {
            let ship = []
            let buildingShip = true
            while (buildingShip) {
                let row_i = Math.floor(Math.random() * 10)
                let col_i = Math.floor(Math.random() * 10)
                let multiplier = (col_i%2 ===0) ? 1 : -1
                let direction = (row_i%2 ===0) ? [0, 1]: [1, 0]
                ship = [{r:row_i, c:col_i}]
                for (let i=1; i< len; i++) {
                    let row_next = row_i+i*direction[0]*multiplier
                    let col_next = col_i+i*direction[1]*multiplier
                    ship.push({r:row_next, c:col_next})
                }
                let builds = []
                for (let coord of ship) {
                    if (occupiedCoords.hasOwnProperty(`(${coord.r},${coord.c})`) ||
                        coord.r< 0 || coord.c< 0 || coord.r>9 || coord.c> 9) {
                            builds.push(true)
                        }
                    else {
                        builds.push(false)
                    }
                }
                if (builds.every(v => v === false)) {
                    buildingShip = false
                }
            }
            placeShip(ship)
            allShips.push(ship)
        }
        return allShips
    }
    
    const getNumberUnsunk = () => numberUnsunk

    const getMissedShots = () => missedShots

    const getHitShots = () => hitShots

    const placeShip = (coordList) => {
        const newShip = Ship(coordList.length)
        for (const coord of coordList) {
            occupiedCoords[`(${coord.r},${coord.c})`] = newShip
        }
        numberUnsunk++
    }

    const receiveAttack = (row, col) => {
        let msg = ''
        let action = 0
        if (occupiedCoords[`(${row},${col})`]) {
            const attackedShip = occupiedCoords[`(${row},${col})`]
            attackedShip.hit()
            let status = attackedShip.isSunk()
            if (status) {
                msg = 'Hit & Sunk!'
                action = 2
                numberUnsunk--
            } else {
                msg = `Hit ship of length ${attackedShip.length}!`
                action = 1
            }
            if (hitShots[`${row}`]) {
                hitShots[`${row}`].push(col)
            } else {
                hitShots[`${row}`] = [col]
            }
        } else {
            if (missedShots[`${row}`]) {
                missedShots[`${row}`].push(col)
            } else {
                missedShots[`${row}`] = [col]
            }
            msg = 'Miss!'
            action = 0
        }
        return {msg, action}
    }
    
    return {generateRandomBoard, reset, getNumberUnsunk, getMissedShots, getHitShots, placeShip, receiveAttack}
}

module.exports = Gameboard