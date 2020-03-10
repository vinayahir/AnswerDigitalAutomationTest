package org.answerDigital;

import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserSelector extends Utils
{
    LoadProps loadProps = new LoadProps();

    public void setUpBrowser()
    {
        //browser will be initiated from TestDataConfig
        String browser = loadProps.getProperty("browser");

        if(browser.equalsIgnoreCase(browser))
        {
            //source of drivers
            System.setProperty("webdriver.chrome.driver", "src/test/Resources/BrowserDrivers/chromedriver.exe");
            //driver object
            driver = new ChromeDriver();
        }
        else
        {
            System.out.println("Browser name is typed wrong or empty : " +browser);
        }

    }
}
