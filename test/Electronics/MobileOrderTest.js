/**
 * Created by snehaj on 8/6/2015.
 */
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var objMobilePage = require('../../page/MobilePage.js');
var objBrowser = require('../../ui_elements/Browser.js');


describe ('This a software test specification for for ordering a Mobile Page in PayTM Website', function() {

    beforeEach(function () {
        objBrowser.launchBrowser("https://paytm.com/");
    });

     it ('Smoke : Should have expected title for Home Page', function(done) {
        expect(objBrowser.getTitleBrowser()).to.eventually.equal('Online Mobile Recharge - Postpaid, DTH & Datacard Bill Payments at Paytm.com');
        done();
    });

    it ('Smoke : Should place a mobile order', function(done) {
        objMobilePage.clickOnMobileTab();
        browser.waitForAngular();

        objMobilePage.selectMobileSpecification();

        objMobilePage.clickOnItem();
        browser.waitForAngular();
        objMobilePage.clickOnBuy();

        /*Code for Switching the Frames
        browser.switchTo().frame(1);
        browser.sleep(5000);
        // Switch back to Default Content
        //browser.switchTo().defaultContent();
        */
        done();
    });

});
