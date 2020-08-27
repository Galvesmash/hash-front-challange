const defaultPeriodValue = ['0,00', '0,00', '0,00', '0,00'];
let mdr = null;
let saleValue = null;
let installments = null;

/* Show overlay (loader, offline or error) */
function showOverlay(idName) {
  document.getElementById(idName).style.display = 'flex';
}

/* Hide overlay (loader, offline or error) */
function hideOverlay(idName) {
  document.getElementById(idName).style.display = 'none';
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
  // Verify id user is online
  if (!navigator.onLine) {
    return showOverlay('offline');
  }

  // Normalize input values
  mdr = InputMdr.prototype.normalizeMdr(document.getElementById('form-mdr').children[1].value);
  saleValue = InputSaleValue.prototype.normalizeSaleValue(document.getElementById('form-sale-value').children[1].value);
  installments = InputInstallments.prototype.normalizeInstallments(document.getElementById('form-installments').children[1].value);
  
  // Verify if values are correct
  if (!saleValue || !installments || !mdr) {
    // Values are incorrect, you shall not pass. Returns and applies 'defaultPeriod' to html
    return resetAnswer();
  }
  // Values are correct, proceed.

  // Show loader
  showOverlay('loader');
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
    showOverlay('error');
    resetAnswer();
  }).finally(() => {
    // Hides loader
    hideOverlay('loader');
  });
};