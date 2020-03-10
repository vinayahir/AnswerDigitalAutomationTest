@infiniteScroll
Feature: infinite Scroll
  Scenario: scrolling the page down twice and scroll back to the top and assert the title
    Given user is on home page and click on 'Infinite Scroll'
    When user scroll the page twice, page should go down
    And page should go to the top
    Then user should see the title