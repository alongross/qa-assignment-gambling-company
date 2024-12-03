export class LobbyPage {
    closeComponent() {
      cy.fixture('selectors').then((selectors) => {
        const { profileDialog, accountWrapper } = selectors.lobby;
  
        cy.clickOutside(profileDialog);
        cy.clickOutside(accountWrapper);
      });
    }
  
    printCoinBalances() {
      cy.fixture('selectors').then((selectors) => {
        const { gameSwitcher } = selectors.lobby;
  
        cy.get(gameSwitcher).click({ force: true });
      });
    }
  
    interceptRequest() {
      cy.intercept('POST', 'https://analytics-api.crowncoinscasino.com/v1/t').as('analyticsPost');
      cy.wait('@analyticsPost').then((interception) => {
        let requestBody = interception.request.body;
        if (typeof requestBody === 'string') {
          requestBody = JSON.parse(requestBody);
        }
  
        const { properties } = requestBody;
        const yellowCoin = properties.social_cc || 0;
        const greenCoin = ['coins_usc', 'coins_rsc', 'coins_bsc']
          .map((key) => properties[key] || 0)
          .reduce((sum, value) => sum + value, 0);
  
        cy.log('Yellow Coin:', yellowCoin);
        cy.log('Green Coin:', greenCoin);
  
        expect(yellowCoin).to.be.a('number');
        expect(greenCoin).to.be.a('number');
      });
    }
  }
  