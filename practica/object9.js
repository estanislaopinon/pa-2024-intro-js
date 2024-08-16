/*Copiar Objetos:
○ Crea una copia profunda del objeto estudiante utilizando el método
JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
original no haya sido alterado.*/

const estudiante = {
    nombre: 'Juan',
    edad: 23,
    nivel: 'superior'
};

// Crear una copia profunda del objeto estudiante
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));
// Modificar la copia
copiaEstudiante.nombre = 'LAURA';
copiaEstudiante.edad = 25;


// Verificar que el objeto original no haya sido alterado
console.log("Objeto original: ", estudiante);
console.log("Copia modificada: ", copiaEstudiante);