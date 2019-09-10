const nicePerson = (promiseHolder) => {
  return {
    askForHelp: async () => {
      try {
        await promiseHolder(true)
        return 'helps you';
      } catch {
        return Promise.reject('says sorry')
      }
      
    }
    
  }
}

module.exports = nicePerson;