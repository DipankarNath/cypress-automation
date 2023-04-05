///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`I type a first name`, () => {
    cy.get('[name="first_name"]').type('joe');
});

When(`I type a last name`, () => {
    cy.get('[name="last_name"]').type('goldsburg');
})

When(`I enter an email address`, () => {
    cy.get('[name="email"]').type('joe.g@email.com');
})

When(`I type a comment`, () => {
    cy.get('textarea[name="message"]').type('this is a test comment');
})

When(`I click on the submit button`, () => {
    cy.get('[type="submit"]').click();
})

Then(`I should be presented with a successful contact us submission message`, () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!');
})

Then(`I should be presented with a unsuccessful contact us submission message`, () => {
    cy.get('body').contains('Error: Invalid email address');
})

When(`I type a specific first name {string}`, (firstName) => {
    cy.get('[name="first_name"]').type(firstName);
})

When(`I type a specific last name {string}`, (lastName) => {
    cy.get('[name="last_name"]').type(lastName);
})

When(`I type a specific email address {string}`, (emailAddress) => {
    cy.get('[name="email"]').type(emailAddress);
})

When(`I type a specific word {string} and a number {int} with in the comment input field`, (word, num) => {
    cy.get('textarea[name="message"]').type(`${word} ${num}`);
})

When(`I type a first name {word} and a last name {string}`, (firstName, lastName) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
})

When(`I type a specific email address {string} and a comment {string}`, (emailAddress, comment) => {
    cy.get('[name="email"]').type(emailAddress);
    cy.get('textarea[name="message"]').type(comment);
})

Then(`I should be presented with header text {string}`, (message) => {
    cy.xpath("//h1 | //body").contains(message);
})
