function generateTempID(){
    const randomPart = Math.random().toString(36).substring(3, 8);
    return randomPart.toUpperCase();
}

const orderID = generateTempID();
console.log(`Generated Order ID: ${orderID}`);