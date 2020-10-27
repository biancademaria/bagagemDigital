import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pergunta10',
  templateUrl: './pergunta10.page.html',
  styleUrls: ['./pergunta10.page.scss'],
})
export class Pergunta10Page implements OnInit {
 
  constructor(
    public alertController: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  async respostaCerta() {
      await this.presentAlert('RESPOSTA CORRETA!', 'Parabéns! Você finalizou o jogo. Clique em continuar para voltar à página inicial.');
      this.router.navigate(['/home']);
  }

   async respostaErrada() {
      await this.presentAlert('RESPOSTA ERRADA!', 'A resposta correta era ESTADOS UNIDOS. Clique em continuar para finalizar o jogo e voltar à página inicial.');
      this.router.navigate(['/home']);
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
