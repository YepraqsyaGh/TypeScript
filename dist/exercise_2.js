"use strict";
//  Enums and Interfaces
// Task 1
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var getColor = function (color) {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Green:
            return "Green";
        case Color.Blue:
            return "Blue";
        default:
            return "Unknown color";
    }
};
console.log(getColor(Color.Blue));
console.log(getColor(Color.Red));
console.log(getColor(Color.Green));
var CarFirms = /** @class */ (function () {
    function CarFirms(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    CarFirms.prototype.carDetails = function () {
        console.log("Car Details:\nMake: " + this.make + "\nModel: " + this.model + "\nYear: " + this.year);
    };
    return CarFirms;
}());
var car = new CarFirms("Mazda", "MX-5", 2024);
car.carDetails();
//# sourceMappingURL=exercise_2.js.map