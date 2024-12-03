
export class ProfilePage {
    navigateToProfile() {
        cy.get('[data-testid="menuButton"]', { timeout: 10000 }).click({ force: true });
        cy.get('[class="side-menu__action"]')
        .contains('My Account')
        .click();
            }
  clickOnProfile()
  {
    cy.get('[class="button__content"]')
    .contains('MY PROFILE')
    .click();
  }
    editProfile(username, avatarIndex) {
        this.clickOnProfile()
        cy.get('svg._pen_a31cg_31').eq(0).click(); // Click the first matched element
        cy.get('[data-testid="nicknameInput"]')
        .clear().type(username);
        cy.get(`[data-testid="avatar-image-${avatarIndex}"]`).click();
      cy.contains('Apply').click();
    }
  
    validateProfile(username) {
        this.navigateToProfile()
        this.clickOnProfile()
      cy.get('[data-testid="my-profile-nickname"]').should('contain.text', username);
    }
  }
  