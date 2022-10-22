class Pelicula {
    id_pelicula
    titulo
    resumen
    fecha
    backgroundImagen
    poster
    constructor(id_pelicula, titulo, resumen, fecha, backgroundImagen, poster) {
        this.id_pelicula = id_pelicula
        this.titulo = titulo
        this.resumen = resumen
        this.fecha = fecha
        this.backgroundImagen = backgroundImagen
        this.poster = poster
        this._urlImagenes()
    }
    _urlImagenes() {
        this.backgroundImagen = `https://image.tmdb.org/t/p/w500${this.backgroundImagen}`
        this.poster = `https://image.tmdb.org/t/p/w500${this.poster}`
    }
    cardPelicula() {
        const card = document.createElement('div')
        const cardImg = document.createElement('div')
        const cardTitle = document.createElement('div')
        card.classList.add('card')
        cardImg.classList.add('card__img')

        const img = document.createElement('img')
        img.classList.add('card__img-poster')
        img.src = this.poster
        img.alt = this.titulo
        cardImg.appendChild(img)

        const title = document.createElement('h4')
        title.classList.add('card__title')
        title.innerHTML = this.titulo
        card.appendChild(cardImg)
        card.appendChild(title)
        return card
    }
}
const cargarPeliculas = async () => {
    try {
        const carruselPopular = document.getElementsByClassName('popular')
        const listaPeliculas = []
        const api_string = 'https://api.themoviedb.org/3/movie/popular?api_key=39a5c0430fa9ff6da60018cc92f76774&language=es-US&page=1'
        const resultado = await fetch(api_string)
        if (resultado.status === 200) {
            const datos = await resultado.json()
            datos.results.forEach(datoPelicula => {
                listaPeliculas.push(new Pelicula(datoPelicula.id, datoPelicula.title, datoPelicula.overview, datoPelicula.release_date, datoPelicula.backdrop_path, datoPelicula.poster_path))
            })
            for (i of listaPeliculas) {
                carruselPopular[0].appendChild(i.cardPelicula())
            }
        }
        else if (resultado.status === 401) {
            console.log('API Key incorrecta')
        }
        else if (resultado.status === 404) {
            console.log('Pelicula no existe')
        }
        else {
            console.log()
        }
    } catch (e) {
        console.log(e.message)
    }
}
cargarPeliculas()
