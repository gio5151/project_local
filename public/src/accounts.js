function findAccountById(accounts, id) {
  let accountsByIDObject = {}
  // loop over all the accounts to get a si{ngle account
  for( let i = 0; i < accounts.length; i++){
    //console.log(accounts[i], "what is this account?")
    if(accounts[i].id === id){
       // some code here
    }
  }
  return 
}

function sortAccountsByLastName(accounts) {}

function numberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
