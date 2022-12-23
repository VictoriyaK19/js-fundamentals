function chrInRange(ch1, chr2) {

    let ind1 = ch1.codePointAt();
    let ind2 = chr2.codePointAt();

    let chrRange = [];

    if (ind2 > ind1) {
        for (let index = ind1 + 1; index < ind2; index++) {
            chrRange.push(String.fromCharCode(index));
    
        }
    } else {
        for (let index = ind2 + 1; index < ind1; index++) {
            chrRange.push(String.fromCharCode(index));
    
        }
    }

    console.log(chrRange.join(' '));

}
    

chrInRange('a', 'd');
chrInRange('#', ':');
chrInRange('C', '#');