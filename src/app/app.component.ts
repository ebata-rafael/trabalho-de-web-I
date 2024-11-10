import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from "./header-menu/header-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trabalho-web';
}
