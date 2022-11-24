function reverse(n, array) {
    let newArray = [];

    for (let index = 0; index < n; index++) {
        newArray.push(array[index]);
    }
    newArray.reverse();
    console.log(newArray.join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);