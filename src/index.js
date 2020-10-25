module.exports = function toReadable(number) {
    let arrOnes = [
        '',
        ' one',
        ' two',
        ' three',
        ' four',
        ' five',
        ' six',
        ' seven',
        ' eight',
        ' nine',
        ' ten',
        ' eleven',
        ' twelve',
        ' thirteen',
        ' fourteen',
        ' fifteen',
        ' sixteen',
        ' seventeen',
        ' eighteen',
        ' nineteen'
    ];
    let arrTens = [
        '',
        '',
        ' twenty',
        ' thirty',
        ' forty',
        ' fifty',
        ' sixty',
        ' seventy',
        ' eighty',
        ' ninety'
    ];
    let hundred = ' hundred';
    let result = '';
    let numStr = number.toString();

    if (number === 0) {
        return 'zero';
    }

    if (numStr.length === 3) {
        result = arrOnes[parseInt(numStr.charAt(0))] + hundred;
        number = number % 100;
        numStr = number.toString();
    }

    if (number < 20) {
        result += arrOnes[number];
    } else {
        result += arrTens[parseInt(numStr.charAt(0))];
        result += arrOnes[parseInt(numStr.charAt(1))];
    }
    return result.trim();
};
