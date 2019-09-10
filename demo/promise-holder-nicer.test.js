const { promiseHolder } = require('./promise-holder-nicer');

describe('promiseHolder', () => {
  it.skip('returns a gift when isTruthful', async () => {
    const result = await promiseHolder(true)

    expect(result).toEqual('gift');
  });

  it.skip('returns an error when not isTruthful', async () => {
    await expect(promiseHolder(false)).rejects.toEqual('do not trust me')
  });
});