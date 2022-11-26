function commonEl(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
        for (let y = 0; y < array2.length; y++) {
            if (array1[i] === array2[y]) {
                console.log(array1[i]);
            }
        
        }
        
    }
}

commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
);
commonEl(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);