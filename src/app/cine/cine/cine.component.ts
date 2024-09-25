import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  nombre: string = '';
  compradores: number = 1;
  tarjetaCinePro: string = 'no';
  boletos: number = 1;
  total: number = 0;
  mensajeDescuento: string = '';
  mensajeError: string = '';


  calcularTotal(): void {
    const precioPorBoleto = 12;
    const maxBoletosPorPersona = 7;
    const maxBoletosPermitidos = this.compradores * maxBoletosPorPersona;


    this.mensajeError = '';
    this.mensajeDescuento = '';
    this.total = 0;

    if (this.boletos > maxBoletosPermitidos) {
      this.mensajeError = `No puedes comprar más de ${maxBoletosPermitidos} boletos para ${this.compradores} comprador(es).`;
      return;
    }

    let precioTotal = this.boletos * precioPorBoleto;

    let descuento = 0;
    if (this.boletos >= 5) {
      descuento = 0.15;
      this.mensajeDescuento = "Descuento del 15% por comprar 5 o más boletos.";
    } else if (this.boletos >= 3) {
      descuento = 0.10;
      this.mensajeDescuento = "Descuento del 10% por comprar entre 3 y 4 boletos.";
    } else {
      this.mensajeDescuento = "No hay descuento aplicado.";
    }

    let precioConDescuento = precioTotal - (precioTotal * descuento);

    if (this.tarjetaCinePro === 'si') {
      precioConDescuento = precioConDescuento * 0.90;
      this.mensajeDescuento += " Además, tienes un 10% de descuento adicional por la Tarjeta Cinéco.";
    }

    this.total = Number(precioConDescuento.toFixed(2));
  }
}