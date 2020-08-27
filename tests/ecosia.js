module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser.url('http://localhost:3000/');
    browser.timeoutsImplicitWait(100);
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.timeoutsImplicitWait(100);
    browser.setValue('input[name="form-installments"]', '2');
    browser.timeoutsImplicitWait(100);
    browser.setValue('input[name="form-mdr"]', '10');
    browser.timeoutsImplicitWait(1000);
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    browser.assert.containsText('.mainline-results', 'Nightwatch.js')
    browser.end();
  }
};