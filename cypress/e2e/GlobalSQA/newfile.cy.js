describe('Reqres dan Gorest API Testing', () => {

    function randomEmail(){
      const randomString = Math.random().toString(36).substring(2, 10)
      const email = randomString + "@gmail.com"
      return email
    }
  
    function randomName(){
      const randomString = Math.random().toString(36).substring(2, 10)
      const name = randomString
      return name
    }
  
    let emailAddress = randomEmail()
    let name = randomName()
    let bodyData = {
      "name": name,
      "email": emailAddress,
      "gender": "female",
      "status": "active"
  }
  
    it('get list user', () => {
      cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2'
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    })
  
    it('create user', () => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          "name": "elvanisa",
          "job": "Quality Assurance"
      }
      }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body).has.property("name", "elvanisa")
      })
    })
    
  })