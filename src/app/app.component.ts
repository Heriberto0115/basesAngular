import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';
  pelicula={
    nombre: 'Nacho Libre',
    fechaLanzamiento:new Date(),
    precio: 69  
  }

  duplicarNumero(valor:number):number{
    return valor*2;
  }
}
