

Test Purpose

The purpose of this test is to validate the functionality of the profile update process in the application. The test ensures that users can successfully log in, update their profile information (nickname and avatar), and view the updated details in their profile section. It also verifies the correctness of the coin balances displayed in the lobby.


---

Preconditions

1. Test Environment: The test should be executed in the https://dev.crowncoinscasino.com/ environment.


2. Test Data:

A valid email and password for a user with access to the application.

Ensure that the user has coin balances (social coins and various currencies) to validate the balances.



3. Browser Configuration:

The test should be executed in incognito or private browsing mode.



4. Network Interception:

The test requires intercepting network requests to validate backend data.



5. Initial State:

The application should not have any active sessions for the test user.





---

Steps to Execute

1. Log In:

Navigate to the application login page.

Enter valid user credentials (email and password).

Verify that the user successfully logs in and is redirected to the lobby.



2. Navigate to Profile:

Open the profile section via the menu.

Verify that the profile details are displayed correctly.



3. Update Profile:

Change the user's nickname to a randomly generated value.

Select a new avatar from the available options.

Save the changes.

Verify that the changes are successfully saved and reflected in the profile section.



4. Validate Coin Balances:

Navigate to the lobby.

Verify the correctness of the displayed coin balances by intercepting the backend request.



5. Validate Network Request:

Intercept and validate the POST request to the analytics API.

Extract and validate the payload, ensuring social_cc and cumulative coins_rsc, coins_bsc, and coins_usc values are accurate.





---

Post-Conditions

1. Session Termination:

Ensure the user is logged out after the test to reset the application state.



2. Profile Reset (Optional):

If required, reset the profile nickname and avatar to default values for subsequent tests.



3. Network Cleanup:

Ensure that all intercepted requests are cleared.





---

Validation Criteria

1. Login Validation:

User successfully logs in and navigates to the lobby.

URL includes /lobby.



2. Profile Update Validation:

The nickname and avatar changes are successfully saved and reflected in the profile section.

UI reflects the updated nickname and avatar.



3. Coin Balance Validation:

The displayed coin balances match the values returned from the intercepted network request.



4. Network Request Validation:

The POST request payload contains accurate social_cc and coin balances (coins_usc, coins_rsc, coins_bsc).

Response status code is 200.



5. No Errors:

The test runs without any errors or unexpected behavior in the application.


