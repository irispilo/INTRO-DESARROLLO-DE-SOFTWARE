import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Listas } from "./components/listas/listas";
import { Tablas } from './components/tablas/tablas';
import { Footer } from './components/footer/footer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Listas, Tablas, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  

}


//MAIN COMPONENT