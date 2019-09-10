const {promiseHolder} = require('./promise-holder');

describe('promiseHolder', () => {
  it('returns a gift when isTruthful', () => {
    return promiseHolder(true)
      .then((value) => {
        expect(value).toEqual('gift')
      });
  });

  it('returns an error when not isTruthful', () => {
    return promiseHolder(false)
      .catch((value) => {
        expect(value).toEqual('do not trust me')
      });
  });
});