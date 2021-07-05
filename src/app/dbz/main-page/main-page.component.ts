import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

// interface Personaje{
//   nombre:string;
//   poder:number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


//val por defecto
nuevo: Personaje={
  nombre:'Maetro',
  poder: 14,
}
// get personajes(): Personaje[] {
//   return this.dbzService.personajes;
// }

// agregarNuevoPersonaje(argumento: Personaje){
//   // console.log(argumento);
//   // this.personajes.push(argumento);
// }

//def prop, inyeccion de dependencies
constructor(){
}
}
