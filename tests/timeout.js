module.exports = {
  // TESTS FOR API WITH TIMEOUT:
  'Request with timeout': browser => {
    browser.url('http://localhost:3000/?timeout').waitForElementVisible('body', 1000);
    // Fill inputs
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 5000);
    browser.waitForElementNotVisible('#loader', 5000);
    // Error Overlay
    browser.waitForElementVisible('#error-408', 5000);
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#error-408', 5000);
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('0.00');
    browser.expect.element('#response-value-2').text.to.equal('0.00');
    browser.expect.element('#response-value-3').text.to.equal('0.00');
    browser.expect.element('#response-value-4').text.to.equal('0.00');
    
    // Ending test
    browser.end();
  }
};