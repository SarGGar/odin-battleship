const Ship = require('./ship')



test('ship has length', () => {
    expect(Ship(2).length).toBe(2)
})

test('ship has hits', () => {
    expect(Ship(2).getHits()).toBe(0)
})

test('ship has sunk status', () => {
    expect(Ship(2).isSunk()).toBeFalsy()
})

test('ship can receive a hit', () => {
    const ship = Ship(2)
    ship.hit()
    expect(ship.getHits()).toBe(1)
})

test('ship is known to be sunk', () => {
    const ship = Ship(2)
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
})