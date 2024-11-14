const { leer, registrar } = require('./controllers/operaciones');

const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === 'registrar' && argumentos.length === 6) {
    const [nombre, edad, tipo, color, enfermedad] = argumentos.slice(1);
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer' && argumentos.length === 1) {
    console.log(leer());
} else {
    console.error('ERROR: Uso incorrecto de argumentos');
    console.error(' node index.js leer');
    console.error(
        ' node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>'
    );
    process.exit(1);
}
