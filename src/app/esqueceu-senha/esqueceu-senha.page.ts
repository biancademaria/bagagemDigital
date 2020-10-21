import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
})
export class EsqueceuSenhaPage implements OnInit {

  email: string;

  constructor(
    private afauth: AngularFireAuth,
    private toastCtrl: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async recuperarSenha() {
    if (this.email) {
      const carregando = await this.loadingCtrl.create({
        message: 'Aguarde. estamos mandando o link para a mudança de senha!',
        spinner: 'crescent',
        showBackdrop: true
      });
      carregando.present(); 
      this.afauth.sendPasswordResetEmail(this.email). then(() => {
        carregando.dismiss();
        this.toast('E-mail de confirmação enviado. Por favor, confira seu e-mail.', 'success');
        this.router.navigate(['/login']);
      })
      .catch((error)=> {
        carregando.dismiss();
        this.toast(error.message, 'danger');
      })
    }
    else {
      this.toast('Por favor, digite seu e-mail!', 'danger');
    }
  }

  async toast(mensagem, status) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }

}
