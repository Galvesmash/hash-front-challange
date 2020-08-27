const defaultPeriodValue = ['0,00', '0,00', '0,00', '0,00'];
let mdr = null;
let saleValue = null;
let installments = null;

/* Shared function to normalize sale value input value */
function normalizeSaleValue(value) {
  return parseFloat(value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
}

/* Shared function to normalize installments input value */
function normalizeInstallments(value) {
  return parseInt(value);
}

/* Shared function to normalize mdr input value */
function normalizeMdr(value) {
  return parseInt(value.replace('%', ''));
}

/* Show loader */
function showLoader() {
  document.getElementById('loader').style.display = 'flex';
}

/* Hide loader */
function hideLoader() {
  document.getElementById('loader').style.display = 'flex';
}

/* Reset html answer. */
function resetAnswer() {
  mdr = null;
  saleValue = null;
  installments = null;
  defaultPeriodValue.forEach((defaultPeriod, index) => {
    // Applies 'defaultPeriod' to html
    document.getElementById(`response-value-${index+1}`).innerText = parseFloat(defaultPeriod).toFixed(2);
  });
}

/* API connection with axios */
function getPeriods(payload) {
  // Since this is the only connection with the API it's located here other than in a different file.
  return new Promise((resolve, reject) => {
    axios.post('https://hash-front-test.herokuapp.com/', payload).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  })
}

/* Called when form is fully filled */
function submitForm() {
  mdr = normalizeMdr(document.getElementById('form-mdr').children[1].value);
  saleValue = normalizeSaleValue(document.getElementById('form-sale-value').children[1].value);
  installments = normalizeInstallments(document.getElementById('form-installments').children[1].value);
  // Verify if values are correct
  if (!saleValue || !installments || !mdr) {
    // Values are incorrect, you shall not pass. Returns and applies 'defaultPeriod' to html
    return resetAnswer();
  }
  // Values are correct, proceed.
  // Show loader
  showLoader();
  // Set payload
  let payload = {
    'amount': saleValue,
    'installments': installments,
    'mdr': mdr,
    'days': [1, 15, 30, 90]
  };
  // Call 'getPeriods' with the payload
  getPeriods(payload).then(response => {
    // Print returned values in html
    Object.values(response).forEach((period, index) => {
      document.getElementById(`response-value-${index+1}`).innerText = parseFloat(period).toFixed(2);
    });
  }).catch(error => {
    console.error('Error', error);
    // Returned with errors.
    resetAnswer();
  }).finally(() => {
    // Hides loader
    hideLoader();
  });
};