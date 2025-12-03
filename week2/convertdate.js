const registerDate = new Date('2023-09-17T10:00:00Z');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: "Asia/Bangkok"
};

const formattedDate = 
    registerDate.toLocaleDateString('ko-KR', options);
console.log(`Registration Date (Bangkok Time): ${formattedDate}`);