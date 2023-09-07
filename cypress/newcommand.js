Cypress.Commands.add(ketik, (locator, value) => {
    cy.get(locator)
    .clear()
    .type(value)
})