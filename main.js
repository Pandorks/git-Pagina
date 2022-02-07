//alert ("Hola mundo");

//variables

var nombre="Gabriel"
var numer="192"

var union=nombre + " " + numer;
/*
//mostrar algo
document.write(union)

//Mostrar variables de algunas formas

// document.getElementById("datos")
var datos =document.getElementById("datos")

//mostrar datos de la variable "datos" con html
// innerHTMLsi lo usamos tal cual nos destruye el anterior dato
// innerHTML += agrega mas contenido
datos.innerHTML =`
<h1>Hola : ${nombre}</h1>
`;

if(numer >= 190)
{
datos.innerHTML += `
    <h2>Sos una persona alta</h2>
    <h3>tu altura es : ${numer}</h3>
`
}

// Bucle

for(var i = 0; i <= 4; i++)
{
    //bloque de contrucciones hasta que termine
    datos.innerHTML += `<h2>Estamo en el año ${i}</h2>`
}
*/
//funciones

function MuestraMiNombre (nombre,numer){
    
    var misDatos=`
        <h1>Hola : ${nombre}</h1>
        <h1>Hola : ${numer}</h1>
    `;

    // sacar elemento en este caso mis datos
    return misDatos;
}


// impresion

function imprimir(){
    var datos =document.getElementById("datos")
    datos.innerHTML= MuestraMiNombre("Gabriel Vega", 140);
}

// imprision de funcion 
MuestraMiNombre("Gabriel Vega", 140)

imprimir();

// variables de varias cosas
//ARRAYS

var nombres= ["Victor" , "Gabo"]

// .length >> cuenta los numeros de cada letra

/*for(i=0; i < nombres.length;i++ )
{
    document.write(nombres[i] + `<br/>`);
}
*/

//funcion de calvac se ejcuta dentro de otra

nombres.forEach(function(nombre){
    document.write(nombre + `<br/>`);
})
// otro metodo
nombres.forEach((nombre) =>{
    document.write(nombre + `<br/>`);
})
