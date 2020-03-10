package org.answerDigital;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs extends Utils
{
    HomePage homePage = new HomePage();
    LoginPage loginPage = new LoginPage();
    LoginAssertionPage loginAssertionPage = new LoginAssertionPage();
    InfiniteScrollPage infiniteScrollPage = new InfiniteScrollPage();
    InfiniteScrollAssertionPage infiniteScrollAssertionPage = new InfiniteScrollAssertionPage();
    KeyPressesPage keyPressesPage = new KeyPressesPage();
    KeyPressAssertionPage keyPressAssertionPage = new KeyPressAssertionPage();

    @Given("^user is on home page$")
    public void userIsOnHomePage()
    {
        homePage.clickOnFormAuthentication();
    }

    @When("^user enters correct username and wrong password$")
    public void userEntersCorrectUsernameAndWrongPassword()
    {
        loginPage.enterCorrectUserName();
        loginPage.enterWrongPassword();
        loginPage.clickOnLoginButton();
    }
    @Then("^user should not able to login and user should see the invalid password message$")
    public void userShouldNotAbleToLoginAndUserShouldSeeTheInvalidLoginMessage()
    {
        loginAssertionPage.assertPageOnCorrectUserNameWrongPassword();
    }

    @When("^user enters incorrect username and correct password$")
    public void userEntersIncorrectUsernameAndCorrectPassword()
    {
        loginPage.enterIncorrectUsername();
        loginPage.enterCorrectPassword();
        loginPage.clickOnLoginButton();
    }

    @Then("^user should not able to login and see the invalid username message$")
    public void userShouldNotAbleToLoginAndSeeTheInvalidUsernameMessage()
    {
        loginAssertionPage.assertPageOnIncorrectUserNameAndCorrectPassword();
    }

    @When("^user enters correct username and correct password$")
    public void userEntersCorrectUsernameAndCorrectPassword()
    {
        loginPage.enterCorrectUserName();
        loginPage.enterCorrectPassword();
        loginPage.clickOnLoginButton();
    }

    @Then("^user should able to login successfully and log out$")
    public void userShouldAbleToLoginSuccessfullyAndLogOut()
    {
        loginAssertionPage.assertPageOnCorrectUserNameAndCorrectPassword();
        loginPage.logoutAccount();
    }
    @Given("^user is on home page and click on 'Infinite Scroll'$")
    public void userIsOnHomePageAndClickOnInfiniteScroll()
    {
        homePage.clickOnInfiniteScroll();
    }
    @When("^user scroll the page twice, page should go down$")
    public void userScrollThePageTwicePageShouldGoDown() throws InterruptedException
    {
        infiniteScrollPage.infiniteScrollPageDown();
    }

    @And("^page should go to the top$")
    public void pageShouldGoToTheTop()
    {
        infiniteScrollPage.scrollPageToTheTop();
    }

    @Then("^user should see the title$")
    public void userShouldSeeTheTitle()
    {
        infiniteScrollAssertionPage.assertionThePageTitle();
    }

    @Given("^user is on home page and click 'Key Presses'$")
    public void userIsOnHomePageAndClickKeyPresses()
    {
        homePage.clickOnKeyPresses();
    }

    @When("^user enters \"([^\"]*)\" on Keyboard$")
    public void userEntersOnKeyboard(String key)
    {
        keyPressesPage.clickAnyKeyOnKeyboard(key);
    }

    @Then("^user should see \"([^\"]*)\" on the Web-page$")
    public void userShouldSeeOnTheWebPage(String textDisplayed)
    {
        keyPressAssertionPage.keyPressAssert(textDisplayed);
    }
}
