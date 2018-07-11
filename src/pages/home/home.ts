import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlaceOrderPage} from '../place-order/place-order';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    }
    username:string;

    getData(name){
this.username=name;
this.navCtrl.push(PlaceOrderPage,{data:this.username})//WHEN CLICKED IT NAVIGATRES TO NEXT PAGE with an object
    }

  presentAlert() {
    
    const alert = this.alertCtrl.create({
      title: 'Login please',
      message: "Enter a name ",
      

      inputs: [
        {
          name: 'name',
          placeholder: 'username'
        },
      ],

      buttons: [
        {
          text:'cancel',
          handler: data => {
            console.log('cancel clicked');
          }
        },
        {
          text:'Ok',
          handler: data => {
            this.getData(data.name)
          }
        }

      ] 
    });
    alert.present();
  }

    // login():void{
    //   let data ={
    //     title:"login",
    //     name:"carol",
    //     message:"welcome please place your order"

    //   };
    //   this.navCtrl.push(PlaceOrderPage,data);
      
    //     }


  }