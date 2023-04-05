///<reference types="cypress" />
import { When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log('this runs at the begining of every scenario');
})