const _nicePerson = require('./nice-person');

describe('nicePerson', () => {
  describe('askForHelp', () => {
    let promiseHolderMock;
    beforeEach(() => {
      promiseHolderMock = jest.fn();
    });

    it.skip('returns helps you if nothing bad happens', async () => {
      promiseHolderMock.mockImplementation(() => Promise.resolve('does not matter'))
      const nicePerson = _nicePerson(promiseHolderMock)
      await expect(nicePerson.askForHelp()).resolves.toEqual('helps you')
    });

    it.skip('returns says sorry if something bad happens', async () => {
      promiseHolderMock.mockImplementation(() => Promise.reject('does not matter'))
      const nicePerson = _nicePerson(promiseHolderMock)
      await expect(nicePerson.askForHelp()).rejects.toEqual('says sorry')
    });
  });
})