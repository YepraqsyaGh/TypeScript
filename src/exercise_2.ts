//  Enums and Interfaces

// Task 1
enum Color {
    Red,
    Green,
    Blue,
}

const getColor = (color: Color): string => {
    switch (color) {
        case Color.Red:
            return "Red"
        case Color.Green:
            return "Green"
        case Color.Blue:
            return "Blue"
        default:
            return "Unknown color"
    }
}

console.log(getColor(Color.Blue))
console.log(getColor(Color.Red))
console.log(getColor(Color.Green))

// Task 2
interface Car {
    make: string,
    model: string,
    year: number,
}

class CarFirms implements Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make,
        this.model = model,
        this.year = year
    }

    carDetails(): void {
        console.log(`Car Details:\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
    }
}

const car = new CarFirms("Mazda", "MX-5", 2024)
car.carDetails();
