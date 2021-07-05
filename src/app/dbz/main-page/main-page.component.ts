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

  //Arreglos de personajes
  personajes: Personaje[] =[
    {
      nombre:'Goku',
      poder: 1500
    },
    {
      nombre:'Vegeta',
      poder: 1455
    },
  ];

nuevo: Personaje={
  nombre:'Maetro',
  poder: 14,
}

agregarNuevoPersonaje(argumento: Personaje){
  // console.log(argumento);
  this.personajes.push(argumento);
}

//def prop, inyeccion de dependencies
constructor(private dbzService: DbzService){

}
}
