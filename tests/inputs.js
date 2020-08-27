module.exports = {
  // TESTS FOR SALE VALUE INPUT:
  'Sale Value Input: String value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing string value:
    browser.setValue('input[name="form-sale-value"]', 'teste');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('#warning-sale-value').to.be.visible;
    browser.expect.element('#warning-sale-value').text.to.equal('Mínimo de R$0,00.');
    // Ending test
    browser.end();
  },
  'Sale Value Input: Empty value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-sale-value"]', '');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('#warning-sale-value').to.be.visible;
    browser.expect.element('#warning-sale-value').text.to.equal('Mínimo de R$0,00.');
    // Ending test
    browser.end();
  },
  'Sale Value Input: value = 0': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing value = 0:
    browser.setValue('input[name="form-sale-value"]', '0');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('#warning-sale-value').to.not.be.visible;
    // Ending test
    browser.end();
  },
  'Sale Value Input: value = 1000': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing corrct value:
    browser.setValue('input[name="form-sale-value"]', '1000');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#warning-sale-value', 200);
    // Expected Result:
    browser.expect.element('#warning-sale-value').to.not.be.visible;
    // Ending test
    browser.end();
  },

  // TESTS FOR INSTALLMENTS INPUT:
  'Installments Input: String value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing string value:
    browser.setValue('input[name="form-installments"]', 'teste');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-installments', 200);
    // Expected Result:
    browser.expect.element('#warning-installments').to.be.visible;
    browser.expect.element('#warning-installments').text.to.equal('Mínimo de 1 parcela e máximo de 12 parcelas.');
    // Ending test
    browser.end();
  },
  'Installments Input: Empty value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-installments"]', '');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-installments', 200);
    // Expected Result:
    browser.expect.element('#warning-installments').to.be.visible;
    browser.expect.element('#warning-installments').text.to.equal('Mínimo de 1 parcela e máximo de 12 parcelas.');
    // Ending test
    browser.end();
  },
  'Installments Input: Less then minimum value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-installments"]', '0');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-installments', 200);
    // Expected Result:
    browser.expect.element('#warning-installments').to.be.visible;
    browser.expect.element('#warning-installments').text.to.equal('Mínimo de 1 parcela.');
    // Ending test
    browser.end();
  },
  'Installments Input: More then maximum value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-installments"]', '13');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-installments', 200);
    // Expected Result:
    browser.expect.element('#warning-installments').to.be.visible;
    browser.expect.element('#warning-installments').text.to.equal('Máximo de 12 parcelas.');
    // Ending test
    browser.end();
  },
  'Installments Input: Minimum value (1)': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing value = 0:
    browser.setValue('input[name="form-installments"]', '1');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#warning-installments', 200);
    // Expected Result:
    browser.expect.element('#warning-installments').to.not.be.visible;
    // Ending test
    browser.end();
  },
  'Installments Input: Maximum value (12)': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing corrct value:
    browser.setValue('input[name="form-installments"]', '12');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#warning-installments', 200);
    // Expected Result:
    browser.expect.element('#warning-installments').to.not.be.visible;
    // Ending test
    browser.end();
  },

  // TESTS FOR MDR INPUT:
  'Mdr Input: String value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing string value:
    browser.setValue('input[name="form-mdr"]', 'teste');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-mdr', 200);
    // Expected Result:
    browser.expect.element('#warning-mdr').to.be.visible;
    browser.expect.element('#warning-mdr').text.to.equal('Mínimo de 0% e máximo de 100%.');
    // Ending test
    browser.end();
  },
  'Mdr Input: Empty value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-mdr"]', '');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-mdr', 200);
    // Expected Result:
    browser.expect.element('#warning-mdr').to.be.visible;
    browser.expect.element('#warning-mdr').text.to.equal('Mínimo de 0% e máximo de 100%.');
    // Ending test
    browser.end();
  },
  'Mdr Input: Less then minimum value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-mdr"]', '-1');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-mdr', 200);
    // Expected Result:
    browser.expect.element('#warning-mdr').to.be.visible;
    browser.expect.element('#warning-mdr').text.to.equal('Mínimo de 0%.');
    // Ending test
    browser.end();
  },
  'Mdr Input: More then maximum value': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing empty value:
    browser.setValue('input[name="form-mdr"]', '101');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementVisible('#warning-mdr', 200);
    // Expected Result:
    browser.expect.element('#warning-mdr').to.be.visible;
    browser.expect.element('#warning-mdr').text.to.equal('Máximo de 100%.');
    // Ending test
    browser.end();
  },
  'Mdr Input: Minimum value (0)': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing value = 0:
    browser.setValue('input[name="form-mdr"]', '0');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#warning-mdr', 200);
    // Expected Result:
    browser.expect.element('#warning-mdr').to.not.be.visible;
    // Ending test
    browser.end();
  },
  'Mdr Input: Maximum value (100)': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing corrct value:
    browser.setValue('input[name="form-mdr"]', '100');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    browser.waitForElementNotVisible('#warning-mdr', 200);
    // Expected Result:
    browser.expect.element('#warning-mdr').to.not.be.visible;
    // Ending test
    browser.end();
  },

  // TESTS FOR API WITH NO DELAY:
  'Inputs correct values': browser => {
    browser.url('http://localhost:3000/').waitForElementVisible('body', 1000);
    // Testing "Sale Value Input":
    browser.setValue('input[name="form-sale-value"]', '1000');
    browser.setValue('input[name="form-installments"]', '2');
    browser.setValue('input[name="form-mdr"]', '10');
    // Click away from inputs
    browser.moveTo(null, 0, 0).mouseButtonClick();
    // Loader
    browser.waitForElementVisible('#loader', 5000);
    browser.waitForElementNotVisible('#loader', 5000);
    // Expected Results:
    browser.expect.element('#response-value-1').text.to.equal('768.00');
    browser.expect.element('#response-value-2').text.to.equal('810.00');
    browser.expect.element('#response-value-3').text.to.equal('855.00');
    browser.expect.element('#response-value-4').text.to.equal('900.00');
    
    // Ending test
    browser.end();
  }
};