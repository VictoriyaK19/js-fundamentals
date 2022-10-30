function printSum(n1, n2) {
    
    let sum = 0;
    var numbers = '';

    for (var num = n1; num <= n2; num++) {
        numbers += num + ' ';
        sum += num;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);
printSum(0, 26);
printSum(50, 60);
