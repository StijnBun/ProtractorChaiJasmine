var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
browser.waitForAngularEnabled(false);
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Chai Jasmin Demonstratie', function() {
  it('Find the road to ENLIGHTENMENT', function(done) {
    browser.get('http://www.csszengarden.com/');
    var gottenelement = element(by.xpath('//*[@id="zen-preamble"]/h3'))
    expect(gottenelement.getText()).to.eventually.equal('THE ROAD TO ENLIGHTENMENT').and.notify(done);

  });
});
