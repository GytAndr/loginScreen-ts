export { } // to not upset webpack and ts

//remove skip later
describe.skip('Contains required texts and UI elements', () => {
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