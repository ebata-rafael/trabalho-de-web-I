import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatListModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
