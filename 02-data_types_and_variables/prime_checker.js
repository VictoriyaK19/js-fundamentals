
function checker(num) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checker(7);
checker(8);
checker(81);
