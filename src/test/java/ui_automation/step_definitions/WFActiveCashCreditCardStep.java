package ui_automation.step_definitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import ui_automation.pages.WFHomePage;
import ui_automation.utilities.ConfigurationReader;
import ui_automation.utilities.Driver;

/**
 * Wells Fargo Active Cash Credit Card Step
 * @author elvinmustafa
 */

public class WFActiveCashCreditCardStep {
    WebDriver driver = Driver.getDriver();
    WFHomePage wfHomePage = new WFHomePage();
    Actions action = new Actions(driver);
    Wait wait = new WebDriverWait(driver, 10);


    @Given("User lands on WellsFargo.com")
    public void user_lands_on_WellsFargo_com() {
        driver.get(ConfigurationReader.getProperty
                ("ui-config.properties", "WellsFargo.url"));
    }
    @And("User clicks on {string} tab")
    public void userClicksOnTab(String tabName) {
        switch (tabName){
            case "Personal":{
                wfHomePage.personalTab.click();
                break;
            }
            default:
                Assert.fail(tabName + " was not defined!");
        }
    }
    @Then("User clicks on {string} on task bar")
    public void userClicksOnOnTaskBar(String taskBarName){
        switch (taskBarName){
            case "Find your credit card":{

                for (int i = 0; i < 5; i++) {
                    action.sendKeys(Keys.PAGE_DOWN).perform();
                }
                wait.until(ExpectedConditions.elementToBeClickable(wfHomePage.findYourCreditCard));
                wfHomePage.findYourCreditCard.click();
                break;
            }
            default:
                Assert.fail(taskBarName + " was not defined!");
        }
    }
    @And("User clicks on {string} card")
    public void userClicksOnCard(String cardType) {
        switch (cardType){
            case "Active Cash":{
                wfHomePage.activeCashCard.click();
                break;
            }
            default:
                Assert.fail(cardType + " was not defined!");
        }
    }

    @Then("user should be able to click {string} apply now button")
    public void userShouldBeAbleToClickApplyNowButton(String applyNowButton){
        switch (applyNowButton){
            case "Primary":{
                wfHomePage.primaryApplyNowButton.click();
                break;
            }
            case "Secondary":{
                for (int i = 0; i < 10; i++) {
                    action.sendKeys(Keys.PAGE_DOWN).perform();
                }
                wait.until(ExpectedConditions.elementToBeClickable(
                        wfHomePage.secondaryApplyNowButton));
                wfHomePage.secondaryApplyNowButton.click();
                break;
            }
            default:
                Assert.fail(applyNowButton + " was not defined!");
        }
    }

    @And("user should land {string} page")
    public void userShouldLandPage(String page) {
        switch (page){
            case "Application":{
                String expectedTitle = "Wells Fargo - Application";
                String actualTitle = driver.getTitle();
                Assert.assertEquals("Title is not matched", expectedTitle, actualTitle );
                break;
            }
            default:
                Assert.fail(page + " verification was not defined!");
        }
    }
}
