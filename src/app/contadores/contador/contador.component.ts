import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
  <h1>{{ titulo }}</h1>
<h3>La base es: <strong> {{ base }} </strong></h3>
<button (click)="acumular( base )"> + {{ base }} </button>
<span> {{numero}} </span>
<button (click)="acumular(-base)"> - {{ base }} </button>
  `
})

//transf en componente de
export class ContadorComponent{
    //nombre proyecto
    titulo: string = 'Contador app';
    //mostrar ese titulo en el html app.component

    numero: number = 10;
    base: number = 5;

    //Metodo

    acumular(valor: number){
      this.numero += valor;
    }

}
