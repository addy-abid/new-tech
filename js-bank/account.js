/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    const deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  }
  return false;

};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    const withdraw = new Transaction('withdrawal', amount);
    this.transactions.push(withdraw);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  let deposit = 0;
  let withdraw = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposit += this.transactions[i].amount;
    } else {
      withdraw += this.transactions[i].amount;
    }
  }
  return deposit - withdraw;
};
