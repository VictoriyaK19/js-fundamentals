function isEqual(array1, array2) {

    let areEqual = true;
    let sum = 0;
    let num;
    let index;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            areEqual = false;
            index = i;
            break;
        } else {
            num = Number(array1[i]);
            sum += num;
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log( `Arrays are not identical. Found difference at ${index} index`);
    }
}

isEqual(['10','20','30'], ['10','20','30']);
isEqual(['1','2','3','4','5'], ['1','2','4','4','5']);
isEqual(['1'], ['10']);