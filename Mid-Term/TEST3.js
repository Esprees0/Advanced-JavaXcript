function findLongestRepeatedSubstring(inputStr) {
    let n = inputStr.length;
    
    // วนลูปหาจาก 'ความยาว' (len) ที่มากที่สุดลงไปหา 1
    for (let len = n - 1; len > 0; len--) {
        
        // วนลูปหา 'ตำแหน่งเริ่ม' (i) ของซับสตริงในความยาวนั้นๆ
        for (let i = 0; i <= n - len; i++) {
            let substring = inputStr.substring(i, i + len);
            
            // ตรวจสอบว่ามี substring นี้อยู่ในตำแหน่งอื่นของ inputStr หรือไม่
            // โดยการหา index จากด้านหลัง (lastIndexOf) 
            // ถ้าตำแหน่งที่เจอจากหลัง ไม่ใช่ตำแหน่งปัจจุบัน (i) แสดงว่ามันซ้ำ!
            if (inputStr.lastIndexOf(substring) !== i) {
                return substring;
            }
        }
    }
    
    // ถ้าวนจนครบแล้วไม่เจอเลย ให้คืนค่าว่าง
    return "";
}

// ตรวจสอบผลลัพธ์
console.log(findLongestRepeatedSubstring("banana")); // Output: "ana"
console.log(findLongestRepeatedSubstring("abcd"));   // Output: ""
console.log(findLongestRepeatedSubstring("ababa"));  // Output: "aba"