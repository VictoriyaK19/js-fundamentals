function maxNum(array) {
    const result = [];
    

    for (let index = 0; index < array.length; index++) {

        isBigger = true;
        
        for (let y = index+1; y < array.length; y++) {

            if (array[index] > array[y]) {
                
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            result.push(array[index]);
        }
        

    }
    console.log(result.join(' '));
}

maxNum([1, 4, 3, 2]);
maxNum([14, 24, 3, 19, 15, 17]);
maxNum([41, 41, 34, 20]);
maxNum([27, 19, 42, 2, 13, 45, 48]);
