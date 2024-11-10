import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [MatListModule,NgOptimizedImage],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {

}
