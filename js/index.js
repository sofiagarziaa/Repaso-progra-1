console.log("index.js");
fetch(`https://rickandmortyapi.com/api/character`)
    .then(function(response){
        return response.json();
    })
    .then(function(info){
        console.log(info.results);
        let personajes = info.results;
        let seccion = document.querySelector(".characterList");
        let characters = "";

        for (let i = 0; i < personajes.length; i++){
            characters  += `<article class="personita">
                                <img src="${personajes[i].image}" alt="${personajes[i].name}">
                                <p>Name: ${personajes[i].name}</p>
                                <p>Status: ${personajes[i].status}</p>
                                <a href="detalle.html?id=${personajes[i].id}">Ver más</a>
                            </article>`;
        }
        console.log(characters);

        seccion.innerHTML = characters;

    })
    .catch(function(error){
        console.error("El error es: " + error); 
    });
