import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
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
