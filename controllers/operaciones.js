const { readFileSync, writeFileSync } = require('node:fs');
const path = require('node:path');

const leer = () => {
    const res = readFileSync(path.join(__dirname, '../data/citas.json'), 'utf8');
    return JSON.parse(res);
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevoRegistro = {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad,
    };
    const prevCitas = leer();
    const newCitas = [...prevCitas, nuevoRegistro];
    writeFileSync(
        path.join(__dirname, '../data/citas.json'),
        JSON.stringify(newCitas, null, 2)
    );
};

module.exports = { leer, registrar };
