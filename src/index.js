module.exports = function toReadable (number) {
    let units = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let dozens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let hundreds = [
        '', 'hundred', 'thousand', 'million', 'billion', 'trillion'
    ];

    if (number < 20) {
        return units[number];
    }

    let maxNumberResolution = 0;
    while (Math.floor(number / Math.pow(10, maxNumberResolution)) > 0) {
        maxNumberResolution += 1;
    }
    maxNumberResolution--;

    let result = [];
    while (maxNumberResolution >= 0) {
        const numberUnit = Math.floor(number / Math.pow(10, maxNumberResolution));
        if (number < 20) {
            if (number !== 0) {
                result.push(units[number]);
            }
            break;
        }

        if (maxNumberResolution == 1) {
            result.push(dozens[numberUnit]);
        }
        else {
            result.push(units[numberUnit]);

            result.push(hundreds[maxNumberResolution - 1]);
        }

        number -= numberUnit * Math.pow(10, maxNumberResolution);
        maxNumberResolution -= 1;
    }

    return result.join(' ');
}
