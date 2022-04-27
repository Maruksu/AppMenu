import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navegação', url: '/navegacao', icon: 'code' },
    { title: 'Botões', url: '/botao', icon: 'construct'},
    { title: 'Recebidos', url: '/Inbox', icon: 'mail' },
    { title: 'Enviados', url: '/Outbox', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/Favorites', icon: 'heart' },
    { title: 'Arquivado', url: '/Archived', icon: 'archive' },
    { title: 'Alerta', url: '/alert', icon: 'alert-circle'},
    { title: 'Action Sheet', url: '/actionsheet', icon: 'alert'},
    { title: 'Badge', url: '/badge', icon: 'list' },
    { title: 'Lixo', url: '/Trash', icon: 'trash' },
    { title: 'Spam', url: '/Spam', icon: 'warning' },
    { title: 'Lucro', url: '/Lucro', icon: 'diamond' },
    { title: 'Despesa', url: '/Despesa', icon: 'thunderstorm' },
    { title: 'Saldo', url: '/Saldo', icon: 'layers' },
    { title: 'Extrato', url: '/Extrato', icon: 'grid' },
    { title: 'Boletos', url: '/Boletos', icon: 'newspaper' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
