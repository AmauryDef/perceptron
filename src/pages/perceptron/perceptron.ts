import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { global } from "../../app/global";
import { LoadingController } from 'ionic-angular';


class poidsModel{
	public w0:number;
	public w1:number;
	public w2:number;

	constructor(w0:number,w1:number,w2:number){
		this.w0 = w0;
		this.w1 = w1;
		this.w2 = w2;
	}
}


@Component({
  selector: 'page-perceptron',
  templateUrl: 'perceptron.html'
})

export class PerceptronPage {
	

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  	let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: `Please wait...`,
    duration: 5000
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');
  });

  loading.present();	
  }

 
}
