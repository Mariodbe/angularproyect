import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;
  telefono = '+34 910 41 93 15';
  direccion = 'C. de Segovia, 65, Arganzuela, 28005 Madrid';
  email = 'hola@barrio.es';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
