import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablas',
  imports: [CommonModule],
  templateUrl: './tablas.html',
  styleUrl: './tablas.css',
})
export class Tablas {

  mostrarEducacion: boolean = false;

  toggleEducacion() {
    this.mostrarEducacion = !this.mostrarEducacion;
  }

}


