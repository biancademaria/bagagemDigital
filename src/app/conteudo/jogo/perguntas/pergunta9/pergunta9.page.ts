import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pergunta9',
  templateUrl: './pergunta9.page.html',
  styleUrls: ['./pergunta9.page.scss'],
})
export class Pergunta9Page implements OnInit {
 
  constructor(
    public alertController: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  async respostaCerta() {
      await this.presentAlert('RESPOSTA CORRETA!', 'Parabéns!');
      this.router.navigate(['/perguntas/pergunta10']);
  }

   async respostaErrada() {
      await this.presentAlert('RESPOSTA ERRADA!', 'A resposta correta era RIO DE JANEIRO.');
      this.router.navigate(['/perguntas/pergunta10']);
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
