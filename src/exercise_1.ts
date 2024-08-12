//  Basic Types and Functions

// Task 1
const userName: string = "Jon";
const age: number = 30;
const isProgrammer: boolean = true;

const getName = (name:string):string =>{
    return name;
}

const getAge = (age:number):number =>{
    return age;
}

const getProgramerStatus = (isProgrammer:boolean):boolean =>{
    return isProgrammer;
}

console.log(`Name: ${getName(userName)}\nAge: ${getAge(age)}\nIs Programmer: ${getProgramerStatus(isProgrammer)}`);