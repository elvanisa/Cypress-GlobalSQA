/// <reference types="cypress" />
//import CreateAccount from '../support/pageObjects/createAccount.page';

describe('Create Account', () => {

  before(function(){
    cy.fixture('createAccount').then(function(data){
      this.data=data
    })
  })

    it('gagal daftar', function() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
      cy.get('#firstname').type(this.data.firstName)
      cy.get('#lastname').type(this.data.lastName)
      cy.get('#is_subscribed').click()
      cy.get('#email_address').type(this.data.email)
      cy.get('#password').type(this.data.password)
      cy.get('#password-confirmation').type(this.data.password)
      cy.get('#password-strength-meter').should('be.visible')
      //cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    });
  

  
})