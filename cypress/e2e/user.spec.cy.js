import userData from '../fixtures/userData.json'


describe('orange HRM Tests', () => {


  const selectorsList = {
    usernameField: "[name='username']",
    passWordFiled: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredential: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "name-test",
    lastNameField: "last-name-test",
    genericField: ".oxd-input",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']", 
    




    }



    it.only('User Info Update', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userSucess.username)
      cy.get(selectorsList.passWordFiled).type(userData.userSucess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
      cy.get(selectorsList.myInfoButton).click()  
      cy.get('.orangehrm-firstname').clear().type(selectorsList.fistNameField)
      cy.get('.orangehrm-middlename').clear()
      cy.get('.orangehrm-lastname').clear().type(selectorsList.lastNameField)
      cy.get(selectorsList.genericField).eq(4).clear().type('emp-id-tes')  
      cy.get(selectorsList.genericField).eq(5).clear().type('R$100.000.000')  
      cy.get(selectorsList.genericField).eq(6).clear().type('$20.000.000')  
      cy.get(selectorsList.genericField).eq(7).clear().type('2026-10-10')  
      cy.get(selectorsList.dateCloseButton).click()
      cy.get(selectorsList.submitButton).eq(0).click()
      cy.get('body').should('contain', 'Successfully Update')
      cy.get('.oxd-toast-close')


      













          
    })


  
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


