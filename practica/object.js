const libro = {
    titulo: 'Martin Fierro',
    autor: 'José Hernandez',
    añoDePublicacion: 1872,
    descripcion: function () {
        return `El libro "${libro.titulo}" fue escrito por ${libro.autor}`;
    }
}

const direccion = {
    calle: 'San Martin',
    ciudad: 'Concepción del Uruguay',
    pais: 'Argentina'
}

const estudiante = {
    nombre: 'Pedro',
    edad: 24,
    direccion: direccion
}

const producto = {
    nombre: 'Funko',
    precio: 19000,
    disponible: true
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}
console.log('Antes de eliminar disponible', producto);

delete producto.disponible;

console.log('Despues de eliminar disponible', producto);
/*
function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad);
}


console.log(tienePropiedad(producto, "precio"));
console.log(tienePropiedad(producto, "color"));
*/
///console.log(libro.descripcion());