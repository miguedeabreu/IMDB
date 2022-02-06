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
    Proffesional.prototype.printName = function () {
        console.log(this.name);
    };
    Proffesional.prototype.printAge = function () {
        console.log(this.age);
    };
    Proffesional.prototype.printGenre = function () {
        console.log(this.genre);
    };
    Proffesional.prototype.printWeight = function () {
        console.log(this.weight);
    };
    Proffesional.prototype.printHeight = function () {
        console.log(this.height);
    };
    Proffesional.prototype.printHairColor = function () {
        console.log(this.hairColor);
    };
    Proffesional.prototype.printEyeColor = function () {
        console.log(this.eyeColor);
    };
    Proffesional.prototype.printRace = function () {
        console.log(this.race);
    };
    Proffesional.prototype.printIsRetired = function () {
        console.log(this.isRetired);
    };
    Proffesional.prototype.printNationality = function () {
        console.log(this.nationality);
    };
    Proffesional.prototype.printOscarsNumber = function () {
        console.log(this.oscarsNumber);
    };
    Proffesional.prototype.printProfession = function () {
        console.log(this.profession);
    };
    return Proffesional;
}());
exports.Proffesional = Proffesional;
