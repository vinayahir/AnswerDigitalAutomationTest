package org.answerDigital;

import org.openqa.selenium.By;

public class KeyPressesPage extends Utils
{
    private By _keyPress = By.xpath("//input[@id='target']");

    public void clickAnyKeyOnKeyboard(String key)
    {
        sendText(_keyPress,key);
    }
}
