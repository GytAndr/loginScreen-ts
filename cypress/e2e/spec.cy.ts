export { } // to not upset webpack and ts
const goodEmail = 'frontend@isawesome.com'
const goodPassword = "cool"
//remove skip later
describe('Contains required texts and UI elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should contain Login title', () => {
    cy.contains('Login')
  })
  it('should contain login instructions', () => {
    cy.contains('Please enter you Login and your Password')
  })
  it('Login button is present', () => {
    cy.get('.login__btn').should('contain.text', 'Login')
  })
  it('User/Email input is present', () => {
    cy.get('.login__inputs-email')
  })
  it('Password input expected to have attribute type with the value password', () => {
    cy.get('.login__inputs-password').should('have.attr', 'type', 'password')
  })

})

describe('Input error works as expected', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('if input are empty should show error', () => {
    cy.get('.login__btn').click()
    cy.contains("Email cannot be blank")
  })
  it('if email format is wrong should show error', () => {
    cy.get('.login__inputs-email').type('test')
    cy.get('.login__btn').click()
    cy.contains("Please enter valid email format")
  })
  it('if good email but no pass entered, should show error', () => {
    cy.get('.login__inputs-email').type(goodEmail)
    cy.get('.login__btn').click()
    cy.contains("Password cannot be blank")
  })
  it('shoud show error if user Auth fails', () => {
    cy.get('.login__inputs-email').type(goodEmail)
    cy.get('.login__inputs-password').type("test")
    cy.get('.login__btn').click()
    cy.contains("Sorry, your email or password is incorrect. Please try again")
  })
  it('should login user if Auth is successfull', () => {
    cy.get('.login__inputs-email').type(goodEmail)
    cy.get('.login__inputs-password').type(goodPassword)
    cy.get('.login__btn').click()
    cy.contains("Sign up successful!")
  })
})
describe('prev login session token auth works as intended', () => {
  before(() => {
    localStorage.setItem("userName", goodEmail)
    localStorage.setItem("password", goodPassword)
    cy.visit('http://localhost:3000')
  })
  it('if user has login session token, redirect to loggedin page', () => {
    cy.contains("Sign up successful!")
  })
})