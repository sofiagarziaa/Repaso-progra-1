let qs = location.search;
console.log("query string: ", qs);
let qsto = new URLSearchParams (qs);
let id =qsto.get("id");

fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function(response){
        return response.json();
    })
    .then(function(info){
        console.log(info);
        let title = document.querySelector("h1");
        let image = document.querySelector("img");
        let status = document.querySelector(".status");
        let especie = document.querySelector(".especie");

        title.innerText = info.name;
        image.src = info.image;
        status.innerText += info.status;
        especie.innerText += info.species;

    })
    .catch(function(error){
        console.log( error)
    })

    let carrito = [];
    let recuperoStorage =localStorage.getItem("cartItems")

    if (recuperoStorage !=null){
        carrito = JSON.parse(recuperoStorage)
    
    }

    let fav = document.querySelector(".fav")

    fav.addEventListener("click", function(e){
        e.preventDefault();
        carrito.push(id)

        let carStr = JSON.stringify(carrito)
        localStorage.setItem("cartItems", carStr)

        console.log("carrito: ", carrito);
        console.log("localStorage: ", localStorage);
    })



