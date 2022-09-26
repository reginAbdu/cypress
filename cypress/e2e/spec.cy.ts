/// <reference types="cypress" />
/// <reference types = "cypress-xpath"/>
import {PicklesPage} from "../pages/PickesPage"

describe('example to-do app', () => {
    const picklesPage = new PicklesPage()
   
  
    it('displays two todo items by default', () => {
      // We use the `cy.get()` command to get all elements that match the selector.
      // Then, we use `should` to assert that there are two matched items,
      // which are the two default items.
      picklesPage.visit()
      picklesPage.getButton().should('have.text', 'Log In')
      picklesPage.getButton().click()
    })
})