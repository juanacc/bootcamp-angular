// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;
let username: string;
username = 'Max';
let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

//Alias
type Person = {
  name: string,
  age: number
};

// let person: {
//   name: string,
//   age: number
// };
let person: Person;

person = {
  name: 'Max',
  age: 32
};

//let people: typeof person[];
let people: Person[];

// Type inference
let course: string | number = 'Javascript';
course = 123;

// Functions & types
const add = (a, b): number => a + b;

const printf = (value: any): void => {
  console.log(value);
}

// Generics
// const insertABeginning(array: any[], value: any) => {
//   const newArray = [value, ...array];
//   return newArray;
// }

function insertABeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertABeginning(demoArray, -1);
const stringArray = insertABeginning(['a', 'b', 'c'], 'd');

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(public firstName: string, public lastName: string, public age: number, private courses: string[]) {
    // this.firstName = first;
    // this.lastName = last;
    // this.age = age;
    // this.courses = courses;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Pepe', 32, ['Angular']);
student.enrol('React');

interface Human {
  firstName: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hola');
  }
}

class Instructor implements Human {
  firstName: string;
  age: number;

  greet() {
    console.log('Hola');
  };
}