function calculateArea(a, b, c) {

    let semiPer = (a + b + c)/2;
    let area = Math.sqrt(semiPer * (semiPer - a)* (semiPer - b) * (semiPer - c));
    console.log(area);

}

calculateArea(2, 3.5, 4);