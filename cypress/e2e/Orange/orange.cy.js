describe('template spec', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('failed login', () => {
      cy.get('[name="username"]').type("Admin")
      cy.get('[type="password"]').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-alert-content').should('be.visible')
    })
    it('success login', () => {
      cy.get('[name="username"]').type('Admin')
      cy.get('[type="password"]').type('admin123')
      cy.get('.oxd-button').click()
      cy.url().should('include', '/dashboard/index')
    })
  })