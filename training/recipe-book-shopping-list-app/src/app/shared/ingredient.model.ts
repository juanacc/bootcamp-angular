// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

//Esta declaracion de la clase correspondiente al modelo Ingredient hace lo mismo que arriba. Esta forma de hacerlo es propia de typescript
export class Ingredient {
    constructor(public name: string, public amount: number) { }
}