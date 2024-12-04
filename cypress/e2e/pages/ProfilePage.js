
export class ProfilePage {
    navigateToProfile() {
      cy.fixture('selectors').then((selectors) => {
        const { menuButton, myAccountButton,containsAccountButton } = selectors.profile;
        cy.get(menuButton, { timeout: 10000 }).click({ force: true });
        cy.get(myAccountButton)
        .contains(containsAccountButton)
        .click();
          });
        }
  clickOnProfile()
  {
    cy.fixture('selectors').then((selectors) => {
      const { profileButton, containsmyProfile } = selectors.profile;
    cy.get(profileButton)
    .contains(containsmyProfile)
    .click();
  });
  }
    editProfile(username, avatarIndex) {
        this.clickOnProfile()
        cy.fixture('selectors').then((selectors) => {
          const { editPen, nicknameInput,applyButton } = selectors.profile;
        cy.get(editPen).eq(0).click(); // Click the first matched element
        cy.get(nicknameInput)
        .clear().type(username);
        cy.get(`[data-testid="avatar-image-${avatarIndex}"]`).click();
      cy.contains(applyButton).click();
    });
    }
  
    validateProfile(username) {
        this.navigateToProfile()
        this.clickOnProfile()
        cy.fixture('selectors').then((selectors) => {
          const { profileNickname } = selectors.profile;
      cy.get(profileNickname).should('contain.text', username);
    });
    }
  }
  