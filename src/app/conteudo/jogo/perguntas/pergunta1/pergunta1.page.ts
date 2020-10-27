import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pergunta1',
  templateUrl: './pergunta1.page.html',
  styleUrls: ['./pergunta1.page.scss'],
})
export class Pergunta1Page implements OnInit {
  
  constructor(
    public alertController: AlertController,
    public router: Router,
  ) { }

  ngOnInit() {
  }

   async respostaCerta() {
      await this.presentAlert('RESPOSTA CORRETA!', 'Parabéns!');
      this.router.navigate(['/perguntas/pergunta2']);
  }

   async respostaErrada() {
      await this.presentAlert('RESPOSTA ERRADA!', 'A resposta correta era FUTEBOL.');
      this.router.navigate(['/perguntas/pergunta2']);
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
