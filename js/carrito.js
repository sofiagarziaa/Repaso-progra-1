let recuperoStorage = localStorage.getItem("cartItems")
let lista = document.querySelector(".lista")
let characters = "";

if (recuperoStorage == null) {
    let mensaje = "Tu carrito esta vacio"
    let empty = document.querySelector(".empty")
    empty.innerText = mensaje
} else {
    carrito = [];
    carrito = JSON.parse(recuperoStorage);
    for (let i = 0; i < carrito.length; i++) {
        let id = carrito[i];
        let url = `https://rickandmortyapi.com/api/character/${id}`

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (info) {
                console.log(info);
                characters += `<article class="personita">
                                    <img src="${info.image}"alt="${info.name}">
                                    <p>Name: ${info.name}</p>
                                    <p>Status:${info.status}</p>
                                    <a href ="detalle.html?id=${info.id}"> Ver mas </a>
                                 </article>`
                lista.innerHTML = characters;
            })
            .catch(function (e) {
                console.log(e);
            })
    }
}



