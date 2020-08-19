
var uniqueRandomArray = require ('unique-random-array')
var greatdirectorsNames = require('./greatdirectors-names.json')

module.exports = {
    all: greatdirectorsNames,
    random: uniqueRandomArray(greatdirectorsNames),
}
