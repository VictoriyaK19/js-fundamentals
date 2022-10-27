function sumOfOddNumbers(n) {

    let sum = 0;
    let times = 0;

    for (let i = 1; i <= 100; i++) {

        if (i % 2 != 0) {
            console.log(i);
            sum +=i; 
            times++;
        }

        if (times == n) {
            break;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);
