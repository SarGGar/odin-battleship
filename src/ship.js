function Ship (length) {
    let hits = 0

    const hit = () => hits++

    const getHits = () => hits

    const isSunk = () => (hits >= length) ? true: false

    return {length, hit, getHits, isSunk}
}

module.exports = Ship