const messages = "Hello World";

const aeiou = ['a', 'e', 'i', 'o', 'u'];
for (let text of messages) {
    for (let alphabet of aeiou) {
        if (text === alphabet) {
            console.log(text);
        }
    }
}