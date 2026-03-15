import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section style="padding: 120px 0 48px; text-align: center; background-color: #F7F5F2;">
      <div style="max-width: 800px; margin: 0 auto; padding: 0 16px;">
        <h1 style="font-size: 48px; font-family: 'Playfair Display', serif; font-weight: bold; color: #1A1512; margin-bottom: 16px;">
          Nuestras <span style="color: #C45D3E;">Reseñas</span>
        </h1>
        <p style="color: #5A4538; font-size: 18px;">4.4 ★ Google (más de 100 reseñas)</p>
      </div>
    </section>

    <section style="padding: 64px 0; background-color: #1A1512;">
      <div style="max-width: 800px; margin: 0 auto; padding: 0 16px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          @for (r of resenas; track r.nombre) {
            <div style="background-color: rgba(74,57,48,0.5); border-radius: 16px; padding: 32px;">
              <div style="display: flex; gap: 4px; margin-bottom: 16px;">
                @for (s of [1,2,3,4,5]; track s) { <span style="color: #C45D3E;">★</span> }
              </div>
              <p style="color: rgba(255,255,255,0.9); margin-bottom: 16px; font-style: italic;">"{{ r.texto }}"</p>
              <div style="color: white; font-weight: 500;">{{ r.nombre }}</div>
              <div style="color: rgba(255,255,255,0.6); font-size: 14px;">{{ r.fecha }}</div>
            </div>
          }
        </div>
        
        <div style="text-align: center; margin-top: 48px;">
          <a href="https://www.google.com/maps/place/BarR%C3%ADo/@40.4137,-3.7193,17z/data=!4m6!3m5!1s0xd4229f31cebe5b7:0x5c20b296cc4c283a!8m2!3d40.4136991!4d-3.7192554!16s%2Fg%2F11f9vw32t9?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" style="background-color: #C45D3E; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block;">
            Ver todas las reseñas en Google Maps →
          </a>
        </div>
      </div>
    </section>
  `
})
export class ReviewsComponent {
  resenas = [
    { 
      nombre: 'María Luisa', 
      texto: 'Este sitio es genial. Vengo mucho y siempre me han atendido con una sonrisa. Son muy atentos y te preguntan si necesitas algo más. Esto ya no es habitual en los bares. Puedes venir con tu mejor amigo. En esta zona, es mi bar favorito sin lugar a dudas. Lo recomiendo al 100%', 
      fecha: 'Hace un año' 
    },
    { 
      nombre: 'Raul García', 
      texto: 'Muy buen ambiente y atención. Te ponen aperitivo de calidad. Además, hay flamenquito en directo.', 
      fecha: 'Hace 2 años' 
    },
    { 
      nombre: 'Raúl Sanfrutos Arias', 
      texto: 'Magnífico lugar tanto para tapear como para encuentros con amigos. El servicio es magnífico, atentos y serviciales. El precio no es muy elevado para la zona.', 
      fecha: 'Hace 6 años' 
    },
    { 
      nombre: 'Laura Pérez Cobo', 
      texto: 'Muy buena opción. Tienen variedad de cervezas y las raciones están muy buenas y son saludables. El local está limpio y de decoración cuidada y el trato de los camareros no podría ser más cercano y amable.', 
      fecha: 'Hace 5 años' 
    },
    { 
      nombre: 'Fernando Bustos', 
      texto: 'Trato exquisito y el camarero muy agradable. El ambiente lo mejor, un sitio muy divertido para pasar un buen rato con buenas raciones. Volveremos sin duda.', 
      fecha: 'Hace 3 meses' 
    }
  ];
}
