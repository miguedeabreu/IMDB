import { Proffesional } from "./proffesional";
import { Movie } from "./movie";

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

pelicula1.printMovie();
