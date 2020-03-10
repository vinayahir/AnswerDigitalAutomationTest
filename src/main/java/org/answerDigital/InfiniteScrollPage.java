package org.answerDigital;

import org.openqa.selenium.JavascriptExecutor;

public class InfiniteScrollPage extends Utils
{
    public void infiniteScrollPageDown() throws InterruptedException
    {
        //javascript method is being used for scrolling the page
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor)driver;
        //loop has been used to scroll the page
        for(int i=0;i<=2;i++)
        {
            //page will be scrolled t0 5000 pixels
            javascriptExecutor.executeScript("window.scrollBy(0,5000)");
            //thread.sleep has been used so scrolling action can be viewable
            Thread.sleep(5000);
            //page will be scrolled t0 5000 pixels
            javascriptExecutor.executeScript("window.scrollBy(0,5000)");
            //thread.sleep has been used so scrolling action can be viewable
            Thread.sleep(5000);
            i++;
        }
    }
    public void scrollPageToTheTop()
    {
        //javascript method is being used for scrolling the page
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor)driver;
        //scroll page to the top
        javascriptExecutor.executeScript("window.scrollTo(0,0)");
    }
}