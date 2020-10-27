import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pergunta3',
  templateUrl: './pergunta3.page.html',
  styleUrls: ['./pergunta3.page.scss'],
})
export class Pergunta3Page implements OnInit {
  
  constructor(
    public alertController: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  async respostaCerta() {
      await this.presentAlert('RESPOSTA CORRETA!', 'Parabéns!');
      this.router.navigate(['/perguntas/pergunta4']);
  }

   async respostaErrada() {
      await this.presentAlert('RESPOSTA ERRADA!', 'A resposta correta era ITÁLIA.');
      this.router.navigate(['/perguntas/pergunta4']);
  }

  async presentAlert(titulo, mensagem) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['Continuar']
    });
    await alert.present();
  }
}
