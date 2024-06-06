const link = "https://rickandmortyapi.com/api/character";

const procesarfetch = async () => {
    try {
        const respuesta = await fetch(link);
        const info = await respuesta.json();
        console.log(info);
        const personajes = info.results;

        const elgaleria = document.getElementById("galeria");
        personajes.forEach((personaje) => {
            // Crear el contenido HTML para cada personaje
            const personajeHTML = `              
                <div class="innerCont">
                    <img src="${personaje.image}">
                    <p>Name: ${personaje.name}</p>
                    <p>Species: ${personaje.species}</p>
                    <p>Status: ${personaje.status}</p>
                </div>
            `;
            // Agregar el contenido HTML del personaje a la galería
            elgaleria.innerHTML += personajeHTML;
        });
    } catch (error) {
        console.log("Se produjo un error");
    }
}

procesarfetch();


