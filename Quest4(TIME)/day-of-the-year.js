function dayOfTheYear(date) {
    let firstDay = new Date('01-01-0001');
    firstDay.setUTCFullYear(date.getUTCFullYear())
    let days = date.setTime(date.getTime() - firstDay.getTime()) / (60 * 60 * 24 * 1000)
    return days + 1
}