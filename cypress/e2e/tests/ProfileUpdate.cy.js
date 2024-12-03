import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from '../pages/ProfilePage';
import { LobbyPage } from '../pages/LobbyPage';
describe('Profile Update Test', () => {
  const loginPage = new LoginPage();
  const profilePage = new ProfilePage();
  const lobbyPage = new LobbyPage();
  const randomUsername = Math.random().toString(36).substring(2, 10);

  before(() => {
    cy.fixture('userData').as('userData');
  });

  it('Should log in, update the profile, and validate changes', function () {
    const { email, password } = this.userData;

    loginPage.visit();
    loginPage.login(email, password);
    profilePage.navigateToProfile();
    profilePage.editProfile(randomUsername, Math.floor(Math.random() * 5));
    profilePage.validateProfile(randomUsername);
    lobbyPage.closeComponent();
    lobbyPage.printCoinBalances();
    lobbyPage.interceptRequest();
  });
});
