function login(array) {

    let uncorrectPasswords = 0;

    const username = array.shift().toString();
    const password = username.split('').reverse().join('');

    array.forEach(element => {
        if (element == password) {
            console.log(`User ${username} logged in.`);
        } else {
            uncorrectPasswords++;
            if (uncorrectPasswords == 4) {
                console.log(`User ${username} blocked!`)
            } else {
                console.log('Incorrect password. Try again.');
            }
        } 
    });
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);