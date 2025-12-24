function checkDayType(Dayname){
    const Daynamelow = Dayname.toLowerCase()
    switch (Daynamelow) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "Thursday":
        case "friday":
            return "Weekday"
        case "saturday":
        case "sonday":
            return "Weekend"
        default: return "Invalid day name";
    }
}

console.log(`${checkDayType("Monday")}`)