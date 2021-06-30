//modulo de heroes
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
  //que componentes contiene
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],
  //que cosas sean visibles/publicas
  //Arreglos
  exports:[
    ListadoComponent
  ],
  imports:[
//Van modulos
  CommonModule

  ]
})
export class HeroesModule{}
