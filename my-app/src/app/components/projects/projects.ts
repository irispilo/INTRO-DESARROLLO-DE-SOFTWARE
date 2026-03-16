import { Component, OnInit } from '@angular/core';
import { Apis } from './apis';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{
  repos: any[] = [];
  constructor(private apis: Apis) {}
  ngOnInit(): void {
    this.apis.getRepos().subscribe(data => {
      this.repos = data;
   });
  }
  }