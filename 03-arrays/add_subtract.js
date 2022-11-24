function sd(arr) {
    const newArr = arr.map((x, i) => x%2==0 ? x + i : x-i );
    const sumArr = arr.reduce((a,b)=> a+b);
    const sumNewArr = newArr.reduce((a,b)=> a+b);
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);
    
}
sd([5, 15, 23, 56, 35]);