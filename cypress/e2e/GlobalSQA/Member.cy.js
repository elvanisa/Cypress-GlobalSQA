/// <reference types="cypress" />
//import CreateAccount from '../support/pageObjects/createAccount.page';

describe('Bank Manager Login', () => {

  before(function(){
    cy.fixture('createAccount').then(function(data){
      this.data=data
    })
  })

    it('Add Customer', function() {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get(':nth-child(3) > .btn').click()
      cy.get('[ng-class="btnClass1"]').click()
      cy.get(':nth-child(1) > .form-control').type(this.data.firstName)
      cy.get(':nth-child(2) > .form-control').type(this.data.lastName)
      cy.get(':nth-child(3) > .form-control').type(this.data.postalCode)
      cy.get('form.ng-dirty > .btn').click()
      cy.on('window:alert', (str) => {
        expect(str).to.contains(`Customer added successfully with customer id`)
      })
    });

    it('Open Account', function() {
      cy.get('[ng-class="btnClass2"]').click()
      cy.get('#userSelect').select('Hermoine Granger')
      cy.get('#currency').select('Dollar')
      cy.get('form.ng-dirty > button').click()
    });

    it('Delete Customer', function() {
      cy.get('[ng-class="btnClass3"]').click()
      cy.get('[ng-model="searchCustomer"]').type("Elvaa")
      cy.get('tr.ng-scope > :nth-child(1)').should('be.visible').should('have.text','Elvaaaaaa')
      cy.get(':nth-child(5) > button').click()
      cy.get('tr.ng-scope > :nth-child(1)').should('not.exist')
    });
})