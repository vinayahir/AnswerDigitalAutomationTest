package org.answerDigital;

import org.openqa.selenium.By;

public class HomePage extends Utils
{
    private By _formAuthentication = By.xpath("//a[contains(text(),'Form Authentication')]");
    private By _infiniteScroll = By.xpath("//a[contains(text(),'Infinite Scroll')]");
    private By _keyPresses = By.xpath("//a[contains(text(),'Key Presses')]");

    public void clickOnFormAuthentication()
    {
        clickOnElement(_formAuthentication);
    }
    public void clickOnInfiniteScroll()
    {
        clickOnElement(_infiniteScroll);
    }
    public void clickOnKeyPresses()
    {
        clickOnElement(_keyPresses);
    }
}