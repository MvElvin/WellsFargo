$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/applyNow.feature");
formatter.feature({
  "name": "Click To ApplyNow button",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Us_001"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lands on WellsFargo.com",
  "keyword": "Given "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.user_lands_on_WellsFargo_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Personal\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userClicksOnTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Find your credit card\" on task bar",
  "keyword": "Then "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userClicksOnOnTaskBar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Active Cash\" card",
  "keyword": "And "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userClicksOnCard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify first apply now button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Us_001"
    },
    {
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "name": "user should be able to click \"Primary\" apply now button",
  "keyword": "Then "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userShouldBeAbleToClickApplyNowButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land \"Application\" page",
  "keyword": "And "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userShouldLandPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User lands on WellsFargo.com",
  "keyword": "Given "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.user_lands_on_WellsFargo_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Personal\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userClicksOnTab(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Find your credit card\" on task bar",
  "keyword": "Then "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userClicksOnOnTaskBar(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Active Cash\" card",
  "keyword": "And "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userClicksOnCard(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//img[contains(@alt,\u0027Active Cash\u0027) and contains(@src, \u0027ActiveCash\u0027)]\"}\n  (Session info: chrome\u003d92.0.4515.131)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ELLEs-MBP\u0027, ip: \u00272603:7080:403:a5ca:0:7bfe:88f4:a58%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.131, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: /var/folders/1w/0t9by2wd5_d...}, goog:chromeOptions: {debuggerAddress: localhost:59546}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 358a4692721dfe5f23979bfaf243470a\n*** Element info: {Using\u003dxpath, value\u003d//img[contains(@alt,\u0027Active Cash\u0027) and contains(@src, \u0027ActiveCash\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat ui_automation.step_definitions.WFActiveCashCreditCardStep.userClicksOnCard(WFActiveCashCreditCardStep.java:62)\n\tat ✽.User clicks on \"Active Cash\" card(file:src/test/resources/uiFeatures/applyNow.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify first apply now button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Us_001"
    },
    {
      "name": "@Tc2"
    }
  ]
});
formatter.step({
  "name": "user should be able to click \"Secondary\" apply now button",
  "keyword": "Then "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userShouldBeAbleToClickApplyNowButton(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should land \"Application\" page",
  "keyword": "And "
});
formatter.match({
  "location": "WFActiveCashCreditCardStep.userShouldLandPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});