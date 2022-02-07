"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    // CONSTRUCTOR
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors;
        this.director;
        this.writer;
        this.language;
        this.plataform;
        this.isMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
    }
    // DEFINICION DE METODOS PUBLICOS
    // SETTERS
    Movie.prototype.setActors = function (x) {
        this.actors = x;
    };
    Movie.prototype.setDirector = function (x) {
        this.director = x;
    };
    Movie.prototype.setWriter = function (x) {
        this.writer = x;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.setPlataform = function (plataform) {
        this.plataform = plataform;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    //
    Movie.prototype.printMovie = function () {
        console.log("Movie - " + this.title);
        console.log("Release Year - " + this.releaseYear);
        console.log("The actors are:");
        console.log(this.actors);
        console.log("Nacionality - " + this.nacionality);
        console.log("Director:");
        console.log(this.director);
        console.log("Writer:");
        console.log(this.writer);
        console.log("Language - " + this.language);
        console.log("Plataform - " + this.plataform);
        console.log("Is MCU - " + this.isMCU);
        console.log("Main Character Name - " + this.mainCharacterName);
        console.log("Producer - " + this.producer);
        console.log("Distribuitor - " + this.distributor);
        console.log("Genre - " + this.genre);
    };
    return Movie;
}());
exports.Movie = Movie;
