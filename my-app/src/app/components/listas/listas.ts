import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-listas',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './listas.html',
  styleUrl: './listas.css',
})
export class Listas {


   mostrarInfo: boolean = false;

  toggleContacto() {
    this.mostrarInfo = !this.mostrarInfo;
  }


  filtrar(event: any) {
  const texto = event.target.value.toLowerCase();

  if (event.key === 'Escape') {
    event.target.value = '';
  }

  const elementos = document.querySelectorAll('.subtitulo');

  elementos.forEach((lenguaje: any) => {
    const contenido = lenguaje.textContent.toLowerCase();

    if (contenido.includes(texto)) {
      lenguaje.classList.remove('filtro');
    } else {
      lenguaje.classList.add('filtro');
    }
  });
}

}
