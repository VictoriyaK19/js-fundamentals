function factorialize(num, num2) {

    let result1 = num;
    // if (num === 0 || num === 1) 
    //   return 1; 
    while (num > 1) { 
      num--;
      result1 *= num;
    }


    let result2 = num2;
    if (num === 0 || num === 1) 
      result2 = 1; 
    while (num > 1) { 
      num--;
      result2 *= num;
    }

    console.log((result1 / result2).toFixed(2));
}

factorialize(5, 2);