import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public formCadastro: FormGroup;
  
    nomeUsuario: string;
    nomeCompleto: string;
    email: string;
    senha: string;
    confirmarSenha: string;

    matchSenhas: boolean;

  constructor(
    private aFirestore: AngularFirestore,
    private aFireAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async cadastrar() {
    if (this.nomeUsuario && this.nomeCompleto && this.email && this.senha) {
      const carregando = await this.loadingController.create({
        message: 'Realizando cadastro...',
        spinner: 'crescent',
        showBackdrop: true
      });

      carregando.present();

      this.aFireAuth.createUserWithEmailAndPassword(this.email, this.senha).then((data) => {
        this.aFirestore.collection('users').doc(data.user.uid).set({
          'usuarioId': data.user.uid,
          'nomeUsuario': this.nomeUsuario,
          'nomeCompleto': this.nomeCompleto,
          'email': this.email,
          'criadoEm': Date.now()
        });
        data.user.sendEmailVerification();
      })
        .then(() => {
          carregando.dismiss();
          this.toast('Cadastro realizado com sucesso!', 'success');
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          carregando.dismiss();
          this.toast(error.message, 'danger');
        })
    } else {
      this.toast('Por favor, preencha os campos!', 'danger');
    }
  } // fim do método cadastrar

  checarSenhas() {
    if (this.senha == this.confirmarSenha) {
      this.matchSenhas = true;
    } else {
      this.matchSenhas = false;
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
  } //fim do método toast para a emissão de uma mensagem


}
