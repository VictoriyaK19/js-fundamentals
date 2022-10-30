function vacation(people, group, day) {

    let price = people;

    switch(group) {
        case 'Students':
            switch(day) {
                case 'Friday':
                    price *= 8.45;
                    break;
                case 'Saturday':
                    price *= 9.80;
                    break;
                case 'Sunday':
                    price *= 10.46;
                    break;
            }
            break;
        case 'Business':
            switch(day) {
                case 'Friday':
                    price *= 10.90;
                    break;
                case 'Saturday':
                    price *= 15.60;
                    break;
                case 'Sunday':
                    price *= 16;
                    break;
            }
            break;
        case 'Regular':
            switch(day) {
                case 'Friday':
                    price *= 15;
                    break;
                case 'Saturday':
                    price *= 20;
                    break;
                case 'Sunday':
                    price *= 22.50;
                    break;
            }
            break;
    }

    switch(group) {
        case 'Students':
            if (people >= 30) {
                price *= 0.85;
            }
            break;
        case 'Business':
            if (people >= 100) {
                people -= 10;
                switch(day) {
                    case 'Friday':
                        price = people * 10.90;
                        break;
                    case 'Saturday':
                        price = people * 15.60;
                        break;
                    case 'Sunday':
                        price = people * 16;
                        break;
                    }
            }
            break;
        case 'Regular':
            if (people >= 10 && people <= 20) {
                switch(day) {
                    case 'Friday':
                        price *=0.95;
                        break;
                    case 'Saturday':
                        price *= 0.95;
                        break;
                    case 'Sunday':
                        price *= 0.95;
                        break;
                }
            }
            break;

    }


    console.log(`Total price: ${price.toFixed(2)}`);
}


vacation(40,
    "Regular",
    "Saturday");