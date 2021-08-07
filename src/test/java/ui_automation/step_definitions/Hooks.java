package ui_automation.step_definitions;


import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import ui_automation.utilities.Driver;

import java.util.concurrent.TimeUnit;

/**
 * Hooks will run before and after each scenario, and if the scenario fails,
 * the screenshot will taken and embedded into output.
 * @author elvinmustafa
 */
public class Hooks {
    /**
     * setUp() will run before each scenario,
     * and will give 10 seconds for all elements to load,
     * as well as the size of window will get maximized for efficiency
     * @author elvinmustafa
     */
    @Before
    public void setUp(){
        Driver.getDriver().manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        Driver.getDriver().manage().window().maximize();
    }
    /**
     * tearDown() will run before each scenario,
     * @param scenario  is the scenario itself,
     * if scenario fails, the screenShot of the page will get and embedded into report
     * @author elvinmustafa
     */
    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
       Driver.closeDriver();
    }
}