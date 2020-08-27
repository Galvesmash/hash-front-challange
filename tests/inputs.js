module.exports = {
  'Demo test ecosia.org': function (browser) {
    // site redirect
    browser.url('http://localhost:3000/');

    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', 'teste');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-sale-value"]', '-1000');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-sale-value"]', '0');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.timeoutsImplicitWait(1000);

    // Testing "Installments Input":
    browser.setValue('input[name="form-installments"]', 'teste');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-installments"]', '-1000');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-installments"]', '1000');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-installments"]', '1');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-installments"]', '12');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-installments"]', '2');
    browser.timeoutsImplicitWait(1000);

    // Testing "MDR Input":
    browser.setValue('input[name="form-mdr"]', 'teste');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-mdr"]', '-1000');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-mdr"]', '1000');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-mdr"]', '0');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-mdr"]', '100');
    browser.timeoutsImplicitWait(1000);
    browser.setValue('input[name="form-mdr"]', '10');
    browser.timeoutsImplicitWait(1000);

    // Click away from inputs
    browser.moveTo(null, 0, 0);
    browser.mouseButtonClick();

    // Loader
    browser.waitForElementVisible('#loader');
    browser.waitForElementNotVisible('#loader');

    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    browser.timeoutsImplicitWait(1000);

    // Ending test
    browser.end();
  }
};