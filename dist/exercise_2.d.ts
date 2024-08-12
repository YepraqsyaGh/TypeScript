declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2
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
