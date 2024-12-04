export class ProfilePage {
  navigateToProfile() {
    cy.fixture('selectors').then(({ profile }) => {
      cy.get(profile.menuButton, { timeout: 20000 })
        .click({force: true});
      cy.get(profile.myAccountButton)
        .contains(profile.containsAccountButton)
        .click();
    });
  }

  clickOnProfile() {
    cy.fixture('selectors').then(({ profile }) => {
      cy.get(profile.profileButton)
        .contains(profile.containsmyProfile)
        .click();
    });
  }

  editProfile(username, avatarIndex) {
    this.clickOnProfile();
    cy.fixture('selectors').then(({ profile }) => {
      cy.get(profile.editPen).eq(0).click();
      cy.get(profile.nicknameInput).clear().type(username);
      cy.get(`[data-testid="avatar-image-${avatarIndex}"]`).click();
      cy.contains(profile.applyButton).click();
    });
  }

  validateProfile(username) {
    this.navigateToProfile();
    this.clickOnProfile();
    cy.fixture('selectors').then(({ profile }) => {
      cy.get(profile.profileNickname).should('contain.text', username);
    });
  }
}
