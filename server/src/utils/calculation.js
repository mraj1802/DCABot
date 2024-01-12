const calculateAverage = (prices) => {
  let sum = 0;
  const averages = prices.map((price, index) => {
    const numericPrice = parseFloat(price);
    sum += numericPrice;
    return sum / (index + 1);
  });
  return isNaN(averages[averages.length - 1])
    ? "0.00"
    : averages[averages.length - 1].toFixed(2);
};

const calculateAmount = (safetyOrder, volume, index) => {
  let result = safetyOrder * volume;
  for (let i = 1; i <= index - 2; i++) {
    result *= volume;
  }
  return result;
};

const calculateSumAmount = (amounts, currentIndex, baseOrder, safetyOrder) => {
  let sum = 0;
  for (let i = 2; i <= currentIndex; i++) {
    const numericAmount = parseFloat(amounts[i]);
    const previousAdd = parseFloat(baseOrder) + parseFloat(safetyOrder);
    sum += i === 2 ? numericAmount + previousAdd : numericAmount;
  }
  return sum.toFixed(2);
};

const calculateSumQty = (qtys, index, baseOrder, safetyOrder, price) => {
  let sum = 0;
  for (let i = 2; i <= index; i++) {
    const numericQty = parseFloat(qtys[i].toFixed(5));
    const previousAdd = baseOrder / (price + safetyOrder) / price.toFixed(5);
    sum +=
      i === 2
        ? parseFloat(parseFloat(numericQty) + parseFloat(previousAdd))
        : parseFloat(numericQty);
  }
  return sum;
};
module.exports = {
  calculateAverage,
  calculateAmount,
  calculateSumAmount,
  calculateSumQty,
};
