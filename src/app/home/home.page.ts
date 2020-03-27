import { Component } from '@angular/core';
import {LoginPage} from '../login/login.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {

    setTimeout(() => {
      this.lockApp();
    }, 3000);
  }

  async lockApp() {

    const modal = await this.modalCtrl.create({
      component: LoginPage,
      backdropDismiss: false,
      cssClass: 'login-modal',
      componentProps: {
        isModal: true
      }
    });
    modal.present();
    }



}
