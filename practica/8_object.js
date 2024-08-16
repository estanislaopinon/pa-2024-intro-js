/*Combinar Objetos:
○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
en un nuevo objeto. Imprime el resultado.*/

const persona1 = {
    nombre: 'Juan',
    edad: 30
};

const persona2 = {
    profesion: 'Piloto',
    ciudad: 'Bariloche'
};

const personaCombinada = Object.assign({}, persona1, persona2);

console.log(personaCombinada);