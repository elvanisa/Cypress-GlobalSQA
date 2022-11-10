describe('Customer Login', () => {
  it('Existing Customer Login', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get('[ng-click="customer()"]').click()
    cy.get('#userSelect').select('Harry Potter')
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text', 'Harry Potter')
    cy.get('[ng-class="btnClass1"]')
  })

  it('Check Transaction', () => {
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('.fixedTopBox > [style="float:left"]').click()
  })

  it('Deposit', () => {
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').type('100000')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain.text', 'Deposit Successful')
  })

  it('Withdraw', () => {
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type('100')
    cy.get('.form-control').type('1000')
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('contain.text', 'Transaction successful')
  })

  it('Logout', () => {
    cy.get('.logout').click()
    cy.get('label').should('contain.text','Your Name :')
  })
})