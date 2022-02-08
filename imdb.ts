import { Proffesional } from "./proffesional";
import { Movie } from "./movie";

export class Imdb
{
    //DEFINICION DE ATRIBUTOS

    public peliculas: Movie[];

    // CONSTRUCTOR

    constructor (myArray: Movie[])
    {
        this.peliculas = myArray;
    }
}