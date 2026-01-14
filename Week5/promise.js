function promiseTimeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(3000)
    .then(() => {
        console.log("Done");
        return promiseTimeout(2000);
    })
    .then(() => {
        console.log("Also Done");
        return Promise.resolve(42)
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error");
    });