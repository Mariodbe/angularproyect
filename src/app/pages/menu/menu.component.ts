import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  cartaService = inject(CartaService);
  categoriaActiva = signal<string>('todos');
  categorias = this.cartaService.categorias;

  platosFiltrados = computed(() => {
    return this.cartaService.getPlatosPorCategoria(this.categoriaActiva());
  });

  seleccionarCategoria(categoriaId: string) {
    this.categoriaActiva.set(categoriaId);
  }
}
