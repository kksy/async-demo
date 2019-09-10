const {promiseHolder} = require('./promise-holder');

describe('promiseHolder', () => {
  it.skip('returns a gift when isTruthful', () => {
    return promiseHolder(true)
      .then((value) => {
        expect(value).toEqual('gift')
      });
  });

  it.skip('returns an error when not isTruthful', () => {
    return promiseHolder(false)
      .catch((value) => {
        expect(value).toEqual('do not trust me')
      });
  });
});