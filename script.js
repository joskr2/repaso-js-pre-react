const tituloPokemon = document.querySelector( '#tituloPokemon' );
const imagenPokemon = document.querySelector( '#imagenPokemon' );
const nombrePokemon = document.querySelector( '#nombrePokemon' );
const idPokemon = document.querySelector( '#idPokemon' );
const tipoPokemon = document.querySelector( '#tipoPokemon' );
const inputNombre = document.querySelector( '#inputNombre' );
const inputId = document.querySelector( '#inputId' );
const btnBuscar = document.querySelector( '#botonBuscar' );

let baseUrlPokemon = 'https://pokeapi.co/api/v2/pokemon';

const obtenerPokemon = async ( search ) => {
  try {
    if ( typeof search === 'number' || !isNaN( search ) || search !== '' || search !== null || search !== undefined || typeof search === 'string' ) {
      const url = `${baseUrlPokemon}/${search}`;
      const respuesta = await fetch( url );
      const data = await respuesta.json();
      return data;
    }
  } catch ( error ) {
    console.log( error );
  }
}

const mostrarPokemon = async ( search ) => {
  const pokemon = await obtenerPokemon( search );
  console.log( pokemon );
  if ( pokemon ) {
    tituloPokemon.textContent = `${pokemon.name}`;
    imagenPokemon.src = pokemon.sprites.front_default;
    nombrePokemon.textContent = pokemon.name;
    idPokemon.textContent = pokemon.id;
    tipoPokemon.textContent = pokemon.types[ 0 ].type.name;
  }
}

const buscarPokemon = () => {
  const search = inputNombre.value.toLowerCase() || inputId.value.toLowerCase();
  console.log( search );
  mostrarPokemon( search );
}


btnBuscar.addEventListener( 'click', (event) => {
  event.preventDefault();
  buscarPokemon();
} );