let spanminute = document.getElementById("minute")

let spanhour = document.getElementById("hour")

let spansecond = document.getElementById("second")

let amorpm = document.getElementById("am")
let spanday = document.getElementById("day")
let spanyear = document.getElementById("year")
let spanmonth = document.getElementById("month")
let spandate = document.getElementById("date")


function changeDate() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month1 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    let date1 = date.getDate()
    let day = weekday[date.getDay()];
    let month = month1[date.getMonth()]
    let year = date.getFullYear()
    
    let pm

    spanhour.textContent = hour
    spanminute.textContent = minute
    spansecond.textContent = seconds
    spanday.textContent = day
    spandate.textContent = date1
    spanmonth.textContent = month
    spanyear.textContent = year
    

    if (hour >= 0 || hour <= 12) {
        pm = "Am"
    }
    else {
        pm = "Am"
    }
    amorpm.textContent = pm
}

changeDate()
setInterval(changeDate, 1000)


