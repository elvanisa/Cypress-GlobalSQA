class CreateAccount {
    firstName = '#firstname'
    

    inputFirstName() {
        cy.get(this.firstName)
        type("Elvanisa")
    }


}
export default CreateAccount