function toDecimal(binStr) {
    
    const lastIndex = binStr.length - 1;
    let total = 0;

    for (let i = 0; i < binStr.length; i++) {
        if (binStr[lastIndex - i] === '1') {
            total += (2 ** i);
        }
    }

    return total;
}

console.log(toDecimal("11110000"));