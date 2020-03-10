package org.answerDigital;

import org.openqa.selenium.By;
import org.testng.Assert;

public class KeyPressAssertionPage extends Utils
{
    private By _keyPressResult = By.xpath("//p[@id='result']");

    public void keyPressAssert(String textDisplayed)
    {
        //get the result after key press
        String keyPress = getTextReturn(_keyPressResult);
        //assert the result, key press and text displayed are mentioned in scenario outline in feature file
        Assert.assertEquals(textDisplayed,keyPress);
    }
}