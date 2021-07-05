import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contadores/contador.module';
//Crear un modulo  llamado contadorModule, declacion y exportacion
// import { ContadorModule } from './contador/contador.module';
// import { ContadorComponent } from './contadores/contador/contador.component';
// import {ContadorComponent} from './contadores/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { DbzModule } from './dbz/dbz.module';





//Componentes que se utiliza
@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
    // HeroeComponent,
    // ListadoComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
