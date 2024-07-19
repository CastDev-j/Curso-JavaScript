console.log('Ejercicio 28: Películas');
class Pelicula {
    static #IMBDRegex = /^[a-z]{2}[0-9]{7}$/;
    static #caracteresTitulo = 100;
    static #caracteresDirector = 50;
    static #caracteresFecha = 4;
    static #generosValidos = [
        'Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
        'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance',
        'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western'
    ];

    #IDenIMDB;
    #titulo;
    #director;
    #anioEstreno;
    #pais;
    #generos;
    #calificacion;

    constructor(IDenIMDB, titulo, director, anioEstreno, pais, generos, calificacion) {
        this.#IDenIMDB = this.#isIMDBValid(IDenIMDB);
        this.#titulo = this.#isTituloValid(titulo);
        this.#director = this.#isDirectorValid(director);
        this.#anioEstreno = this.#isAnioEstrenoValid(anioEstreno);
        this.#pais = this.#isArrayValid(pais);
        this.#generos = this.#isGeneroValid(this.#isArrayValid(generos));
        this.#calificacion = this.#isCalificacionValid(calificacion);
    }

    #isIMDBValid(IDenIMDB) {
        if (Pelicula.#IMBDRegex.test(IDenIMDB)) {
            return IDenIMDB;
        } else {
            throw new Error(`El ID ${IDenIMDB} no es válido`);
        }
    }

    #isTituloValid(titulo) {
        if (titulo.length <= Pelicula.#caracteresTitulo) {
            return titulo;
        } else {
            throw new Error(`El título ${titulo} no es válido`);
        }
    }

    #isDirectorValid(director) {
        if (director.length <= Pelicula.#caracteresDirector) {
            return director;
        } else {
            throw new Error(`El director ${director} no es válido`);
        }
    }

    #isAnioEstrenoValid(anioEstreno) {
        if (anioEstreno.toString().length == Pelicula.#caracteresFecha) {
            return anioEstreno;
        } else {
            throw new Error(`El año de estreno ${anioEstreno} no es válido`);
        }
    }

    #isGeneroValid(generos) {
        if (generos.every(genero => Pelicula.#generosValidos.includes(genero))) {
            return generos;
        } else {
            throw new Error(`El género ${generos} no es válido`);
        }
    }

    #isArrayValid(array) {
        if (Array.isArray(array)) {
            return array;
        } else {
            throw new Error(`El valor ${array} no es un array`);
        }
    }

    #isCalificacionValid(calificacion) {
        if (calificacion >= 0 && calificacion <= 10) {
            return calificacion;
        } else {
            throw new Error(`La calificación ${calificacion} no es válida`);
        }
    }

    static generosValidos() {
        return Pelicula.#generosValidos;
    }

    getFichaTecnica() {
        return `ID: ${this.#IDenIMDB} - Título: ${this.#titulo} - Director: ${this.#director} - Año de estreno: ${this.#anioEstreno} - País: ${this.#pais} - Géneros: ${this.#generos} - Calificación: ${this.#calificacion}`;
    }
}

try {
    console.table(Pelicula.generosValidos());
    const pelicula = new Pelicula('tt1234567', 'Titanic', 'James Cameron', 1997, ['Estados Unidos'], ['Action', 'Adult'], 9.5);
    console.log(pelicula);
    console.log(pelicula.getFichaTecnica());
} catch (error) {
    console.error(error);
}

const peliculas = [
    ['tt1234567', 'Titanic', 'James Cameron', 1997, ['Estados Unidos'], ['Action', 'Romance'], 9.5],
    ['tt7654321', 'Inception', 'Christopher Nolan', 2010, ['Estados Unidos'], ['Adventure', 'Sci-Fi'], 8.8],
    ['tt2345678', 'The Godfather', 'Francis Ford Coppola', 1972, ['Estados Unidos'], ['Crime', 'Drama'], 9.2]
];

function crearPeliculas(IDenIMDB, titulo, director, anioEstreno, pais, generos, calificacion) {
    try {
        return new Pelicula(IDenIMDB, titulo, director, anioEstreno, pais, generos, calificacion);
    } catch (error) {
        console.error(`La película ${titulo} no se ha podido crear:`, error);
    }
}

let objPeliculas = [];
for (const datosPelicula of peliculas) {
    let pelicula = crearPeliculas(...datosPelicula);
    if (pelicula) 
        objPeliculas.push(pelicula);
}

console.log(objPeliculas);

objPeliculas.forEach(pelicula => {
    console.log(pelicula.getFichaTecnica());
});
