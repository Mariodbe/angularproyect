import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cartaService = inject(CartaService);
  platosDestacados = this.cartaService.getPlatosDestacados();
  
  resenas = [
    { 
      nombre: 'María Luisa', 
      valoracion: 5, 
      texto: 'Este sitio es genial. Vengo mucho y siempre me han atendido con una sonrisa. Son muy atentos y te preguntan si necesitas algo más de vez en cuando. Esto ya no es habitual en los bares. Puedes venir con tu mejor amigo. En esta zona, es mi bar favorito sin lugar a dudas. Lo recomiendo al 100%', 
      fecha: 'Hace un año',
      fotos: 374
    },
    { 
      nombre: 'Raul García', 
      valoracion: 5, 
      texto: 'Muy buen ambiente y atención. Te ponen aperitivo de calidad. Además, hay flamenquito en directo.', 
      fecha: 'Hace 2 años',
      fotos: 240
    },
    { 
      nombre: 'Raúl Sanfrutos Arias', 
      valoracion: 5, 
      texto: 'Magnífico lugar tanto para tapear como para encuentros con amigos. El servicio es magnífico, atentos y serviciales. El precio no es muy elevado para la zona.', 
      fecha: 'Hace 6 años',
      fotos: 1643
    }
  ];
}
