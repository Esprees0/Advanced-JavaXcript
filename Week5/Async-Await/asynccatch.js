function yayOrnay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1);
        val ? resolve("Yay!🤞") : reject("Nay!😒");
    });
}

async function msg() {
    try {
        const result = await yayOrnay();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

msg();
msg();
msg();
msg();
msg();
msg();
msg();
msg();
