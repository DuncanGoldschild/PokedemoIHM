import { defineBase } from '@angular/core/src/render3';

export class Pokemon {
    id : String;
    name : String;
    abilities? : Array<String>
    sprites? : {
        frontdefault : String,
        backdefault : String
    }
    stats? : {
        speed : String,
        specialdefense : String,
        specialattack : String,
        defense : String,
        attack : String,
        hp : String
    }
    types? : Array<String>
    height? : String
    weight? : String
}
