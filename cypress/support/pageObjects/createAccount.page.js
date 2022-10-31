before(function(){
    cy.fixture('createAccount').then(function(data){
      this.data=data
    })
  })

class CreateAccount {
    firstName = '#firstname'
    lastName = '#lastname'
    

    inputFirstName(){
        cy.get(this.firstName)
        .type(this.data.firstName)
    }

    inputlastName(){
        cy.get(this.lastName)
        .type(this.data.lastName)
    }


}
export default CreateAccount