let pagina = 1
//clase pelicula
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
// section peliculas
const peliculasSection = document.getElementById('peliculas')
const cargarPeliculas = async () => {
    try {
        const listaPeliculas = []
        const api_string =`https://api.themoviedb.org/3/movie/popular?api_key=39a5c0430fa9ff6da60018cc92f76774&language=es-US&page=${pagina}`
        const resultado = await fetch(api_string)
        if (resultado.status === 200) {
            const datos = await resultado.json()
            datos.results.forEach(datoPelicula => {
                listaPeliculas.push(new Pelicula(datoPelicula.id, datoPelicula.title, datoPelicula.overview, datoPelicula.release_date, datoPelicula.backdrop_path, datoPelicula.poster_path))
            })
            for (i of listaPeliculas) {

                peliculasSection.appendChild(i.cardPelicula())
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

// botones pagina siguiente
const anterior = document.getElementsByClassName('section__button')[0]
const siguiente = document.getElementsByClassName('section__button')[1]
anterior.addEventListener('click', () =>{
    if(pagina > 1){
        while(document.getElementsByClassName('card').length > 0){
            for(nodo of document.getElementsByClassName('card')){
                nodo.remove()
            }
        }
        pagina--
        cargarPeliculas()
    }
})
siguiente.addEventListener('click', () =>{
    if(pagina < 1000){
        while(document.getElementsByClassName('card').length > 0){
            for(nodo of document.getElementsByClassName('card')){
                nodo.remove()
            }
        }
        pagina++
        cargarPeliculas()
    }
})
cargarPeliculas()