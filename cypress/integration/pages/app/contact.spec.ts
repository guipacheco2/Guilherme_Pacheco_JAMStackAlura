import { HomeScreenPageObject } from '../../../../src/components/screens/HomeScreenPageObject'

describe('/pages/home/contactForm', () => {
  describe('when filled', () => {
    it('submit', () => {
      cy.intercept(
        'https://contact-form-api-jamstack.herokuapp.com/message',
      ).as('contactFormRequest')

      const homeScreenPageObject = HomeScreenPageObject(cy)

      const contactFormSentData = {
        email: 'guipacheco@gmail.com',
        message: 'Olá, isso é um teste!',
        name: 'Guilherme',
      }

      homeScreenPageObject
        .openContactForm()
        .fillContactForm(contactFormSentData)
        .submitContactForm()

      cy.findByText(/mensagem enviada com sucesso!/i).should('be.visible')

      cy.wait('@contactFormRequest').then((intercept) => {
        expect(intercept.response.body).to.deep.equal(contactFormSentData)
      })

      homeScreenPageObject.closeContactForm()
    })
  })
})
