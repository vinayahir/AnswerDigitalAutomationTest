$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFile/InfiniteScroll.feature");
formatter.feature({
  "line": 2,
  "name": "infinite Scroll",
  "description": "",
  "id": "infinite-scroll",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@infiniteScroll"
    }
  ]
});
formatter.before({
  "duration": 63061791500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "scrolling the page down twice and scroll back to the top and assert the title",
  "description": "",
  "id": "infinite-scroll;scrolling-the-page-down-twice-and-scroll-back-to-the-top-and-assert-the-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on home page and click on \u0027Infinite Scroll\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user scroll the page twice, page should go down",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "page should go to the top",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should see the title",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePageAndClickOnInfiniteScroll()"
});
formatter.result({
  "duration": 885180300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollThePageTwicePageShouldGoDown()"
});
formatter.result({
  "duration": 20120655700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.pageShouldGoToTheTop()"
});
formatter.result({
  "duration": 27800300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeTheTitle()"
});
formatter.result({
  "duration": 50714800,
  "status": "passed"
});
formatter.after({
  "duration": 757920200,
  "status": "passed"
});
formatter.uri("src/test/Resources/FeatureFile/keyPresses.feature");
formatter.feature({
  "line": 2,
  "name": "key Presses",
  "description": "",
  "id": "key-presses",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@keyPresses"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "click on any key and assert the displayed after each key press",
  "description": "",
  "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on home page and click \u0027Key Presses\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003ckey\u003e\" on Keyboard",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should see \"\u003ctextDisplayed\u003e\" on the Web-page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;",
  "rows": [
    {
      "cells": [
        "key",
        "textDisplayed"
      ],
      "line": 9,
      "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;1"
    },
    {
      "cells": [
        "X",
        "You entered: X"
      ],
      "line": 10,
      "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;2"
    },
    {
      "cells": [
        "Y",
        "You entered: Y"
      ],
      "line": 11,
      "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;3"
    },
    {
      "cells": [
        "R",
        "You entered: R"
      ],
      "line": 12,
      "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;4"
    },
    {
      "cells": [
        "V",
        "You entered: V"
      ],
      "line": 13,
      "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11327994500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "click on any key and assert the displayed after each key press",
  "description": "",
  "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@keyPresses"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page and click \u0027Key Presses\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"X\" on Keyboard",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should see \"You entered: X\" on the Web-page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePageAndClickKeyPresses()"
});
formatter.result({
  "duration": 458235300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "X",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersOnKeyboard(String)"
});
formatter.result({
  "duration": 135605000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You entered: X",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSeeOnTheWebPage(String)"
});
formatter.result({
  "duration": 56577800,
  "status": "passed"
});
formatter.after({
  "duration": 704567400,
  "status": "passed"
});
formatter.before({
  "duration": 11559813500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "click on any key and assert the displayed after each key press",
  "description": "",
  "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@keyPresses"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page and click \u0027Key Presses\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Y\" on Keyboard",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should see \"You entered: Y\" on the Web-page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePageAndClickKeyPresses()"
});
formatter.result({
  "duration": 389021800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersOnKeyboard(String)"
});
formatter.result({
  "duration": 114663200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You entered: Y",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSeeOnTheWebPage(String)"
});
formatter.result({
  "duration": 42780000,
  "status": "passed"
});
formatter.after({
  "duration": 1000478700,
  "status": "passed"
});
formatter.before({
  "duration": 11660987700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "click on any key and assert the displayed after each key press",
  "description": "",
  "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@keyPresses"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page and click \u0027Key Presses\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"R\" on Keyboard",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should see \"You entered: R\" on the Web-page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePageAndClickKeyPresses()"
});
formatter.result({
  "duration": 388991200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersOnKeyboard(String)"
});
formatter.result({
  "duration": 112424900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You entered: R",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSeeOnTheWebPage(String)"
});
formatter.result({
  "duration": 35143700,
  "status": "passed"
});
formatter.after({
  "duration": 693508100,
  "status": "passed"
});
formatter.before({
  "duration": 11288562900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "click on any key and assert the displayed after each key press",
  "description": "",
  "id": "key-presses;click-on-any-key-and-assert-the-displayed-after-each-key-press;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@keyPresses"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on home page and click \u0027Key Presses\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"V\" on Keyboard",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should see \"You entered: V\" on the Web-page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePageAndClickKeyPresses()"
});
formatter.result({
  "duration": 408388000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "V",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userEntersOnKeyboard(String)"
});
formatter.result({
  "duration": 97263400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You entered: V",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldSeeOnTheWebPage(String)"
});
formatter.result({
  "duration": 39141700,
  "status": "passed"
});
formatter.after({
  "duration": 751991900,
  "status": "passed"
});
formatter.uri("src/test/Resources/FeatureFile/login.feature");
formatter.feature({
  "line": 2,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 13750548500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "to check login with correct username and wrong password",
  "description": "",
  "id": "login;to-check-login-with-correct-username-and-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters correct username and wrong password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should not able to login and user should see the invalid password message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 631338800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersCorrectUsernameAndWrongPassword()"
});
formatter.result({
  "duration": 804406500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotAbleToLoginAndUserShouldSeeTheInvalidLoginMessage()"
});
formatter.result({
  "duration": 47984600,
  "status": "passed"
});
formatter.after({
  "duration": 736515100,
  "status": "passed"
});
formatter.before({
  "duration": 11541100400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "to check login with incorrect username and wrong password",
  "description": "",
  "id": "login;to-check-login-with-incorrect-username-and-wrong-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user enters incorrect username and correct password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user should not able to login and see the invalid username message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 775977000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersIncorrectUsernameAndCorrectPassword()"
});
formatter.result({
  "duration": 997888500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotAbleToLoginAndSeeTheInvalidUsernameMessage()"
});
formatter.result({
  "duration": 54694300,
  "status": "passed"
});
formatter.after({
  "duration": 706600300,
  "status": "passed"
});
formatter.before({
  "duration": 11593776200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "to check login with correct username and correct password",
  "description": "",
  "id": "login;to-check-login-with-correct-username-and-correct-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user enters correct username and correct password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should able to login successfully and log out",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomePage()"
});
formatter.result({
  "duration": 744119600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersCorrectUsernameAndCorrectPassword()"
});
formatter.result({
  "duration": 834890800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToLoginSuccessfullyAndLogOut()"
});
formatter.result({
  "duration": 492712700,
  "status": "passed"
});
formatter.after({
  "duration": 754828500,
  "status": "passed"
});
});