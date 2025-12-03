function createLogEntry(message){
    const now = new Date();
    const timestamp = now.toLocaleDateString('th-TH');

    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();
    const logMessage = message.toUpperCase();
    return `[${timestamp}] [${eventId}] ${logMessage}`;
}

const log = createLogEntry("User logged in");
console.log(log);