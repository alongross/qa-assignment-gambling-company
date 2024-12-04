export class LoginPage {
  visit() {
    cy.visit('/');
  }

  login(email, password) {
    cy.fixture('selectors').then(({ login }) => {
      cy.get(login.loginButton).should('be.visible').click();
      cy.get(login.emailInput).should('be.visible').type(email);
      cy.get(login.passwordInput).should('be.visible').type(password);
      cy.get(login.submitButton).should('be.visible').click();
    });
  }
}
