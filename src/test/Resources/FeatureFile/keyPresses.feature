@keyPresses
Feature: key Presses
  Scenario Outline: click on any key and assert the displayed after each key press
    Given user is on home page and click 'Key Presses'
    When user enters "<key>" on Keyboard
    Then  user should see "<textDisplayed>" on the Web-page

    Examples:
      | key |     textDisplayed             |
      |   X |          You entered: X       |
      |   Y |          You entered: Y       |
      |   R |          You entered: R       |
      |   V |          You entered: V       |
