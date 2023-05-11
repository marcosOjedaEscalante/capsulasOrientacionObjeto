class Persona{
    
    _rut;
    _nombre;
    _apellido;

    constructor(rut = 'Sin rut', nombre = 'Sin nombre', apellido = 'Sin apellido'){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    caminar = () => {
        console.log(`La persona ${this._nombre} ${this._apellido} se encuentra caminando`);
    }

    detenerse = () => {
        console.log(`La persona ${this._nombre} ${this._apellido} se ha detenido`);
    }

}

const personaUno = new Persona('11111111-1', 'Marcos', 'Ojeda');
const personaDos = new Persona('22222222-2', 'Antonio', 'Escalante');
const personaTres = new Persona('33333333-3', 'Mariana', 'Fonseca');

console.log(personaUno._nombre);
console.log(personaDos._nombre);
console.log(personaTres._nombre);

personaUno.caminar();
personaUno.detenerse();

personaDos.caminar();
personaDos.detenerse();

personaTres.caminar();
personaTres.detenerse();

console.log(personaUno, personaDos, personaTres);