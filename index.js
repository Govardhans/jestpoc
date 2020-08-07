const {Builder} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;



async function getDriver(){
    // const driver = new Builder().forBrowser('chrome').build();    
    var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    var driver = new webdriver.Builder()
                .withCapabilities(webdriver.Capabilities.chrome())
                .build();
    driver.get("https://www.google.com");
    await driver.getTitle().then(function(title) {
        console.log("The title is: " + title)
});
    // driver.findElement(by.name("q")).sendKeys("selenium", Key.RETURN);

    driver.quit();
}

module.exports = getDriver;