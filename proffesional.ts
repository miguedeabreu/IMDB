export class Proffesional
{
    //DEFINICION DE ATRIBUTOS

    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    // CONSTRUCTOR

    constructor (name: string, age: number, genre: string, weight: number, height: number,
                hairColor: string, eyeColor: string, race: string, isRetired: boolean,
                nationality: string, oscarsNumber: number, profession: string)
    {
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
    
    public printName ():void
    {
        console.log(this.name);
    }

    public printAge ():void
    {
        console.log(this.age);
    }

    public printGenre ():void
    {
        console.log(this.genre);
    }

    public printWeight ():void
    {
        console.log(this.weight);
    }

    public printHeight ():void
    {
        console.log(this.height);
    }

    public printHairColor ():void
    {
        console.log(this.hairColor);
    }
    
    public printEyeColor ():void
    {
        console.log(this.eyeColor);
    }

    public printRace ():void
    {
        console.log(this.race);
    }

    public printIsRetired ():void
    {
        console.log(this.isRetired);
    }

    public printNationality ():void
    {
        console.log(this.nationality);
    }

    public printOscarsNumber ():void
    {
        console.log(this.oscarsNumber);
    }

    public printProfession ():void
    {
        console.log(this.profession);
    }
}
