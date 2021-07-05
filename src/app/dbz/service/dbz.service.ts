//Servicios

import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

//clase que se puede inyectar
//servicio para quien lo requiera
@Injectable()
export class DbzService{
    //Arreglos de personajes
    private _personajes: Personaje[] =[
      {
        nombre:'Goku',
        poder: 1500
      },
      {
        nombre:'Vegeta',
        poder: 1455
      },
    ];
    get personajes(): Personaje[]{
      //separa cada uno de los elementos
      return [...this._personajes];
    }
  constructor(){
    // console.log('Servico inicializado');
  }


    //añadir personajes
    agregarPersonaje (personaje: Personaje){
      this._personajes.push(personaje);
    }


}
