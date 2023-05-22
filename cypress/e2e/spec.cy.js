//const credentials = { Email_Address: 'junaid.amin@yopmail.com', Password: '12345678' }

describe('Authentication Module', () => {
  it('login Positive', () => {
    cy.visit('/' + 'login')
    cy.login(Cypress.env('Email_Address'), Cypress.env('Password'))
    cy.url().should('eq', Cypress.config('baseUrl'))
  })

  it('login Negative', () => {
    cy.visit('/' + 'login')
    cy.login(Cypress.env('Email_Address'), '05011997')
    cy.url().should('eq', Cypress.config('baseUrl') + 'login')
  })
})

describe.only('Update profile', () => {
  beforeEach(() => {
    cy.visit('/' + 'login')
    cy.login(Cypress.env('Email_Address'), Cypress.env('Password'))
  })

  it('Update Profile', () => {
    cy.get('.btn > .rounded-full').click()
    cy.get('input[type="file"]').selectFile('cypress/fixtures/img.png', { force: true })
    cy.get('div[class="container mx-auto my-32"]').should('contain', 'Profile Picture Changed Successfully')
    cy.get('#first_name').clear().type('Junaid')
    cy.get('#last_name').clear().type('Amin')
    cy.get('#phone_no').clear().type('+9234531568978')
    cy.get(':nth-child(1) > .my-4 > div.w-full > .border-2').selectFile('cypress/fixtures/res.docx')
    cy.get(':nth-child(2) > .my-4 > div.w-full > .border-2').selectFile('cypress/fixtures/res.docx')
    cy.get(':nth-child(5) > .flex > :nth-child(2) > .py-2').click()
    cy.get('#institute').clear().type('Ucp')
    cy.get('#degree_title').select("Bachelor's Degree")
    cy.get('#discipline').select('Anthropology')
    cy.get('#gpa').clear().type('2.69')
    cy.get('#document').selectFile('cypress/fixtures/res.docx')
    cy.contains('Submit').click()
    cy.get('div[class="container mx-auto my-32"]').should('contain', 'Education detail added successfully')
  })
})
