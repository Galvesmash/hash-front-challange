function getPeriods(payload) {
  return new Promise((resolve, reject) => {
    axios.post('https://hash-front-test.herokuapp.com/', payload).then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  })
}