import { Proffesional } from "./proffesional";

export class Movie
{
    //DEFINICION DE ATRIBUTOS

    public title: string;
    public releaseYear: number;
    public actors: Proffesional[];
    public nacionality: string;
    public director: Proffesional;
    public writer: Proffesional;
    public language: string;
    public plataform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    // CONSTRUCTOR

    constructor (title: string, releaseYear: number, nacionality: string, genre: string)
    {
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

    setActors (x: Proffesional[])
    {
        this.actors = x;
    }

    setDirector (x: Proffesional)
    {
        this.director = x;
    }

    setWriter (x: Proffesional)
    {
        this.writer = x;
    }

    setLanguage (language: string)
    {
        this.language = language;
    }

    setPlataform (plataform: string)
    {
        this.plataform = plataform;
    }

    setIsMCU (isMCU: boolean)
    {
        this.isMCU = isMCU;
    }

    setMainCharacterName (mainCharacterName: string)
    {
        this.mainCharacterName = mainCharacterName;
    }

    setProducer (producer: string)
    {
        this.producer = producer;
    }

    setDistributor (distributor: string)
    {
        this.distributor = distributor;
    }

    //

    public printMovie ()
    {
        console.log("Movie - " + this.title);
        console.log("Release Year - " + this.releaseYear);
        console.log("The actors are:")
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
    }
}