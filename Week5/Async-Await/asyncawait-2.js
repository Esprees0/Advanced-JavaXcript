function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function  longRunningOperation() {
    return 42;
}

async function run() {
    console.log("Starting...");
    await promiseTimeout(3000);
    const response = await longRunningOperation();
    console.log(response);
    console.log("Done");
}

console.log("Before run()");
run();
console.log("After run()");