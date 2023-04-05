///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

// When(`I type a username`, () => {
//     cy.get('#text').type('webdriver');
// });

// When(`I type a password`, () => {
//     cy.get('#password').type('webdriver123');
// });

When(`I click on the login button`, () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
});

When(`I type a specific username {word}`, (username) => {
    cy.get('#text').type(username);
});

When(`I type a specific password {word}`, (password) => {
    cy.get('#password').type(password);
});

Then(`I should be presented with a alart box with the text {string}`, (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})