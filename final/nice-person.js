const nicePerson = (promiseHolder) => {
  return {
    askForHelp: async () => {
      try {
        await promiseHolder(true)
        return 'helps you';
      } catch {
        throw 'says sorry'
      }
      
    }
    
  }
}

module.exports = nicePerson;