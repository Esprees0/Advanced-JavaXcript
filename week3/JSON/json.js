const bookObj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: false
};

const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON);

console.log(typeof bookJSON);

const recoveredObj = JSON.parse(bookJSON);

console.log(recoveredObj.author);
console.log(typeof recoveredObj);
