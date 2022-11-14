function solve(startingYield) {

    let days = 0;
    let totalAmount = 0;

    if (startingYield < 100) {
        console.log(days);
        console.log(totalAmount);

    }else {
        while (startingYield >= 100) {

            totalAmount += startingYield - 26;

            days++;
            startingYield -= 10;
        }
        
        console.log(days);
        console.log(totalAmount - 26);
    }

}

solve(111);
solve(450);
solve(0)