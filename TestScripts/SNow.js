var PageObject = require(protractor.basePath+'\\PageObjects\\PageObject.json');
var TestData = require(protractor.basePath+'\\TestData\\TestData.json');
var PctrObj = require(protractor.basePath+'\\ProtractorCore\\object.js');


describe('Angular Test', function() {
    beforeEach(function () {
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
 
    it('Service Now Test', function() {
        // Test Steps are as below:
        var inctxt="";
        var txt1 = "";
         browser.waitForAngularEnabled(false);
         browser.driver.manage().window().maximize();
         // Navigate to ... Server:
         browser.get('https://dev46183.service-now.com');
         expect(browser.getTitle()).toEqual('ServiceNow');
         PctrObj.switchtoframe(PageObject.LoginPage.frmMain); 
         PctrObj.sendtext(PctrObj.findbyxpath(PageObject.LoginPage.txtUserName),TestData.LoginData.username);
         PctrObj.sendtext(PctrObj.findbyxpath(PageObject.LoginPage.txtPassword),TestData.LoginData.password);
         PctrObj.waitclick(PctrObj.findbyxpath(PageObject.LoginPage.btnLogin));
         PctrObj.switchtodefault();
         PctrObj.switchtoframe(PageObject.LoginPage.frmMain);
         PctrObj.waitforobject(PctrObj.findbyxpath(PageObject.HomePage.lnkUserInterface));
         PctrObj.switchtodefault();
         PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.lnkIncidents));
         PctrObj.switchtoframe(PageObject.LoginPage.frmMain);
         PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btnNew));
         var incnumdata = PctrObj.getinputtext(PctrObj.findbyxpath(PageObject.HomePage.txtIncNum));
         var txt = PageObject.HomePage.btnDynamicLinktext;
         incnumdata.then(function(text)
         {
            console.log("Incident number is: "+text);
            inctxt = text;
            txt1=txt.replace('$$$',inctxt);
         }
         );
         PctrObj.sendtext(PctrObj.findbyxpath(PageObject.HomePage.txtShortDescription),TestData.IncData.inctitle);
         PctrObj.sendtext(PctrObj.findbyxpath(PageObject.HomePage.txtLongDescription),TestData.IncData.incdesc);
         PctrObj.waitclick(PctrObj.findbyxpath(PageObject.HomePage.btnSubmit)); 
         //Doing RunTime Object Substitution;
         PctrObj.waitclick(PctrObj.findbyxpath(txt1));


    });

  });