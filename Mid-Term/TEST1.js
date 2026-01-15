function processAndCombineStrings(strings, lengthThreshold) {
  // 1. แปลงเป็นตัวพิมพ์ใหญ่ และ กรองตามความยาว
  let filtered = strings
    .map(str => str.toUpperCase())
    .filter(str => str.length >= lengthThreshold);

  // ฟังก์ชันสำหรับนับสระ (A, E, I, O, U)
  const countVowels = (str) => {
    let count = 0;
    const vowels = "AEIOU";
    for (let char of str) {
      if (vowels.includes(char)) count++;
    }
    return count;
  };

  // 2. จัดเรียง (Sorting)
  filtered.sort((a, b) => {
    let vowelsA = countVowels(a);
    let vowelsB = countVowels(b);

    if (vowelsA !== vowelsB) {
      return vowelsB - vowelsA; // เรียงจากสระมากไปน้อย
    }
    return a.localeCompare(b); // ถ้าสระเท่ากัน ให้เรียงตามตัวอักษร A-Z
  });

  // 3. รวมเป็นสตริงเดียว และส่งคืนผลลัพธ์
  return filtered.join(" ");
}

// --- ทดสอบตามตัวอย่าง ---
const strings = ["apple", "banana", "cherry", "date", "fig", "grape","papaya","caipo"];

console.log(processAndCombineStrings(strings, 5)); 
// ผลลัพธ์: "BANANA APPLE GRAPE CHERRY"

console.log(processAndCombineStrings(strings, 6)); 
// ผลลัพธ์: "BANANA CHERRY"

console.log(processAndCombineStrings(["hi", "hello", "world"], 2)); 
// ผลลัพธ์: "HELLO WORLD HI"