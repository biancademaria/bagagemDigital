import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) {}

  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -14,
  }

  async logout() {
    this.afauth.signOut().then(async () => {
      const alert = await this.alertController.create({
        header: 'Tem certeza?',
        message: 'Você deseja realmente sair do aplicativo?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          }, {
            text: 'Sim, sair',
            handler: () => {
              this.router.navigateByUrl('/login');
            }
          }
        ]
      });
      await alert.present();
    })
  }


}