declare enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
declare const getColor: (color: Color) => string;
interface Car {
    make: string;
    model: string;
    year: number;
}
declare class CarFirms implements Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
    carDetails(): void;
}
declare const car: CarFirms;
