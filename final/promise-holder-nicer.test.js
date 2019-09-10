const { promiseHolder } = require('./promise-holder-nicer');

describe('promiseHolder', () => {
  it('returns a gift when isTruthful', async () => {
    const result = await promiseHolder(true)

    expect(result).toEqual('gift');
  });

  it('returns an error when not isTruthful', async () => {
    await expect(promiseHolder(false)).rejects.toEqual('do not trust me')
  });
});