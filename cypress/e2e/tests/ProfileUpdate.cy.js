import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import { LobbyPage } from '../pages/LobbyPage';

describe('Profile Update Test', () => {
  const loginPage = new LoginPage();
  const profilePage = new ProfilePage();
  const lobbyPage = new LobbyPage();
  const randomUsername = Math.random().toString(36).substring(2, 10);

  before(() => {
    cy.fixture('userData').as('userData'); // Load user data fixture
    cy.fixture('selectors').as('selectors'); // Load selectors fixture
  });

  it('Should log in, update the profile, and validate changes', function () {
    const { email, password } = this.userData;

    cy.log('Starting test: Logging in');
    loginPage.visit();
    loginPage.login(email, password);

    cy.log('Navigating to profile');
    profilePage.navigateToProfile();

    cy.log('Editing profile');
    profilePage.editProfile(randomUsername, Math.floor(Math.random() * 5));

    cy.log('Validating profile update');
    profilePage.validateProfile(randomUsername);

    cy.log('Handling UI components and printing balances');
    lobbyPage.closeComponent();
    lobbyPage.printCoinBalances();
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`failed-${this.currentTest.title}`);
    }
  });
});
