//Servicios

import { Injectable } from "@angular/core";

//clase que se puede inyectar
//servicio para quien lo requiera
@Injectable()
export class DbzService{
  constructor(){
    console.log('Servico inicializado');
  }

}
