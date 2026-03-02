import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../data';

@Component({
  standalone: true,
  selector: 'app-tablas',
  imports: [CommonModule],
  templateUrl: './tablas.html',
  styleUrl: './tablas.css',
})
export class Tablas implements OnInit {
  
  education: string[] = [];

 constructor(private data: Data) {}
 ngOnInit() {

 this.education = this.data.getEducation();
 //console.log(this.education); 
 }


  mostrarEducacion: boolean = false;

  toggleEducacion() {
    this.mostrarEducacion = !this.mostrarEducacion;
  }

}


