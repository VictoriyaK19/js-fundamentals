function rotation(array, rotations) {

    for (let index = 0; index < rotations; index++) {
        const element = array.shift();
        array.push(element);
    }

    console.log(array.join(' '));
}

rotation([51, 47, 32, 61], 2);