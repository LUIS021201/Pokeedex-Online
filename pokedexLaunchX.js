

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
            
            actualizarInfo(data);
          
        }
    });
}

function setDefault(){
    document.getElementById("pokeImg").src = "./img/noEncontrado.jpg";
}


function actualizarInfo(data) {
    console.log(data);
    actuNombre(data);
    actuImagen(data);
    actuTipo(data);
    mostrarStats(data);
    mostrarHabilidades(data);
}
function mostrarHabilidades(data){
    let listaHabi = data.abilities;
    let divMovi = document.getElementById("cuadricula_movimientos");
    divMovi.innerHTML = "";
    let habiliadad;
    for (let i = 0; i < listaHabi.length; i++) {
        habiliadad = document.createElement("h5");
        habiliadad.innerHTML = formatString(listaHabi[i].ability.name);
        habiliadad.className = "habilidad"
        divMovi.appendChild(habiliadad);
    }
    
}

function mostrarStats(data){
    document.getElementById("hp").value = data.stats[0].base_stat;
    document.getElementById("attack").value = data.stats[1].base_stat;
    document.getElementById("defense").value = data.stats[2].base_stat;
    document.getElementById("special-attack").value = data.stats[3].base_stat;
    document.getElementById("special-defense").value = data.stats[4].base_stat;
    document.getElementById("speed").value = data.stats[5].base_stat;
    document.getElementById("hp_num").innerHTML = data.stats[0].base_stat;
    document.getElementById("attack_num").innerHTML = data.stats[1].base_stat;
    document.getElementById("defense_num").innerHTML = data.stats[2].base_stat;
    document.getElementById("special-attack_num").innerHTML = data.stats[3].base_stat;
    document.getElementById("special-defense_num").innerHTML = data.stats[4].base_stat;
    document.getElementById("speed_num").innerHTML = data.stats[5].base_stat;
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
function actuNombre(data){
    let nombre = data.name
    const etiqueta = document.getElementById("nombrePokemon");
    nombre = formatString(nombre)
    etiqueta.innerHTML = "Nombre: "+nombre;
}

const actuImagen = (data) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = data.sprites.front_default;
}