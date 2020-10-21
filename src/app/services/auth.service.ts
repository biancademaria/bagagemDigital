import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  user$: Observable<Usuario>;
  user:Usuario;

  constructor(
    private afauth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
    // validações importantes para que haja o acesso ao firebase
    this.user$ = this.afauth.authState.pipe(
      switchMap( user => {
        if(user) {
         return this.afs.doc(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
        }
      })
    );
   } //fim do construtor

   //login com firebase e verificação de e-mail.
   async login(email, senha) {
      const carregando = await this.loadingCtrl.create({
        message: 'Fazendo a autenticação...',
        spinner: 'crescent',
        showBackdrop: true
      });

      carregando.present();

      this.afauth.signInWithEmailAndPassword(email, senha).then((data)=> {
        if(!data.user.emailVerified) {
          carregando.dismiss();
          this.toast('Para entrar, verifique seu endereço de e-mail!', 'danger');
          this.logout();
        } else {
          carregando.dismiss();
          this.router.navigate(['/home']);
        }
      })
   } // fim do método de login

   logout() {
    this.afauth.signOut().then(()=> {
      this.router.navigate(['/login']);
    })
   } //fim do método de logout

   //por meio do toast, uma mensagem será exibida na tela
   async toast(mensagem, status) {
     const toast = await this.toastCtrl.create({
       message: mensagem,
       position: 'bottom',
       color: status,
       duration: 2000
     });

     toast.present();
   } //fim do toast
}
