function solve(num) {
    
    for (let index = 1; index <= num; index++) {
        let n = index.toString();
        let sum = 0;
        for (var i = 0; i < n.length; i++) {
            let number = parseInt(n.charAt(i));
            sum += number;
            
        }
        
        if (sum == 5 || sum == 7 || sum == 11) {
            console.log(`${index} -> True`);
        } else {
            console.log(`${index} -> False`);
        }
    }
}

solve(15);