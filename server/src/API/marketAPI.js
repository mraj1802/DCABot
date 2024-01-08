const FetchBalance = async (exchange, coin) => {
  const ex = await exchange.fetchBalance();
  const balance = ex[coin];
  return balance;
};

module.exports = FetchBalance;
