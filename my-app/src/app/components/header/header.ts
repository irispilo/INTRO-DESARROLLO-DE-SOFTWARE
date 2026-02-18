import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {

  mensaje: string = "";
  modoOscuro = false;
  private cvRuta = 'assets/CV.pdf';

  constructor(private renderer: Renderer2) {
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 12) {
      this.mensaje = "¡Buenos días!";
    } else if (hora >= 12 && hora < 18) {
      this.mensaje = "¡Buenas tardes!";
    } else {
      this.mensaje = "¡Buenas noches!";
    }
  }

  ngOnInit(): void {
    this.modoOscuro = localStorage.getItem('modoOscuro') === 'true';
    this.aplicarModo();
  }

  toggleModoOscuro() {
    this.modoOscuro = !this.modoOscuro;
    localStorage.setItem('modoOscuro', String(this.modoOscuro));
    this.aplicarModo();
  }

  aplicarModo() {
    if (this.modoOscuro) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  imprimir() {
  window.print();
}

}
