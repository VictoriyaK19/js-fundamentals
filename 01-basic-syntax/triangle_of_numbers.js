function triangle(n) {

    for (var index = 1; index <= n; index++) {
        var result = '';
        for (let i = 0; i < index; i++) {
            result += index + ' ';
            
        }
        console.log(result);
    }
}

triangle(3);
triangle(5);
triangle(6);
