function nextDay(year, month, day) {
    
    const today = new Date(year, month-1, day);
    const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
     
    const yearT = tomorrow.getFullYear();
    const monthT = (tomorrow.getMonth() + 1);
    const dayT = tomorrow.getDate();

    console.log(yearT + '-' + monthT + '-' + dayT);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
