import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InitialsPipe } from '../../initials-pipe';


@Component({
  selector: 'app-footer',
  imports: [CommonModule, InitialsPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  today: Date = new Date();

}
