const promiseHolder = (isTruthful) => {
  const promise = new Promise((resolve, reject) => {
    if (isTruthful) {
      resolve('gift');
    } 
    reject('do not trust me');
  });

  return promise;
};

module.exports = {
  promiseHolder
}