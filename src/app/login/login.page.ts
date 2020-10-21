import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(
    private router: Router,
    private aService: AuthService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

  esqueceuSenha() {
    this.router.navigate(['/esqueceu-senha']);
  }

  async login() {
    if(this.email && this.senha) {
      const carregando = await this.loadingController.create({
        message: 'Fazendo login...',
        spinner: 'crescent',
        showBackdrop: true
      });
      carregando.present();
      this.aService.login(this.email, this.senha).then(()=> {
        carregando.dismiss();
      }).catch((error)=> {
        carregando.dismiss();
        this.toast(error.message, 'danger');
      });
    } else {
      this.toast('Por favor, coloque seu e-mail e sua senha!', 'danger');
    }
  }

  async toast(mensagem, status) {
    const toast = await this.toastController.create({
      message: mensagem,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }

}
