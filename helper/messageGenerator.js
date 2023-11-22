const { generateRandomNumber, generateStringDate } = require("./format");

const messageGenerator = () => {
    const type = generateRandomNumber(1, 2);
    const protocol = generateRandomNumber(66, 68);
    const stringDate = generateStringDate();
    const status = generateRandomNumber(0, 1);
    const id = generateRandomNumber(0, 999);

    return `>DATA${type},${protocol},${stringDate},${status};ID=${id}<`;
}


module.exports = {
    messageGenerator
}