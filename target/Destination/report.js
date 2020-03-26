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
  "duration": 13755521000,
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
  "duration": 693489000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userScrollThePageTwicePageShouldGoDown()"
});
