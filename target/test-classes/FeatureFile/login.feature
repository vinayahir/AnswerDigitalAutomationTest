@login
Feature: login
  Scenario: to check login with correct username and wrong password
    Given user is on home page
    When user enters correct username and wrong password
    Then user should not able to login and user should see the invalid password message

    Scenario: to check login with incorrect username and wrong password
      Given user is on home page
      When user enters incorrect username and correct password
      Then user should not able to login and see the invalid username message

      Scenario: to check login with correct username and correct password
        Given user is on home page
        When user enters correct username and correct password
        Then user should able to login successfully and log out

