const roundedNumber = (num) => {
    strNum = num.toFixed(2)
    num = num * 100
    if (+strNum[strNum.length - 1] === 0) {
        num = num / 100
        return num.toFixed(2);
    } else if (+strNum[strNum.length - 1] > 5) {
        num = (num + 10 - +strNum[strNum.length - 1]) / 100
        return num.toFixed(2);
    } else if (+strNum[strNum.length - 1] <= 5) {
        num = (num - +strNum[strNum.length - 1] + 5) / 100
        return num.toFixed(2);
    };
};

module.exports = roundedNumber