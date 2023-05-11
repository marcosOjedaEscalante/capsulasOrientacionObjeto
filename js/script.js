class Persona{

    constructor(rut = 'Sin rut', nombre = 'Sin nombre', apellido = 'Sin apellido'){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get rut(){
        return `${this._rut}`;
    }

    set rut(rut){
        this._rut = rut;
    }

    get nombre(){
        return `${this._nombre}`.toUpperCase();
    }

    set nombre(nombre){
        const regex = new RegExp(/[a-z]/,'gi');
        if(regex.test(nombre)){
            this._nombre = nombre;
        }
    }

    get apellido(){
        return `${this._apellido}`;
    }

    set apellido(apellido){
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

personaUno.nombre = '40';
console.log(personaUno.nombre);
personaUno.nombre = 'Joaquín';
console.log(personaUno.nombre);

personaDos._nombre = '60adkfhasd'
console.log(personaDos._nombre);