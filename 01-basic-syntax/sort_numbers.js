function sort(n1, n2, n3) {
    
    let numbers = Array.of(n1, n2, n3).sort().reverse();

    numbers.forEach(element => console.log(element));
}

sort(2, 1, 3);
sort(-2, 1, 3);
sort(0, 0, 2);
