function solve(array) {

    let longestSequence = [];
    let num = array[0];
    let sequence = [num];

    for (let index = 0; index < array.length-1; index++) {

        if (array[index] == array[index+1] && sequence[0] == array[index]) {
            sequence.push(array[index]);
        } else {
            num = array[index+1];
            sequence = [num];
        }
        
        if (sequence.length > longestSequence.length) {
            longestSequence = sequence;
        }
    }
    console.log(longestSequence.join(' '));

}

solve([2, 1, 1, 1, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
