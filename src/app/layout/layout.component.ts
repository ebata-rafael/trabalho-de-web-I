import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ReceitasComponent } from "../receitas/receitas.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, ReceitasComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
