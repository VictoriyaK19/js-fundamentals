function gladiator(losts, helmetP, swordP, shieldP, armorP) {
    
    let helmets = 0;
    let swords = 0;
    let shields = 0;
    let armors = 0;

    for (let index = 1; index <= losts; index++) {
        if (index % 2 == 0) {
            helmets++;
        }
        if (index % 3 == 0) {
            swords++;
        }
        if (index % 2 == 0 && index % 3 == 0) {
            shields++;
            if (shields % 2 == 0) {
                armors++;
            }
        }
    }
    let expenses = helmetP * helmets + swordP * swords +
                    shieldP * shields + armorP * armors;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiator(7,
    2,
    3,
    4,
    5
    );
gladiator(23,
    12.50,
    21.50,
    40,
    200
    );
