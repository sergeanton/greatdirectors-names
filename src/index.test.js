/* eslint-disable no-undef */

var expect = require('chai').expect;
var greatdirectorsNames = require('.');

describe('greatdirectors-names', function() {
    it('should have a list of all available names', function() {
        expect(isArrayOfStrings(greatdirectorsNames.all)).to.be.true
    });
    it('should allow me to get a random name from the list', function() {
        expect(greatdirectorsNames.random()).to.satisfy(isIncludedIn(greatdirectorsNames.all))
    })
})


function isArrayOfStrings(array) {
    return array.every(function(item) {
        return typeof item === 'string'
    })
}

function isIncludedIn(array) {
    return function(item) {
        return array.indexOf(item) !== -1;
    }
}