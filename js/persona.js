export class Persona{

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