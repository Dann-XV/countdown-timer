 function countdown(){
    const countdownDate = new Date('June 25, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countdownDate - now;
    

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
   
    for(let i = 0; i < 10; i++){
      console.log(i)
    } 
    
 }

 countdown();
//  setInterval(countdown, 1000)