const Account = require("../../models/Account")

const getAccount = async ({
  acccountFilter, repository
}) => {
  const result = await repository.get(acccountFilter)
  console.log(result)
  return result?.map(user => new Account(user))
}

module.exports = getAccount
