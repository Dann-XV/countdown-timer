const countdown = () => {
    const countDate = new Date("June 29, 2023 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector(".day-values").textContent = textDay;
    document.querySelector(".hour-values").textContent = textHour;
    document.querySelector(".minute-values").textContent = textMinute;
    document.querySelector(".second-values").textContent = textSecond;
    console.log(textHour)
}

setInterval(countdown, 1000);