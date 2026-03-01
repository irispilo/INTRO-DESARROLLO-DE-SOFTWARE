import { Routes } from '@angular/router';
import { Header } from './components/header/header';
import { Listas } from './components/listas/listas';
import { Tablas } from './components/tablas/tablas';
import { Footer } from './components/footer/footer';

export const routes: Routes = [

{path: "header", component: Header},

{path: "listas", component: Listas,
    children:[
        {path: "tablas", component: Tablas}
    ]
},

{path: "footer", component: Footer} 

];











