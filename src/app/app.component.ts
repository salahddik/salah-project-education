import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import {NavbarModule} from './layout/navbar/navbar.module'
import { footerModule } from "./layout/footer/footer.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule, footerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salah-project-education';
}
