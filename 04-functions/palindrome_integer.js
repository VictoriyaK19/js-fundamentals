function isPalindrome(numbers) {

    numbers.forEach(e => {
        if ( e < 0) {
            console.log(false);
        } else {
            let reversed = 0;
            let y = e;
            while (y > 0) {
                const lastDigit = y % 10;
                reversed = (reversed * 10) + lastDigit;
                y = (y / 10) | 0;
            }
            console.log(e === reversed);
        }
    });
}

isPalindrome([123,323,421,121]);
isPalindrome([32,2,232,1010])