/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

interface HomeScreenPageObjectReturn {
  closeContactForm: () => HomeScreenPageObjectReturn
  fillContactForm: (params: {
    email: string
    message: string
    name: string
  }) => HomeScreenPageObjectReturn
  openContactForm: () => HomeScreenPageObjectReturn
  submitContactForm: () => HomeScreenPageObjectReturn
}

export function HomeScreenPageObject(
  cy: Cypress.cy,
): HomeScreenPageObjectReturn {
  cy.visit('/')

  const homeScreenPageObject: HomeScreenPageObjectReturn = {
    closeContactForm() {
      cy.findByRole('button', { name: /fechar/i }).click()

      return homeScreenPageObject
    },

    fillContactForm({ email, message, name }) {
      cy.findByRole('textbox', { name: /seu nome/i }).type(name)
      cy.findByRole('textbox', { name: /seu email/i }).type(email)
      cy.findByRole('textbox', { name: /sua mensagem/i }).type(message)

      return homeScreenPageObject
    },

    openContactForm() {
      cy.findAllByRole('button', {
        name: /contato/i,
      }).then(($buttons) => {
        cy.wrap($buttons.first()).click()
      })

      return homeScreenPageObject
    },

    submitContactForm() {
      cy.findByRole('button', { name: /enviar/i }).click()

      return homeScreenPageObject
    },
  }

  return homeScreenPageObject
}
