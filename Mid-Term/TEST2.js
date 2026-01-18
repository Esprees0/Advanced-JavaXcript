function updateInventory(currentInventory, newInventory) {
  // 1. วนลูปสินค้าใหม่แต่ละรายการเพื่อนำไปอัปเดตในคลังปัจจุบัน
  newInventory.forEach(newItem => {
    // ตรวจสอบว่ามีสินค้านี้อยู่ใน currentInventory หรือยัง
    const foundItem = currentInventory.find(item => item.name === newItem.name);

    if (foundItem) {
      // ถ้าเจอ ให้บวกจำนวนเพิ่มเข้าไป
      foundItem.quantity += newItem.quantity;
    } else {
      // ถ้าไม่เจอ ให้เพิ่มสินค้าใหม่ตัวนี้เข้าไปในอาเรย์เลย
      currentInventory.push(newItem);
    }
  });

  // 2. เรียงลำดับตามชื่อ (Alphabetical Order)
  currentInventory.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return currentInventory;
}

// --- ทดสอบตามตัวอย่างในภาพ ---
const currentInventory = [
  { name: 'item1', quantity: 10 },
  { name: 'item2', quantity: 5 },
  { name: 'item3', quantity: 8 }
];

const newInventory = [
  { name: 'item1', quantity: 5 },
  { name: 'item4', quantity: 7 },
  { name: 'item2', quantity: 10 }
];

console.log(updateInventory(currentInventory, newInventory));