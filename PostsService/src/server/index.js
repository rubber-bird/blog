
const init = ( config ) => {
  return new Promise((resolve, reject) => {
    if (!config) {
      reject(new Error('Hahaa'));
    }
    resolve('ok')
  });
}

module.exports = Object.assign({}, { init })