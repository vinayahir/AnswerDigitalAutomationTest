package org.answerDigital;

import org.openqa.selenium.By;

public class LoginPage extends Utils
{
    LoadProps loadProps = new LoadProps();

     private By _userName = By.xpath("//input[@id='username']");
     private By _password = By.xpath("//input[@id='password']");
     private By _loginButton = By.xpath("//button[@class='radius']");
     private By _logoutButton = By.xpath("//i[@class=\"icon-2x icon-signout\"]");

     public void enterCorrectUserName()
     {
         sendText(_userName,loadProps.getProperty("correctUsername"));
     }
     public void enterCorrectPassword()
     {
         sendText(_password,loadProps.getProperty("correctPassword"));
     }
     public void enterIncorrectUsername()
     {
         sendText(_userName,loadProps.getProperty("wrongUsername"));
     }
     public void enterWrongPassword()
    {
        sendText(_password,loadProps.getProperty("wrongPassword"));
    }
     public void clickOnLoginButton()
     {
         clickOnElement(_loginButton);
     }
     public void logoutAccount()
     {
         clickOnElement(_logoutButton);
     }

}
