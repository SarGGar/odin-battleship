const Gameboard = require('./gameboard')


test('placing ship', () => {
    const game = Gameboard()
    game.placeShip([{r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}])
    expect(game.getNumberUnsunk()).toBe(1)
})

test('missed attack', () => {
    const game = Gameboard()
    game.receiveAttack(1, 1)
    expect(game.getMissedShots()['1']).toEqual([1])
})

test('successful attack', () => {
    const game = Gameboard()
    game.placeShip([{r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}])
    expect(game.receiveAttack(0, 1).slice(0, 3)).toBe("Hit")
})

test('all ships sunk', () => {
    const game = Gameboard()
    game.placeShip([{r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}])
    game.receiveAttack(0, 1)
    game.receiveAttack(0, 0)
    game.receiveAttack(0, 2)
    expect(game.getNumberUnsunk()).toBe(0)
})