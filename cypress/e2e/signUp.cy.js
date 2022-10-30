describe('Sign Up Magento', () => {
  it('sukses daftar', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('[id="firstname"]').type("Elvanisa")
    cy.get('[id="lastname"]').type("Muhsina")
    cy.get('[id="email_address"]').type("elvanisamuhsina@gmail.com")
    cy.get('[id="password"]').type("admin123")
    cy.get('[id="password-confirmation"]').type("admin123")
  });
})