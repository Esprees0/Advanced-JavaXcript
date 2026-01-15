const library = {
    books: [{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false },
        { title: "1984", author: "George Orwell", year: 1949, isRead: true }
    ],
    listBooks: function () {
        let listviewbook = [];
        for (i = 0;i < this.books.length; i++) {
            listviewbook.push(
            `ชื่อ: ${this.books[i].title}, 
            ผู้แต่ง: ${this.books[i].author}, 
            ปีที่พิมพ์: ${this.books[i].year}, สถานะ: ${(this.books[i]).isRead? "อ่านแล้ว":"ยังไม้ได้อ่าน"}`)
        }
        return console.log(listviewbook);
    },   
}
// console.log(library.books);
library.listBooks();
// library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
// library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
// library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

// library.listBooks();
// /* Output:
// 1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
// 2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
// 3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
// */

// console.log(library.getUnreadBooks());
// // Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]

// library.removeBook("1984");
// library.listBooks();