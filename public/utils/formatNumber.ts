export const formatNumber = (num: string): string => {
    const parsedNum = parseFloat(num);

    if (isNaN(parsedNum)) {
        throw new TypeError('input should be a number or a string that can be parsed to a number');
    }

    if (Number.isInteger(parsedNum)) {
        return parsedNum.toString();
    } else {
        return parsedNum.toFixed(2).replace(/\.00$/, '');
    }
}