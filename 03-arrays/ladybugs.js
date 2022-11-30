function solve(comands) {

    const sizeField = comands.shift();
    let indexes = comands.shift();
    let strIndexes = indexes.replace(/\s/g, '');

    let field = [];

    for (let i = 0; i < strIndexes.length; i++) {
        field[strIndexes[i]] = 1;
    }

    let fly = 0;
    let position = 0;
    comands.forEach(element => {
        if (element.includes('right')) {
            fly = element[element.length-1];
            position = field[element[0]];
            console.log(position);
        } else {
            
        }
    });
    

}

solve([ 3, '0 1',
'0 right 1',
'2 right 1' ]
);
solve([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
);
solve([ 5, '3',
'3 left 2',
'1 left -2']
);