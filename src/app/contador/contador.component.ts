import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'contador-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  @Input()
  valorContador: number = 0;

  @Output() eventoContador = new EventEmitter<number>();
  valorCero: number = 0;

  incrementar(): void {
    this.valorContador++;
    this.eventoContador.emit(this.valorContador);
  }

  decrementar(): void {
    this.valorContador--;
    this.eventoContador.emit(this.valorContador);
  }

  resetear() {
    this.valorContador = this.valorCero;
    this.eventoContador.emit(this.valorContador);
  }
}
