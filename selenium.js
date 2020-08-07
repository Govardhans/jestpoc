const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

async function getDriver(){
    var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    var cap = webdriver.Capabilities.chrome();
    
    var options = {
        args: [ "--headless",
             "--disable-gpu",
             "--window-size=800,600" ]
    };
    cap.set('chromeOptions', options); 
    
    var driver = new webdriver.Builder()
                .withCapabilities(cap)
                .build();
    await driver.get("https://www.google.com");
    var title =  await   driver.getTitle();
    console.log(title);
    (await driver).quit(); 
}

getDriver();

module.exports = getDriver;
