let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

let same_values = [];

for (let data1 of values1) {
    for (let data2 of values2) {
        for (let data3 of values3) {
            if (data1 === data2 && data1 === data3) {
                same_values.push(data1);
            }
        }
    }
}

same_values.forEach(item  => {
    console.log(item);
});