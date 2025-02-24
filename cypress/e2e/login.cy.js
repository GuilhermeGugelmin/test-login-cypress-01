import userData from '../fixtures/userData.json'


describe('orange HRM Tests', () => {


  const selectorsList = {
    usernameField: "[name='username']",
    passWordFiled: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredential: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid" 
    }
  
  
    it('login sucess3', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userSucess.username)
      cy.get(selectorsList.passWordFiled).type(userData.userSucess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
    
    })



  

  it('login sucess2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passWordFiled).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  
  })



  it('login sucess1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb").contains('Dashboard')

  })











  it('login fail3', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passWordFiled).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredential)

  })







  it('login fail2', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passWordFiled).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredential)

  })



  

  it('login fail1', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('test')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')

  })






})


