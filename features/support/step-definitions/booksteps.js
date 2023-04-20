const { Given, When, Then } = require('@cucumber/cucumber')
const {expect, assert} = require('chai')
let books = []
let results= 0

Given('I have the following books in the store', (table) => {
    console.log(table.raw())
    console.log(table.rows())
    console.log(table.hashes())
})
When('I filter books by author {}', (name) => {
    results = books.filter(book => book.author == author)
})

Then('I find {int} books', (count) => {
    expect(results.length).to.equal(count)
    console.log(results)
})