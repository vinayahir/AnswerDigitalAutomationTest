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
  "duration": 13424441800,
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
  "duration": 737823400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollThePageTwicePageShouldGoDown()"
});
formatter.result({
  "duration": 20108534300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.pageShouldGoToTheTop()"
});
formatter.result({
  "duration": 25208600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeTheTitle()"
});
formatter.result({
  "duration": 52743600,
  "status": "passed"
});
formatter.after({
  "duration": 721310000,
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
  "duration": 11046829200,
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
  "duration": 522699100,
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
  "duration": 114023300,
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
  "duration": 41263200,
  "status": "passed"
});
formatter.after({
  "duration": 797501100,
  "status": "passed"
});
formatter.before({
  "duration": 11055336900,
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
  "duration": 406252600,
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
  "duration": 107349600,
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
  "duration": 33294800,
  "status": "passed"
});
formatter.after({
  "duration": 713562000,
  "status": "passed"
});
formatter.before({
  "duration": 11083758200,
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
  "duration": 582287700,
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
  "duration": 139369600,
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
  "duration": 86336000,
  "status": "passed"
});
formatter.after({
  "duration": 731563100,
  "status": "passed"
});
formatter.before({
  "duration": 11134070200,
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
  "duration": 419355100,
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
  "duration": 97212400,
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
  "duration": 39369400,
  "status": "passed"
});
formatter.after({
  "duration": 724145500,
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
  "duration": 11021926500,
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
  "duration": 711858200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersCorrectUsernameAndWrongPassword()"
});
formatter.result({
  "duration": 725757100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotAbleToLoginAndUserShouldSeeTheInvalidLoginMessage()"
});
formatter.result({
  "duration": 53814600,
  "status": "passed"
});
formatter.after({
  "duration": 738115300,
  "status": "passed"
});
formatter.before({
  "duration": 11108096600,
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
  "duration": 535274700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersIncorrectUsernameAndCorrectPassword()"
});
formatter.result({
  "duration": 731743500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotAbleToLoginAndSeeTheInvalidUsernameMessage()"
});
formatter.result({
  "duration": 44434700,
  "status": "passed"
});
formatter.after({
  "duration": 716356500,
  "status": "passed"
});
formatter.before({
  "duration": 10932922600,
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
  "duration": 544176200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersCorrectUsernameAndCorrectPassword()"
});
formatter.result({
  "duration": 745746000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldAbleToLoginSuccessfullyAndLogOut()"
});
formatter.result({
  "duration": 442234400,
  "status": "passed"
});
formatter.after({
  "duration": 715462200,
  "status": "passed"
});
});