//const credentials = { Email_Address: 'junaid.amin@yopmail.com', Password: '12345678' }

describe('Authentication Module', () => {
  it('login Positive', () => {
    cy.visit('/'+'login')
    cy.login(Cypress.env('Email_Address'), Cypress.env('Password'))
    cy.url().should('eq', Cypress.config('baseUrl'))
    // cy.contains('Jobs').trigger('mouseup').wait(2000)
    // cy.contains('My Jobs').click({ force: true })
  })
  it('login Negative', () => {
    cy.visit('/' + 'login')
    cy.login(Cypress.env('Email_Address'), '05011997')
    cy.url().should('eq', Cypress.config('baseUrl')+'login')
  })
})

describe.only('Authentication Module', () => {
  it('Update Profile', () => { 
    cy.visit('/' + 'login')
    cy.login(Cypress.env('Email_Address'), Cypress.env('Password'))
    cy.get('.btn > .rounded-full').click()
    if (cy.get('.cursor-pointer > .mt-2').as('element').should('exist')) {
      cy.get('@element').click().attachFile('cypress/fixtures/img.png')
    }

  })
})
