import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {

 private skills = ['HTML', 'TypeScript', 'Python'];
 getSkills() {
 return this.skills;
 }
 private education = ['Bach. en Ciencias y Letras','Computer Science Student'];
 getEducation(){
 return this.education;}
  
}


