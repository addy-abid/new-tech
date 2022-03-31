/* exported Bank */
var Bank = function () {
  this.nextAccountNumber = 1;
  this.accounts = [];
};

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    const account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  for (let i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var total = 0;
  for (let i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
};
