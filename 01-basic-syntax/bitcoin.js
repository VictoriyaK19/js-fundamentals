function bitcoinMining(arrayOfGold) {

    // 1 Bitcoin = 11949.16 lv.
    // 1g of gold = 67.51 lv.

    let money = 0;
    let bitcoins = 0;
    let purchases = 0;
    let firstPurchase = 0;

    for (let day = 1; day <= arrayOfGold.length; day++) {
        
        if (day % 3 == 0) {
            money += arrayOfGold[day - 1]*0.7 *67.51;      // Every 3rd day steals 30%
        } else {
            money += arrayOfGold[day - 1] * 67.51;
        }

        while (money > 11949.16) {
            money -= 11949.16;
            bitcoins++;
            purchases++;
            if (purchases == 1) {
                firstPurchase = day;
            }
        }
        
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (purchases > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
