"use strict";
exports.__esModule = true;
var proffesional_1 = require("./proffesional");
var persona1 = new proffesional_1.Proffesional("Alan Rickman", 69, "masculino", 84, 185, "gris", "café", "blanco", true, "Reino Unido", 0, "actor");
console.log(persona1);
persona1.printProffesional();
var persona2 = new proffesional_1.Proffesional("Julia Roberts", 54, "femenino", 55, 175, "castaño", "marron", "blanca", false, "USA", 1, "actriz");
console.log(persona2);
persona2.printProffesional();
