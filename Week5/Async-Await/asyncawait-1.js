function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Starting...");
    await promiseTimeout(3000);
    console.log("Done");
}

console.log("Before run()");
run();
console.log("After run()");