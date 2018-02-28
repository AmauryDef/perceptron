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
  n:number;
	
  type:any;

  constructor(public navCtrl: NavController) {
    
  }

  onChange(value){
    this.type = value
     console.log(this.type);
  }

  
  perceptronize() {
  	let poids = new poidsModel(parseFloat(this.w0),parseFloat(this.w1),parseFloat(this.w2));

  	global.poids = poids;
    global.n = parseFloat(this.n);

  	if(global.poids.w0!=0 && global.poids.w0 && global.poids.w1!=0 && global.poids.w1 && global.poids.w2!=0 && global.poids.w2 && global.n>0 && this.type){
    	
      if(this.type == "et"){
        this.navCtrl.push(PerceptronPage);
      }else if(this.type == "xor"){
        alert("xor perceptron not yet implemented");
      }else{
        alert("Unknown ERROR");
      }

  	}else{
  		alert("Failed to instantiate variables, you may have forgotten one or more variable : "+JSON.stringify(global.poids)+JSON.stringify(global.n) );
  	}

  }

}
