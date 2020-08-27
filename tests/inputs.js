module.exports = {
  'Sale Value Input wrong values': browser => {
    browser.url('http://localhost:3000/');
    browser.waitForElementVisible('body', 1000);
    
    // Testing string value:
    browser.setValue('input[name="form-sale-value"]', 'teste');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('p.warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('p.warning-sale-value').text.to.equal('Mínimo de R$0,00.');
    browser.setValue('input[name="form-sale-value"]', '0');

    // Testing empty value:
    browser.setValue('input[name="form-sale-value"]', '');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('p.warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('p.warning-sale-value').text.to.equal('Mínimo de R$0,00.');
    browser.setValue('input[name="form-sale-value"]', '0');

    // Testing corrct value:
    browser.setValue('input[name="form-sale-value"]', '1000');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('p.warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('p.warning-sale-value').to.not.be.present;

    // Ending test
    browser.end();
  }
  'Inputs correct values': browser => {
    browser.url('http://localhost:3000/');
    browser.waitForElementVisible('body', 1000);
    
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader');
    browser.waitForElementNotVisible('#loader');
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  }
};