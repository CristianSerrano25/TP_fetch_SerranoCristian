# TP_fetch_SerranoCristian

## Descripción

La aplicación realiza una solicitud a la API Rick and Morty para obtener los atributos del Objeto que contiene a los personajes de la serie. Luego,se agrega contenido HTML para mostrarlos en una galería. Cada personaje se presenta con su imagen, nombre, especie y estado.

## Para realizar lo mencionado anteriormente:

Se hizo uso del fetch() el cual hara una peticion a la API:

    const link = "https://rickandmortyapi.com/api/character";

    const respuesta = await fetch(link);
            const info = await respuesta.json();
            console.log(info);

Lo variable info retorna esto:
    {
    "info": {4 items},
    "results": [20 items] //Array que contiene a los personajes en forma de objetos
    }

const personajes = info.results;  //Se accede a la propiedad resultados que contiene a los personajes

Por ejemplo el primer objeto que representa a un personaje seria el siguiente:

    {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {2 items},
    "location": {2 items},
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [51 items],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
    },

Para mostrar en pantalla una tarjeta con la imagen del personaje accederemos de la siguiente forma al valor del atributo:

     const personajeHTML = `              
                <div class="innerCont">
                    <img src="${personaje.image}">
                </div>
            `;
    elgaleria.innerHTML += personajeHTML;

