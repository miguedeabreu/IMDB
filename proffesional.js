"use strict";
exports.__esModule = true;
exports.Proffesional = void 0;
var Proffesional = /** @class */ (function () {
    // CONSTRUCTOR
    function Proffesional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    // DEFINICION DE METODOS PUBLICOS
    Proffesional.prototype.printProffesional = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.genre);
        console.log(this.weight);
        console.log(this.height);
        console.log(this.hairColor);
        console.log(this.eyeColor);
        console.log(this.race);
        console.log(this.isRetired);
        console.log(this.nationality);
        console.log(this.oscarsNumber);
        console.log(this.profession);
    };
    return Proffesional;
}());
exports.Proffesional = Proffesional;
