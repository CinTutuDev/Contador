import { Component } from '@angular/core';

@Component({
  selector: 'contador-root',
  templateUrl: './app.component.html',
})

/* Componente padre/Raíz */
export class AppComponent {
  appValor: number = 0;

  eventListener(nuevoValor: number): void {
    this.appValor = nuevoValor;
  }
}
