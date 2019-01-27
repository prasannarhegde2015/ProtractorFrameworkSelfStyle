

module.exports = {


    sendtext:  function(el,text) {
        var until = protractor.ExpectedConditions;
		browser.wait(until.elementToBeClickable(el), 10000, 'Element taking too long to appear in the DOM');
		el.clear();
		el.sendKeys(text);
	},
	
	waitclick:  function (el) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.elementToBeClickable(el), 9000, 'Element taking too long to appear in the DOM');
		el.click();
	},


	findbyxpath: function (data) {
		var el = element(by.xpath(data));
		return el;
	},

	switchtoframe: function(data)
	{
		{
			browser.driver.wait(function() {
				return browser.driver.findElement(by.xpath(data))
						  .then(function(elem) {
							browser.driver.switchTo().frame(elem);
							return true;
						  });
			  }, 60000);	
		}
	},
  
	switchtodefault: function()
	{
		{
			browser.driver.switchTo().defaultContent();
		}
	},

	waitforobject: function(el) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(el), 10000, 'Element taking too long to appear in the DOM');
	},

	 getinputtext: function(el, errortext) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.elementToBeClickable(el), 9000, errortext);
		var text = el.getAttribute('value');
		return text;
	},
	
	 getspantext: function(el, errortext) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.elementToBeClickable(el), 5000, errortext);
		var text = el.getText();
		return text;
	},
	
};