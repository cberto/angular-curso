import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
//OnInit primer ciclo de vida automatica
export class ListadoComponent  {

heroes: string[] =['Spiderman', 'Ironman', 'Hulk','Thor','Capitan America'];
//mostrar heroe
heroeBorrado: string='';

borrarHeroe() {

  // this.heroes = [];
  // const heroeBorrado= this.heroes.shift();
  // console.log(heroeBorrado);
  this.heroeBorrado= this.heroes.shift() || '';

}
}
