var PageObject = require(protractor.basePath + '\\PageObjects\\PageObject.json');
var TestData = require(protractor.basePath + '\\TestData\\TestData.json');
var PctrObj = require(protractor.basePath + '\\ProtractorCore\\object.js');


describe('Angular Test', function () {
  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

  });

  it('Service Now Test', function () {
    // Test Steps are as below:
    var txt1 = "";
    function storevariable(val) {
      txt1 = val;
    }
    browser.ignoreSynchronization = true
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    // Navigate to ... Server:
    browser.get('https://dev46183.service-now.com');
    expect(browser.getTitle()).toEqual('ServiceNow');
    PctrObj.switchtoframe(PageObject.LoginPage.frmMain);
    PctrObj.sendtext(PctrObj.findbyxpath(PageObject.LoginPage.txtUserName), TestData.LoginData.username);
    PctrObj.sendtext(PctrObj.findbyxpath(PageObject.LoginPage.txtPassword), TestData.LoginData.password);
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.LoginPage.btnLogin));
    PctrObj.switchtodefault();
    PctrObj.switchtoframe(PageObject.LoginPage.frmMain);
    PctrObj.waitforobject(PctrObj.findbyxpath(PageObject.HomePage.lnkUserInterface));
    PctrObj.switchtodefault();
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.lnkIncidents));
    PctrObj.switchtoframe(PageObject.LoginPage.frmMain);
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btnNew));
    var elem = PctrObj.findbyxpath(PageObject.HomePage.txtIncNum);
    var txt = PageObject.HomePage.btnDynamicLinktext;
    txt1 = elem.getAttribute('value').then(function (text) {
      console.log("Incident number is: " + text);
      txt = txt.replace('$$$', text);
      return txt;
    }
    );
    PctrObj.sendtext(PctrObj.findbyxpath(PageObject.HomePage.txtShortDescription), TestData.IncData.inctitle);
    PctrObj.sendtext(PctrObj.findbyxpath(PageObject.HomePage.txtLongDescription), TestData.IncData.incdesc);
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btnSubmit));
    //Doing RunTime Object Substitution;
    PctrObj.waitclick(PctrObj.findbyxpath(txt1));
    PctrObj.waitforobject(PctrObj.findbyxpath(PageObject.HomePage.ddIncState));
    PctrObj.selelctoption(TestData.IncData.incstate);
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btnupdate));
    PctrObj.waitclick(PctrObj.findbyxpath(txt1));
    PctrObj.writeScreenShot('incnum.png',protractor.basePath + '\\Screenshots\\');
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btndelete));
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btndeleteConfirmOK));
    PctrObj.switchtodefault();
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.spnsysadmin));
    PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.lnklogout));
    

  });

});

