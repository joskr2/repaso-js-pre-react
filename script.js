// arrays

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

arrayNumeros[0] = 100;
// console.log(arr);

arrayNumeros.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
} );

arrayNumeros.forEach(elemento =>{
    elemento = elemento + 1;
    console.log(elemento);
})

arrayNumeros.map(elemento => {
    console.log(elemento);
})  

let paises = ['Mexico', 'Colombia', 'Peru', 'Argentina', 'Chile', 'Ecuador', 'Venezuela', 'Bolivia', 'Uruguay', 'Paraguay'];

let paisesFiltrados = paises.filter(pais => !(pais.length > 6));

console.log(paisesFiltrados); // [ 'Mexico', 'Peru', 'Chile', 'Ecuador', 'Bolivia' ]


arrayNumeros.push(11);
console.log(arrayNumeros);

arrayNumeros.pop();
console.log(arrayNumeros);

arrayNumeros.slice(0, 5);
console.log(arrayNumeros); // [ 100, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

arrayNumeros.splice(-1, 1); // elimina el ultimo elemento

arrayNumeros.splice(0, 1); // elimina el primer elemento


let miNombre = 'Juana';
var miNombre2 = 'Juan';

miNombre.length; // 4

miNombre.indexOf('a'); // 2

miNombre.includes('a'); // true

miNombre.startsWith('J'); // true

miNombre.endsWith('n'); // true


let miObjeto = {
    nombre: 'Juana',
    apellido: 'Lopez',
    edad: 25,
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    hobbies: ['correr', 'leer', 'pintar']
}

let objetoAStr = JSON.stringify(miObjeto);

console.log(objetoAStr); // {"nombre":"Juana","apellido":"Lopez","edad":25,"direccion":{"calle":"Av. Siempre Viva","numero":123},"hobbies":["correr","leer","pintar"]}

let strAObjeto = JSON.parse(objetoAStr);
console.log(strAObjeto); // { nombre: 'Juana', apellido: 'Lopez', edad: 25, direccion: { calle: 'Av. Siempre Viva', numero: 123 }, hobbies: [ 'correr', 'leer', 'pintar' ] }



// rest operator


function sumar(...numeros){
    
    let resultado = 0;

    for(let i = 0; i < numeros.length; i++){
        resultado += numeros[i];
    }

    console.log(resultado);
}

function sumar2(valor,valor2,valor3,valor4){
    console.log(arguments);
}

sumar(1,2,3,4,5,6,7,8,9,10); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// spread operator

let arr1 = [1,2,3,4,5];

function  useSpreadOperator(...numeros){
    console.log(numeros);
}

useSpreadOperator(...arr1); // [ 1, 2, 3, 4, 5 ]


let miNombre3 = 'Juana de arco';

let miNombreArr = [...miNombre];

console.log(miNombreArr); // [ 'J', 'u', 'a', 'n', 'a', ' ', 'd', 'e', ' ', 'a', 'r', 'c', 'o' ]


function miSaludo (...nombre){

    console.log(`Hola ${nombre}`);
}

miSaludo('Juana', 'de', 'Arco'); // Hola Juana,de,Arco

miSaludo('Josue', 'Patricio') // Hola Josue,Patricio



// destructuring

let miObjeto2 = {
    nombre: 'Juana',
    apellido: 'Lopez',
    edad: 25,
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    hobbies: ['correr', 'leer', 'pintar']
}

let {nombre, apellido, edad, direccion, hobbies} = miObjeto2;

console.log(nombre, apellido, edad, direccion, hobbies); // Juana Lopez 25 { calle: 'Av. Siempre Viva', numero: 123 } [ 'correr', 'leer', 'pintar' ]



// promises

let miPromesa = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Todo bien!');
    }, 3000);
} );

miPromesa.then(resultado => {
    console.log(resultado);
} ).catch(error => {
    console.log(error);
});


// lamadas asincronas

let miUrlPokemon = 'https://pokeapi.co/api/v2/pokemon/1/';

fetch(miUrlPokemon).then( res => res.json() ).then( data => {
    console.log(data);
}).catch( error => {
    console.error(error);
});


// async await

async function miLLamadaAsincrona(url){
    let respuesta = await fetch(url);
    let data = await respuesta.json();
    console.log(data);
    console.log("funcion Mi llamada asincrona")
    return data;
}

miLLamadaAsincrona(miUrlPokemon).then( data => {
    console.log(data);
    console.log("funcion Mi llamada asincrona 2")
    return data;
}
);



// console.log(miLLamada); // Promise { <pending> }


class Miclase {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`Hola ${this.nombre} ${this.apellido}`);
    }
}

// prototipos en JS

let miPrototipoString = String.prototype;

console.log(miPrototipoString); // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}




setTimeout(() => {
    console.log('Hola mundo');
}, 3000);

let miPromesa2 = new Promise((resolve, reject) => {
    resolve('Todo bien!')
    reject('Todo mal!');
})

miPromesa2.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.error(error);
})

let miPromesaFallida = new Promise((resolve, reject) => {
    try {
        // resolve('Todo bien!')
        console.log('Todo bien!');
    } catch (error) {
        reject('Todo mal!');
        console.error(error);
    }
})


miPromesaFallida.then(resultado => {
  console.log("Mi promesa fallida",resultado);
})


// callbacks

function miCallback(){
    console.log('Hola mundo');
}
setTimeout(miCallback, 3000);


setTimeout(() => {
    console.log('Hola mundo');
}, 3000);


