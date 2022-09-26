/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
export class PicklesPage {
    getButton() {
        return cy.xpath("//a[@class = 'already log_in blue_btn btn']")
    }
    visit() {
        cy.visit('/register.htm')
    }
}