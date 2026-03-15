import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formulario = { nombre: '', email: '', telefono: '', mensaje: '' };
  enviado = signal(false);
  enviando = signal(false);
  telefono = '+34 910 41 93 15';
  direccion = 'C. de Segovia, 65, Arganzuela, 28005 Madrid';
  email = 'hola@barrio.es';

  enviarMensaje() {
    if (!this.formulario.nombre || !this.formulario.mensaje) {
      alert('Por favor, completa los campos obligatorios');
      return;
    }
    this.enviando.set(true);
    setTimeout(() => {
      this.enviando.set(false);
      this.enviado.set(true);
      this.formulario = { nombre: '', email: '', telefono: '', mensaje: '' };
    }, 1500);
  }
}
