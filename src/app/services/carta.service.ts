import { Injectable, signal } from '@angular/core';

export interface Plato {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  vegetariano?: boolean;
  picante?: boolean;
  categoria: string;
}

export interface Categoria {
  id: string;
  nombre: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartaService {
  
  // Carta real de BarRío con imágenes matching
  readonly carta = signal<Plato[]>([
    // ===== RACIONES / PLATOS PRINCIPALES =====
    { id: 1, nombre: 'Bravas', descripcion: 'Patatas bravas de la casa.', precio: 5.00, imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400', categoria: 'raciones' },
    { id: 2, nombre: 'Provolone al horno', descripcion: 'Provolone gratinado.', precio: 9.00, imagen: 'https://images.unsplash.com/photo-1617258216818-82e49b8e4a3c?w=400', categoria: 'raciones' },
    { id: 3, nombre: 'Plato de quesos variados', descripcion: 'Selección de quesos artesanales.', precio: 12.00, imagen: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400', categoria: 'raciones' },
    { id: 4, nombre: 'Cecina de León', descripcion: 'Cecina de León curada.', precio: 8.00, imagen: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', categoria: 'raciones' },
    { id: 5, nombre: 'Plato de jamón ibérico', descripcion: 'Jamón ibérico de bellota.', precio: 12.00, imagen: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400', categoria: 'raciones' },
    { id: 6, nombre: 'Pincho de tortilla con salmorejo', descripcion: 'Tortilla con salmorejo cordobes.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400', categoria: 'raciones', vegetariano: true },
    { id: 7, nombre: 'Patatas ali-oli', descripcion: 'Patatas con alioli.', precio: 5.00, imagen: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400', categoria: 'raciones', vegetariano: true },
    { id: 8, nombre: 'Salmorejo cordobes', descripcion: 'Salmorejo tradicional.', precio: 5.00, imagen: 'https://images.unsplash.com/photo-1599789197514-47270cd526b4?w=400', categoria: 'raciones', vegetariano: true },
    { id: 9, nombre: 'Ensaladilla con picos', descripcion: 'Ensaladilla con picos de pan.', precio: 4.00, imagen: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?w=400', categoria: 'raciones' },
    { id: 10, nombre: 'Falafel con hummus y salsa de yogur', descripcion: 'Falafel casero con hummus.', precio: 6.00, imagen: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400', categoria: 'raciones', vegetariano: true },
    { id: 11, nombre: 'Champiñones con romesco', descripcion: 'Champiñones con salsa romesco.', precio: 6.00, imagen: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', categoria: 'raciones', vegetariano: true },
    { id: 12, nombre: 'Croquetas de jamón', descripcion: 'Croquetas caseras de jamón.', precio: 5.00, imagen: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=400', categoria: 'raciones' },
    { id: 13, nombre: 'Alitas de pollo picante', descripcion: 'Alitas con salsa picante.', precio: 6.00, imagen: 'https://images.unsplash.com/photo-1608039829572-b6d0e95217ae?w=400', categoria: 'raciones', picante: true },
    { id: 14, nombre: 'Oreja crujiente', descripcion: 'Oreja de cerdo frita.', precio: 6.00, imagen: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=400', categoria: 'raciones' },
    { id: 15, nombre: 'Albóndigas con salsa de la casa', descripcion: 'Albóndigas caseras.', precio: 7.50, imagen: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400', categoria: 'raciones' },
    { id: 16, nombre: 'Butifarra con mayo picante', descripcion: 'Butifarra con mayonesa picante.', precio: 7.00, imagen: 'https://images.unsplash.com/photo-1606850780554-b55fc3e1d1d3?w=400', categoria: 'raciones', picante: true },
    { id: 17, nombre: 'Pulpo a la brasa con parmentier', descripcion: 'Pulpo gallego a la brasa.', precio: 12.00, imagen: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', categoria: 'raciones' },
    { id: 18, nombre: 'Taco de sardina ahumada con guacamole', descripcion: 'Sardina ahumada con guacamole.', precio: 4.50, imagen: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400', categoria: 'raciones' },
    { id: 19, nombre: 'Tartar de salmón con aguacate', descripcion: 'Salmón fresco con aguacate.', precio: 12.50, imagen: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', categoria: 'raciones' },
    { id: 20, nombre: 'Lasaña de verduras', descripcion: 'Lasaña vegetariana.', precio: 8.00, imagen: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400', categoria: 'raciones', vegetariano: true },
    { id: 21, nombre: 'Canelones de rustido', descripcion: 'Canelones de carne.', precio: 8.00, imagen: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400', categoria: 'raciones' },

    // ===== PIZZA =====
    { id: 22, nombre: 'Pizza Margarita', descripcion: 'Tomate, mozzarella y albahaca.', precio: 7.50, imagen: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', categoria: 'pizza', vegetariano: true },
    { id: 23, nombre: 'Pizza Cabra con trufa', descripcion: 'Queso de cabra y trufa.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', categoria: 'pizza', vegetariano: true },
    { id: 24, nombre: 'Pizza Alcachofas con guanciale', descripcion: 'Alcachofas y bacon.', precio: 10.00, imagen: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400', categoria: 'pizza' },

    // ===== TOSTAS =====
    { id: 25, nombre: 'Tosta Jamón ibérico con salmorejo', descripcion: 'Jamón con salmorejo.', precio: 7.00, imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', categoria: 'tostas' },
    { id: 26, nombre: 'Tosta Paté de tomates secos con provolone', descripcion: 'Tomates secos y provolone.', precio: 5.50, imagen: 'https://images.unsplash.com/photo-1481070555726-e2fe8357571d?w=400', categoria: 'tostas', vegetariano: true },
    { id: 27, nombre: 'Tosta Cecina de León con queso ahumado', descripcion: 'Cecina y queso ahumado.', precio: 6.00, imagen: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', categoria: 'tostas' },
    { id: 28, nombre: 'Tosta Sardina ahumada con tomate', descripcion: 'Sardina y tomate.', precio: 7.00, imagen: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400', categoria: 'tostas' },
    { id: 29, nombre: 'Tosta Tartar de salmón', descripcion: 'Tartar de salmón.', precio: 9.50, imagen: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400', categoria: 'tostas' },
    { id: 30, nombre: 'Tosta Queso azul con nueces y miel', descripcion: 'Queso azul, nueces y miel.', precio: 5.50, imagen: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400', categoria: 'tostas', vegetariano: true },

    // ===== PULGUITAS =====
    { id: 31, nombre: 'Pulguita Jamón con salmorejo', descripcion: 'Jamón con salmorejo.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', categoria: 'pulguitas' },
    { id: 32, nombre: 'Pulguita Queso curado', descripcion: 'Queso curado.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400', categoria: 'pulguitas', vegetariano: true },
    { id: 33, nombre: 'Pulguita Butifarra con mayonesa picante', descripcion: 'Butifarra picante.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1606850780554-b55fc3e1d1d3?w=400', categoria: 'pulguitas', picante: true },
    { id: 34, nombre: 'Pulguita Brisket ahumado', descripcion: 'Carne brisket ahumada.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', categoria: 'pulguitas' },
    { id: 35, nombre: 'Pulguita Tortilla de patata', descripcion: 'Tortilla española.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400', categoria: 'pulguitas', vegetariano: true },
    { id: 36, nombre: 'Pulguita Cecina de León', descripcion: 'Cecina de León.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400', categoria: 'pulguitas' },

    // ===== BEBIDAS =====
    { id: 40, nombre: 'Cerveza caña', descripcion: 'Cerveza de barril.', precio: 2.50, imagen: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400', categoria: 'bebidas' },
    { id: 41, nombre: 'Cerveza Premium', descripcion: 'Cerveza artesana.', precio: 4.00, imagen: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400', categoria: 'bebidas' },
    { id: 42, nombre: 'Vino tinto', descripcion: 'Copa de vino tinto.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400', categoria: 'bebidas' },
    { id: 43, nombre: 'Vino blanco', descripcion: 'Copa de vino blanco.', precio: 3.00, imagen: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400', categoria: 'bebidas' },
    { id: 44, nombre: 'Vermouth', descripcion: 'Vermouth de la casa.', precio: 3.50, imagen: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400', categoria: 'bebidas' },
    { id: 45, nombre: 'Refresco', descripcion: 'Refresco.', precio: 2.00, imagen: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400', categoria: 'bebidas' },
    { id: 46, nombre: 'Agua', descripcion: 'Agua mineral.', precio: 1.50, imagen: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400', categoria: 'bebidas' },
    { id: 47, nombre: 'Café', descripcion: 'Café espresso.', precio: 1.80, imagen: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', categoria: 'bebidas' }
  ]);

  readonly categorias = signal<Categoria[]>([
    { id: 'todos', nombre: 'Todo', icon: '🍽️' },
    { id: 'raciones', nombre: 'Raciones', icon: '🥘' },
    { id: 'pizza', nombre: 'Pizza', icon: '🍕' },
    { id: 'tostas', nombre: 'Tostas', icon: '🥪' },
    { id: 'pulguitas', nombre: 'Pulguitas', icon: '🌯' },
    { id: 'bebidas', nombre: 'Bebidas', icon: '🍺' }
  ]);

  getPlatosPorCategoria(categoriaId: string): Plato[] {
    if (categoriaId === 'todos') return this.carta();
    return this.carta().filter(plato => plato.categoria === categoriaId);
  }

  getPlatosDestacados(): Plato[] {
    return this.carta().filter(plato => [5, 17, 19].includes(plato.id));
  }
}
