import { Persona } from "./persona.js";

export class Profesor extends Persona{

    constructor(rut, nombre, apellido, sueldo){
        super(rut, nombre, apellido);
        this._sueldo = sueldo;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        const regex = new RegExp(/[0-9]+/,'g');
        if(regex.test(String(sueldo))){
            this._sueldo = sueldo;
        }
    }

    tomarAsistencia(){
        console.log(`El/la profesor/a ${this.nombre} está tomando asistencia`);
    }

}