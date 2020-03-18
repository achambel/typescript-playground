// without generics
class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

const collectionOfNumbers = new ArrayOfNumber([1, 2, 3]);

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

const collectionOfString = new ArrayOfStrings(['a', 'b', 'c']);

// As you can see the classes are pretty similar
// Now solving this issue using generic types

class CollectionOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const numberCollection = new CollectionOfAnything<number>([1, 2, 3]);
const stringCollection = new CollectionOfAnything<string>(['a', 'b', 'c']);

// functions without generics

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// functions with generics

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);
printAnything<number>([1, 2, 3]);

// generic constraint

class House {
  print(): void {
    console.log('Hi, I am a house.');
  }
}

class Car {
  print(): void {
    console.log('Hi, I am a car.');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCar<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// printHouseOrCar([1, 2, 3]) // it fails

// it works
printHouseOrCar<House>([new House(), new House()]);
printHouseOrCar<Car>([new Car(), new Car()]);
