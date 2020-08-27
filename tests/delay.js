module.exports = {
  // TESTS FOR API WITH DELAY:
  'Request with 500ms delay': browser => {
    browser.url('http://localhost:3000/?delay=500').waitForElementVisible('body', 1000);
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 5000);
    browser.waitForElementNotVisible('#loader', 5000);
    // Error Overlay
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  },
  'Request with 1000ms delay': browser => {
    browser.url('http://localhost:3000/?delay=1000').waitForElementVisible('body', 1000);
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 5000);
    browser.waitForElementNotVisible('#loader', 5000);
    // Error Overlay
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  },
  'Request with 5000ms delay': browser => {
    browser.url('http://localhost:3000/?delay=5000').waitForElementVisible('body', 1000);
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 10000);
    browser.waitForElementNotVisible('#loader', 10000);
    // Error Overlay
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  },
  'Request with 10000ms delay': browser => {
    browser.url('http://localhost:3000/?delay=10000').waitForElementVisible('body', 1000);
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 20000);
    browser.waitForElementNotVisible('#loader', 20000);
    // Error Overlay
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  },
  'Request with 50000ms delay': browser => {
    browser.url('http://localhost:3000/?delay=10000').waitForElementVisible('body', 1000);
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 100000);
    browser.waitForElementNotVisible('#loader', 100000);
    // Error Overlay
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  }
};