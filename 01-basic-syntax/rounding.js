function rounding(num1, num2) {
    if (num2 > 15) {
        num2 = 15;
    }
    let result = num1.toFixed(num2);
    result = parseFloat (result);
    console.log(result);
}

rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);

