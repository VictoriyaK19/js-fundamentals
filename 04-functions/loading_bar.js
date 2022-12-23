function loadBar(num) {

    let bar = "";

    if (num < 100) {
        for (let index = 0; index < 10; index++) {
            if (index < num/10) {
                bar += '%';
            } else {
                bar += '.';
            }
            
        }

        console.log(`${num}% [${bar}]`);
        console.log('Still loading...');

    } else {
        console.log(`${num}% Complete!`);
        console.log('[%%%%%%%%%%]');
    }
}

loadBar(30);
loadBar(50);
loadBar(100);