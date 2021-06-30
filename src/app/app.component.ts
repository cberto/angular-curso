import { Component } from '@angular/core';

//Decorador
@Component({
  //nombre componente
  selector: 'app-root',
  //si tiene cotraparte de html
  templateUrl: 'app.component.html'

  //Definir temple o string, coloca eso
  // template:'<span>Berto</span>'
  //string multilinea
  // template:`
  // <h1>Hola de nuevo</h1>
  // `

})
export class AppComponent {

  // sumar(){
  // this.numero += 1;
  // }

  //   restar(){
  // this.numero -= 1;
  // }
}
