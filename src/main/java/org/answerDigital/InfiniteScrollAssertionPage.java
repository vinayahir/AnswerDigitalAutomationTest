package org.answerDigital;

import org.openqa.selenium.By;
import org.testng.Assert;

public class InfiniteScrollAssertionPage extends Utils
{
    private By _infiniteScrollTitle = By.xpath("//div[@class=\"example\"]/h3");

    public void assertionThePageTitle()
    {
        //page title
        String expectedResult="Infinite Scroll";
        //obtain the text from the page title
        String actualResult = driver.findElement(_infiniteScrollTitle).getText();
        //compare the result
        Assert.assertEquals(actualResult,expectedResult);
    }
}
