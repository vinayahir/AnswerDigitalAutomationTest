package org.answerDigital;

import org.openqa.selenium.By;
import org.testng.Assert;

public class Utils extends BasePage
{
    //it will click on elements
    public static void clickOnElement(By by)
    {
        driver.findElement(by).click();
    }

    //Clear Text form inout box/area
    public static void clearInputText(By by)
    {
        driver.findElement(by).clear();
    }

    // to enter text of element
    public static void sendText (By by, String text)
    {
        driver.findElement(by).sendKeys(text);
    }

    //to get the text for expected and actual result
    public static String getTextReturn(By by)
    {
        return driver.findElement(by).getText();
    }

    //get the url
    public static void getUrl(String key)
    {
        LoadProps loadProps = new LoadProps();
        driver.get(loadProps.getProperty(key));
    }
    //assert URL
    public void assertURL(String text)
    {
        Assert.assertTrue(driver.getCurrentUrl().contains(text));
    }
}