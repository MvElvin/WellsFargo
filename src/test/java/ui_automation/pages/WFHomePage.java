package ui_automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import ui_automation.utilities.Driver;

/**
 * Elements and generic methods related to WellsFargo homePage
 * @author elvinmustafa
 */
public class WFHomePage {
    WebDriver driver;

    public WFHomePage(){
        driver= Driver.getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy(id="tabNavPersonal")
    public WebElement personalTab;

    @FindBy(xpath = "//*[@data-slot-id='WF_CON_HP_TOP_TASK_2']")
    public WebElement findYourCreditCard;

    @FindBy(xpath = "//img[contains(@alt,'Active Cash') and contains(@src, 'ActiveCash')]")
    public WebElement activeCashCard;

    @FindBy(css = ".bg-red.learn-more")
    public WebElement primaryApplyNowButton;

    @FindBy(css =".cta.ml-sm-2.ml-md-0")
    public WebElement secondaryApplyNowButton;



}
