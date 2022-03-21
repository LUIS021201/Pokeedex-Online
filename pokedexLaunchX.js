var nombre = 'hola';

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status !== 200) {
            console.log(res);
           setDefault()
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            nombre = pokeName
            actualizarInfo(data)
          
        }
    });
}

function setDefault(){
    document.getElementById("pokeImg").src = "./img/noEncontrado.jpg"
}


function actualizarInfo(data) {
    console.log(data);
    actuNombre()
    actuImagen(data);
    actuTipo(data)
    mostrarStats(data);
}

function mostrarStats(data){
    document.getElementById("hp").value = data.stats[0].base_stat;
    document.getElementById("attack").value = data.stats[1].base_stat;
    document.getElementById("defense").value = data.stats[2].base_stat;
    document.getElementById("special-attack").value = data.stats[3].base_stat;
    document.getElementById("special-defense").value = data.stats[4].base_stat;
    document.getElementById("speed").value = data.stats[5].base_stat;
}

function formatString(cadena){
     cadena = cadena.toLowerCase();
    let letra = cadena.charAt(0).toUpperCase();
    cadena = cadena.slice(1);
    cadena = letra + cadena;
    return cadena;
}

function actuTipo(data) {
    const etiTipo = document.getElementById("tipoPokemon");
    let tipo = data.types[0].type.name;
    tipo = formatString(tipo)
    etiTipo.innerHTML = "Tipo: "+ tipo;
    console.log()
}
function actuNombre(){
    const etiqueta = document.getElementById("nombrePokemon");
    nombre = formatString(nombre)
    etiqueta.innerHTML = "Nombre: "+nombre;
}

const actuImagen = (data) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = data.sprites.front_default;
}