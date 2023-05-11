import { Profesor } from "./profesor.js";
import { Estudiante } from "./estudiante.js";

const profesorUno = new Profesor('11111111-1', 'Marcos', 'Ojeda', 500000);
const profesorDos = new Profesor('22222222-2', 'Fanny', 'Tineo', 500000);
const estudianteUno = new Estudiante('33333333-3', 'Camilo', 'Lavado', 60000);
const estudianteDos = new Estudiante('44444444-4', 'Hernán', 'Alvarado', 60000);
const estudianteTres = new Estudiante('55555555-5', 'Katherine', 'Gomez', 60000);

console.log(profesorUno, profesorDos, estudianteUno, estudianteDos, estudianteTres);

console.log(profesorUno.nombre);
profesorUno.nombre = '325';
console.log(profesorUno.nombre);
profesorUno.caminar();

estudianteUno.subsidio = 'Hola';
console.log(estudianteUno.subsidio);
estudianteUno.subsidio = 50;
console.log(estudianteUno.subsidio);

profesorUno.sueldo = 'Adios';
console.log(profesorUno.sueldo);
profesorUno.sueldo = 10;
console.log(profesorUno.sueldo);

profesorUno.tomarAsistencia();
profesorDos.tomarAsistencia();