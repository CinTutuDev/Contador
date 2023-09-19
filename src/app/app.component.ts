import { Component } from '@angular/core';

@Component({
  selector: 'contador-root',
  templateUrl: './app.component.html',
})

/* Componente padre/Raíz */
export class AppComponent {
  appValor: number = 3;

  aventListener(e: number): void {
    this.appValor = e;
  }
}
