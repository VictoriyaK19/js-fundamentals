function sum(number) {
    let numbers = String(number);
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        let num = parseInt(numbers.charAt(i));
        sum += num;
      }
    console.log(sum);
}

sum(245678);
sum(97561);
sum(543);
