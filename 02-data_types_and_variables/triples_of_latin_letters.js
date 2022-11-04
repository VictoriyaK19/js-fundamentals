function letters(n) {
    let num = parseInt(n);
    let letters = [];
    for (let i = 0; i < num; i++) {
        let letter1 = String.fromCharCode(97+i)
        
        for (let i = 0; i < num; i++) {
            let letter2 = String.fromCharCode(97+i)
            
            for (let i = 0; i < num; i++) {
                let letter3 = String.fromCharCode(97+i)
                console.log(`${letter1}${letter2}${letter3}`)
            }
        }
    }
   
}

letters('3');