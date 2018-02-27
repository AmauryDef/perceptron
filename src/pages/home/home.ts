import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerceptronPage } from '../perceptron/perceptron'
import {global} from "../../app/global";

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
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	w0:number;
	w1:number;
	w2:number;
	

  constructor(public navCtrl: NavController) {

  }

  
  perceptronize() {
  	let poids = new poidsModel(this.w0,this.w1,this.w2);

  	global.poids = poids;

    this.navCtrl.push(PerceptronPage);
  }

}
