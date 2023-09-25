import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador-contador',
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  @Input()
  valorContador!: number;

  @Output() eventoContador = new EventEmitter<number>();

  incrementar(): void {
    this.valorContador++;
    this.eventoContador.emit(this.valorContador);
  }

  decrementar(): void {
    this.valorContador--;
    this.eventoContador.emit(this.valorContador);
  }

  resetear() {
    this.valorContador = 0;
    this.eventoContador.emit(this.valorContador);
  }
}
