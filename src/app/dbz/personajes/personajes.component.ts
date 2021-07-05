import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {
//para llamar al componenete padre y usar sus hijos
  @Input()
//Arreglos de personajes
personajes: Personaje[]= [];

constructor(private dbzService: DbzService){

}
}
