var burger: string = 'hamburger',     // String 
    calories: number = 300,           // Numeric
    tasty: boolean = true;            // Boolean

function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);

export const burg = burger;
