function solve(array, num) {
    
    for (let index = 0; index < array.length-1; index++) {
        for (let i = index+1; i < array.length; i++) {
            if (Number(array[index]) + Number(array[i]) == num) {
                console.log(`${array[index]} ${array[i]}`);
            }
            
        } 
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);