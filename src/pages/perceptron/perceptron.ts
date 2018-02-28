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
	wArray:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
		let loading = this.loadingCtrl.create({
	    	spinner: 'hide',
	    	content: `Please wait...`,
	    	duration: 2000
	  	});

	  	loading.onDidDismiss(() => {
	    	console.log('Dismissed loading');
	  	});

	  	loading.present();	
	  	
		let entries = [[1,0,0],[1,0,1],[1,1,0],[1,1,1]];
		let wArray = [{w0:0,w1:0,w2:0,entry:[0,0,0],SomWiXi:0, y:0, cible:0},{w0:global.poids.w0,w1:global.poids.w1,w2:global.poids.w2}];

	    var etape = 1;
	    var entryIndex = 0;

	    do{

	    	wArray[etape].entry = entries[entryIndex];
	    	//Calcul de la somme Wixi
	    	var newWixi = 0;
			if(wArray[etape].entry[0]==1){
				newWixi = newWixi + wArray[etape].w0;
			}
			if(wArray[etape].entry[1]==1){
				newWixi = newWixi + wArray[etape].w1;
			}
			if(wArray[etape].entry[2]==1){
				newWixi = newWixi + wArray[etape].w2;
			}

			wArray[etape].SomWiXi = newWixi;

			//Déduction de la variable y à partir de la somme Wixi, si > 0, y =1, sinon y=0
			if(newWixi >= 0){
				var y = 1;
			}else{
				var y = 0;
			}

			wArray[etape].y = y;

			//Déduction de la cible (notre perceptron doit apprendre un ET logique, donc la cible sera de 1 seulement si on a toutes nos entrées à 1)
			if(wArray[etape].entry[0]==1 && wArray[etape].entry[1]==1 && wArray[etape].entry[2]==1){
				var cible = 1;
			}else{
				var cible = 0
			}

			wArray[etape].cible = cible;

			var newW0 = parseFloat(wArray[etape].w0) + (parseFloat(global.n) * (cible - y) * parseFloat(wArray[etape].entry[0]));
			var newW1 = parseFloat(wArray[etape].w1) + (parseFloat(global.n) * (cible - y) * parseFloat(wArray[etape].entry[1]));
			var newW2 = parseFloat(wArray[etape].w2) + (parseFloat(global.n) * (cible - y) * parseFloat(wArray[etape].entry[2]));

			etape = etape + 1;

			//Pour lire en boucle le tableau des entrées
			if(entryIndex==3){
				entryIndex = 0;
			}else{
				entryIndex = entryIndex + 1;
			}

			//On set les nouvelles variables d'entrée au le nouveau numéro d'étape

			wArray.push({w0:newW0,w1:newW1,w2:newW2});

			var previousStep = etape-1;

			var check = 0;

			if(wArray[etape].w0 == wArray[previousStep].w0){
				check++;
			}
			if(wArray[etape].w1 == wArray[previousStep].w1){
				check++;
			}
			if(wArray[etape].w2 == wArray[previousStep].w2){
				check++;
			}

			console.log(check);

	    }while(check!=3);

	    wArray.splice(0,1);

	    console.log(wArray);

	    this.wArray=JSON.stringify(wArray);

  	}

	

 
}
