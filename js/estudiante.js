import { Persona } from "./persona.js";

export class Estudiante extends Persona{

    constructor(rut, nombre, apellido, subsidio){
        super(rut, nombre, apellido);
        this._subsidio = subsidio;
    }

    get subsidio(){
        return this._subsidio;
    }

    set subsidio(subsidio){
        const regex = new RegExp(/[0-9]+/,'g');
        if(regex.test(String(subsidio))){
            this._subsidio = subsidio;
        }
    }

}