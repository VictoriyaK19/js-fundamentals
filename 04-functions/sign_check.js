function signCheck(numOne, numTwo, numThree) {

    let num = numOne * numTwo * numThree;

    console.log(Math.sign(num) == 1 ? 'Positive': 'Negative');

}

signCheck( 5,
    12,
   -15
   );
signCheck(-6,
    -12,
     14
    );