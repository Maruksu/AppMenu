import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Recebidos', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Enviados', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Arquivado', url: '/folder/Archived', icon: 'archive' },
    { title: 'Lixo', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Lucro', url: '/folder/Lucro', icon: 'diamond' },
    { title: 'Despesa', url: '/folder/Despesa', icon: 'thunderstorm' },
    { title: 'Saldo', url: '/folder/Saldo', icon: 'layers' },
    { title: 'Extrato', url: '/folder/Extrato', icon: 'grid' },
    { title: 'Boletos', url: '/folder/Boletos', icon: 'newspaper' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
