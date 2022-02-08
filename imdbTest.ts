import { Proffesional } from "./proffesional";
import { Movie } from "./movie";
import { Imdb } from "./imdb";

let pelicula1: Movie = new Movie ("Harry Potter", 2001, "Britanica", "Aventura");
 
let actor1: Proffesional = new Proffesional ("Alan Rickman", 69, "masculino", 84, 185, "gris", "café", 
                "blanco", true, "Reino Unido", 0, "actor");
    
let actor2: Proffesional = new Proffesional ("Helena Bonham Carter", 55, "femenino", 59,
                157, "castaño", "negro", "blanco", false, "Reino Unido", 0, "actriz");

let actores: Proffesional[] = [actor1, actor2];

let director1: Proffesional = new Proffesional ("David Yates", 58, "masculino", 80, 180,
                "rubio", "azul", "blanco", false, "Reino Unido", 0, "director");

let escritor1: Proffesional = new Proffesional ("J.k. Rowling", 56, "femenino", 65, 170, 
                "rubio", "azul", "blanco", false, "Reino Unido", 0, "escritora")

pelicula1.setActors(actores);
pelicula1.setDirector(director1);
pelicula1.setWriter(escritor1);
pelicula1.setLanguage("inglés");
pelicula1.setPlataform("HBO");
pelicula1.setIsMCU(false);
pelicula1.setMainCharacterName("Harry Potter");
pelicula1.setProducer("Warner Bros");
pelicula1.setDistributor("Warner Bros");

let pelicula2: Movie = new Movie ("Pretty Woman", 1990, "americana", "comedia romantica");

let actor3: Proffesional = new Proffesional ("Julia Roberts", 54, "femenino", 60, 175, 
            "castaño", "marron", "blanco", false, "USA", 1, "actriz");
    
let actor4: Proffesional = new Proffesional ("Richard Gere", 72, "masculino", 80,
                180, "gris", "negro", "blanco", false, "USA", 0, "actor");

let actores2: Proffesional[] = [actor3, actor4];

let director2: Proffesional = new Proffesional ("Garry Marshall", 81, "masculino", 75, 179,
                "gris", "azul", "blanco", true, "USA", 0, "director");

let escritor2: Proffesional = new Proffesional ("J. F. Lawton", 61, "masculino", 85, 174, 
                "castaño", "marron", "blanco", false, "USA", 0, "guionista")

pelicula2.setActors(actores2);
pelicula2.setDirector(director2);
pelicula2.setWriter(escritor2);
pelicula2.setLanguage("inglés");
pelicula2.setPlataform("Disney+");
pelicula2.setIsMCU(false);
pelicula2.setMainCharacterName("Vivian Ward");
pelicula2.setProducer("Toucstone Pictures");
pelicula2.setDistributor("Walt Disney Studios");

let peliculas: Movie[] = [pelicula1, pelicula2];

let prueba: Imdb = new Imdb(peliculas);

console.log(prueba);