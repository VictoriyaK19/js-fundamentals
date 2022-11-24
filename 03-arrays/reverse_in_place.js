function reverse(array) {
    let result = array.reverse().join(' ');
    return result;
}

console.log(reverse(['a', 'b', 'c', 'd', 'e']));