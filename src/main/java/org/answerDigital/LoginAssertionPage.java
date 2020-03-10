package org.answerDigital;

import org.openqa.selenium.By;
import org.testng.Assert;

public class LoginAssertionPage extends Utils
{
    private By _invalidPasswordMessage = By.xpath("//div[@id='flash']");
    private By _invalidUsernameMessage = By.xpath("//div[@id='flash']");

    public void assertPageOnCorrectUserNameWrongPassword()
    {
        //we expect this message after using invalid credential
        String resultOnWrongPassword="Your password is invalid!";
        //obtain invalid password message
        String invalidMessage=getTextReturn(_invalidPasswordMessage);
        //remove '×' from the invalid message
        String invalidMessage1=String.valueOf(invalidMessage.replace("×",""));
        //this method will remove the trailing space
        String actualResult=(invalidMessage1.trim());
        //compare the expected invalid result message with actual result
        Assert.assertEquals(resultOnWrongPassword,actualResult);
    }

    public void assertPageOnIncorrectUserNameAndCorrectPassword()
    {
        //we expect this message after using wrong password for login
        String expectedResult="Your username is invalid!";
        //obtain invalid username message
        String invalidMessage=getTextReturn(_invalidUsernameMessage);
        //remove × from the invalid p.message
        String invalidMessage1=String.valueOf(invalidMessage.replace("×",""));
        //this method will remove the trailing space
        String actualResult=(invalidMessage1.trim());
        System.out.println(actualResult);
        //compare the expected invalid result message with actual result
        Assert.assertEquals(expectedResult,actualResult);
    }

    public void assertPageOnCorrectUserNameAndCorrectPassword()
    {
        assertURL("http://the-internet.herokuapp.com/secure");
    }




}
