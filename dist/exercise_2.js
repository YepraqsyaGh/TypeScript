"use strict";
//  Enums and Interfaces
// Task 1
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
const getColor = (color) => {
    switch (color) {
        case Color.Red:
            return Color.Red;
        case Color.Green:
            return Color.Green;
        case Color.Blue:
            return Color.Blue;
        default:
            return "Unknown color";
    }
};
console.log(getColor(Color.Blue));
console.log(getColor(Color.Red));
console.log(getColor(Color.Green));
class CarFirms {
    constructor(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    carDetails() {
        console.log(`Car Details:\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
    }
}
const car = new CarFirms("Mazda", "MX-5", 2024);
car.carDetails();
//# sourceMappingURL=exercise_2.js.map