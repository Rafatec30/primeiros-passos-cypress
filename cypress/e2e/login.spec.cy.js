import userData from "../fixtures/jinhu.json"


describe('Orange HRM Tests', () => {

  const selectorslist = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.loginSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.loginSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
  })
   it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.loginFail.username)
    cy.get(selectorslist.passwordField).type(userData.loginFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
  })
})