import {Component, Input, OnInit} from '@angular/core';
import {FingerprintAIO} from "@ionic-native/fingerprint-aio/ngx";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
@Input() isModal: boolean;
  constructor(private faio: FingerprintAIO, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('i am modal', this.isModal);
  }

  faiologin() {

    this.faio.show({
      // @ts-ignore
      clientId: 'FaceID-Demo',
      clientSecret: 'password', // Only android
      localizedFallbackTitle: 'Use Pin',  // Only ios
      localizedReason: 'Please authenticate'  // Only ios
    }).then(() => {
      if (this.isModal) {
        this.modalCtrl.dismiss();

      } else {
        this.router.navigate(['/home']);
      }
    }).catch((error: any) => {
      console.log('error :', error);
    });
  }

}
