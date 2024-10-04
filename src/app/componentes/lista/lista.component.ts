import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  lista:any = [
    {
    'id': 1,
    'categoria': 'Mercado',
    'entradaesaida': '..',
    'descricao': '..',
    'valor': '10,00',
  },
  {
    'id': 2,
    'categoria': 'Padaria',
    'entradaesaida': '...',
    'descricao': '...',
    'valor': '15,00',
  }
]
}
