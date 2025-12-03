const startTime = Date.now();

function someHeavyTask() {
    for (let i = 0; i < 5e7; i++) {
        Math.sqrt(i);
    }    
}

someHeavyTask();

const endTime = Date.now();
const elapsedTime = endTime - startTime;
console.log(`Elapsed Time: ${elapsedTime} ms`);

