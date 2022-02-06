import { Proffesional } from "./proffesional";

let persona1 = new Proffesional ("Alan Rickman", 69, "masculino", 84, 185, "gris", "café", 
                "blanco", true, "Reino Unido", 0, "actor")
                
console.log(persona1);

persona1.printName();
persona1.printAge();
persona1.printGenre();
persona1.printWeight();
persona1.printHeight();
persona1.printHairColor();
persona1.printEyeColor();
persona1.printRace();
persona1.printIsRetired();
persona1.printNationality();
persona1.printOscarsNumber();
persona1.printProfession();

let persona2 = new Proffesional ("Julia Roberts", 54, "femenino", 55, 175, "castaño",
                "marron", "blanca", false, "USA", 1, "actriz")

console.log(persona2);

persona2.printName();
persona2.printAge();
persona2.printGenre();
persona2.printWeight();
persona2.printHeight();
persona2.printHairColor();
persona2.printEyeColor();
persona2.printRace();
persona2.printIsRetired();
persona2.printNationality();
persona2.printOscarsNumber();
persona2.printProfession();