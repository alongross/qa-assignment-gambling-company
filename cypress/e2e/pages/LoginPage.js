export class LoginPage {
    visit() {
      cy.visit('https://dev.crowncoinscasino.com/'); // Use baseUrl from Cypress config
    }
  
    login(email, password) {
      cy.fixture('selectors').then((selectors) => {
        const { loginButton, emailInput, passwordInput, submitButton } = selectors.login;
  
        cy.get(loginButton).should('be.visible').click();
        cy.get(emailInput).should('be.visible').type(email);
        cy.get(passwordInput).should('be.visible').type(password);
        cy.get(submitButton).should('be.visible').click();
      });
    }
  }
  