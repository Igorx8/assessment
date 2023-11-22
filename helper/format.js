const formatDate = (date) => {
    let year = date.substring(0, 2);
    const month = date.substring(2, 4);
    const day = date.substring(4, 6);
    const hour = date.substring(6, 8);
    const minute = date.substring(8, 10);
    const second = date.substring(10, 12);

    if (year <= (new Date().getFullYear() - 2000) ) year = `20${year}`;
    else year = `19${year}`;
    
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

const formatToObject = (formattedMessage) => {
    const messageArray = formattedMessage.split(',');
    const message = {
        type: Number(messageArray[0].replace('DATA', '')),
        protocol: Number(messageArray[1]),
        utc: formatDate(messageArray[2]),
        status: messageArray[3],
        id: messageArray[4].split('=')[1]
    }

    return message;
}

const formatMessage = (message) => {
    let formattedMessage = message;
    
    const specialCharacters = ['>','<'];
    
    specialCharacters.forEach((char) => {
        formattedMessage = formattedMessage.replace(char, '');
    })

    formattedMessage = formattedMessage.replace(';', ',');

    return formatToObject(formattedMessage);
}


const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateStringDate = () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    return `${year}${month}${day}${hour}${minutes}${seconds}`;
}

module.exports = {
    formatMessage,
    generateRandomNumber,
    generateStringDate
}