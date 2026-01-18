// const messages = "Hello World";

// const aeiou = ['a', 'e', 'i', 'o', 'u'];
// for (let text of messages) {
//     for (let alphabet of aeiou) {
//         if (text === alphabet) {
//             console.log(text);
//         }
//     }
// }


const countVowels = (str) => {
  // หาตัวอักษร a, e, i, o, u ทั้งพิมพ์เล็กพิมพ์ใหญ่ (gi) 
  // ถ้าเจอให้คืนค่าเป็นอาเรย์ แล้วนับความยาว (.length)
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log(countVowels("Hello World"));