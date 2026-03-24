import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';

type Lang = 'ES' | 'EN';

interface HeaderTexts {
  saludo: string;
  imprimir: string;
  modoClaro: string;
  modoOscuro: string;
  parrafo: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {
  mensaje = '';
  modoOscuro = false;
  isBrowser = false;

  textosOriginales: HeaderTexts = {
    saludo: '',
    imprimir: 'Imprimir',
    modoClaro: 'Modo claro',
    modoOscuro: 'Modo oscuro',
    parrafo:
      'Estudiante de Ingeniería en Computer Science, con experiencia en areas administrativas, coordinación y comunicación intercultural. Destaco por mi capacidad de adaptación, pensamiento crítico y resolución de problemas. Me interesa desarrollar soluciones innovadoras en entornos que promuevan la autonomía, la creatividad y la responsabilidad, contribuyendo a la construcción de espacios más justos y colaborativos.',
  };

  textos: HeaderTexts = {
    saludo: '',
    imprimir: 'Imprimir',
    modoClaro: 'Modo claro',
    modoOscuro: 'Modo oscuro',
    parrafo:
      'Estudiante de Ingeniería en Computer Science, con experiencia en areas administrativas, coordinación y comunicación intercultural. Destaco por mi capacidad de adaptación, pensamiento crítico y resolución de problemas. Me interesa desarrollar soluciones innovadoras en entornos que promuevan la autonomía, la creatividad y la responsabilidad, contribuyendo a la construcción de espacios más justos y colaborativos.',
  };

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) {
      this.mensaje = '¡Buenos días!';
    } else if (hora >= 12 && hora < 18) {
      this.mensaje = '¡Buenas tardes!';
    } else {
      this.mensaje = '¡Buenas noches!';
    }

    this.textosOriginales.saludo = this.mensaje;
    this.textos.saludo = this.mensaje;
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.modoOscuro = localStorage.getItem('modoOscuro') === 'true';
      this.aplicarModo();
    }
  }

  async traducirHeader(targetLang: Lang) {
    if (!this.isBrowser) return;

    if (targetLang === 'ES') {
      this.textos = { ...this.textosOriginales };
      return;
    }

    try {
      const res = await fetch('/api/translate-texts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          texts: [
            this.textosOriginales.saludo,
            this.textosOriginales.imprimir,
            this.textosOriginales.modoClaro,
            this.textosOriginales.modoOscuro,
            this.textosOriginales.parrafo,
          ],
          targetLang,
        }),
      });

      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }

      const data = await res.json();

      this.textos = {
        saludo: data.translations[0],
        imprimir: data.translations[1],
        modoClaro: data.translations[2],
        modoOscuro: data.translations[3],
        parrafo: data.translations[4],
      };
    } catch (error) {
      console.error('Error al traducir el header:', error);
    }
  }

  toggleModoOscuro() {
    if (!this.isBrowser) return;

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