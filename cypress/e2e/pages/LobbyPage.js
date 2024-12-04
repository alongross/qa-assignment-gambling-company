export class LobbyPage {
  closeComponent() {
    cy.fixture('selectors').then(({ lobby }) => {
      cy.get('body').then((body) => {
        if (body.find(lobby.profileDialog).length) {
          cy.clickOutside(lobby.profileDialog);
        }
        if (body.find(lobby.accountWrapper).length) {
          cy.clickOutside(lobby.accountWrapper);
        }
      });
    });
  }

  printCoinBalances() {
    cy.fixture('selectors').then(({ lobby }) => {
      cy.get(lobby.gameSwitcher).click({ force: true });
    });
  }
}
