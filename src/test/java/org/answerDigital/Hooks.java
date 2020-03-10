package org.answerDigital;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

public class Hooks extends Utils
{
    BrowserSelector browserSelector = new BrowserSelector();

    @Before   //take cucumber.api's dependency
    public void setUpBrowser()
    {
        browserSelector.setUpBrowser();
        //implicitly wait
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        //maximise the window
        driver.manage().window().maximize();
        //open the url, url will be taken from TestDataConfig.properties file
        getUrl("url");
    }

    @After
    public void closeBrowser()
    {
        driver.quit();
    }

}
