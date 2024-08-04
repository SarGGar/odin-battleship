function domControl() {
    const reset = (playerName) => {
        const tds = document.querySelectorAll(`.${playerName} td`)
        for (let td of tds) {
            td.removeAttribute("style")
            td.innerHTML = ''
        }
    }

    const getCell = (playerName, cell) => {
        const rows = document.querySelectorAll(`.${playerName} tr`)
        const cellRow = rows.item(cell.r+1)
        const td = cellRow.children[cell.c+1]
        return td
    }

    const updateBoard = (playerName, nodes, type) => {
        switch (type) {
            case 'new-ship':
                for (let node of nodes) {
                    updateCellWithX(playerName, node)
                }
                break;
            case 'new-hit':
                for (let node of nodes) {
                    updateCellBackgroundColor(playerName, node, 'red')
                }
                break;
            case 'new-miss':
                for (let node of nodes) {
                    updateCellBackgroundColor(playerName, node, 'gray')
                }
                break;
            case 'new-sink':
                for (let node of nodes) {
                    updateCellBackgroundColor(playerName, node, 'black')
                }
                break;
        }

    }

    const updateCellBackgroundColor = (playerName, cell, color) => {
        const td = getCell(playerName, cell)
        td.style.background = color;
    }

    const updateCellWithX = (playerName, cell) => {
        const td = getCell(playerName, cell)
        td.innerHTML = '&#10060'

    }

    return {reset, updateBoard}
}

// function updateCellBackgroundColor(playerName, cell, color) {

// }

// function updateCellWithX(playerName, cell) {

// }

// function getCell(playerName, cell) {
//     const table = document.querySelector(`#${playerName}`)
//     const rows = table.children
//     const cellRow = rows[cell[0]]
//     const cell = cellRow.children[cell[1]]
//     return cell
// }

// function updateBoard(playerName, nodes, type) {
    // switch (type) {
    //     case 'new-ship':
    //         for (let node of nodes) {
    //             updateCellWithX(playerName, node)
    //         }
    //         break;
    //     case 'new-hit':
    //         for (let node of nodes) {
    //             updateCellBackgroundColor(playerName, node, 'red')
    //         }
    //         break;
    //     case 'new-miss':
    //         for (let node of nodes) {
    //             updateCellBackgroundColor(playerName, node, 'gray')
    //         }
    //         break;
    //     case 'new-sink':
    //         for (let node of nodes) {
    //             updateCellBackgroundColor(playerName, node, 'black')
    //         }
    //         break;
    // }
// }

module.exports = domControl