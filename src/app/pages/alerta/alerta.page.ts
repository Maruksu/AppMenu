import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async alert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Cuidado!',
      message: 'Erro detectado! Verifique novamente!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaMultiplosBotoes() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alertas múltiplos',
      subHeader: 'Múltiplos botões',
      message: 'Este é um alerta com múltiplos botões!',
      buttons: ['Cancelar', 'Abrir', 'Excluir']
    });

    await alert.present();
  }
}
