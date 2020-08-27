const defaultPeriodValue = ['0,00', '0,00', '0,00', '0,00'];
let saleValue = null;
let installments = null;
let mdr = null;

function normalizeSaleValue(value) {
  return parseFloat(value.replace('R$ ', '').replace(/\./g, '').replace(',', '.'));
}

function normalizeInstallments(value) {
  return parseInt(value);
}

function normalizeMdr(value) {
  return parseInt(value.replace('%', ''));
}

function getPeriods(payload) {
  return new Promise((resolve, reject) => {
    axios.post('https://hash-front-test.herokuapp.com/', payload).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  })
}

function checkForm() {
  saleValue = normalizeSaleValue(document.getElementById('form-sale-value').children[1].value);
  installments = normalizeInstallments(document.getElementById('form-installments').children[1].value);
  mdr = normalizeMdr(document.getElementById('form-mdr').children[1].value);
  if (!saleValue || !installments || !mdr) {
    return defaultPeriodValue.forEach((defaultPeriod, index) => {
      document.getElementById(`response-value-${index+1}`).innerText = parseFloat(defaultPeriod).toFixed(2);
    });
  }
  document.getElementById('loader').style.display = 'flex';
  let payload = {
    'amount': saleValue,
    'installments': installments,
    'mdr': mdr,
    'days': [1, 15, 30, 90]
  };
  getPeriods(payload).then(response => {
    Object.values(response).forEach((period, index) => {
      document.getElementById(`response-value-${index+1}`).innerText = parseFloat(period).toFixed(2);
    });
  }).catch(error => {
    console.error('Error', error);
  }).finally(() => {
    document.getElementById('loader').style.display = 'none';
  });
};