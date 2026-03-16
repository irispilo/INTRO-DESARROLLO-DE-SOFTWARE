
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionsApi } from './contributions-api';

@Component({
  selector: 'app-contribuition',
  imports: [],
  templateUrl: './contribuition.html',
  styleUrl: './contribuition.css',
})
export class Contribuition implements OnInit {
  repos: any[] = [];
  loading = true;
  empty = false;

  constructor(private api: ContributionsApi) {}

  ngOnInit(): void {
    this.api.getSharedRepos().subscribe(data => {
      this.repos = data.filter((repo: any) => repo.name.includes('irispilo'));
      this.loading = false;
      this.empty = this.repos.length === 0;
    });
  }
}
