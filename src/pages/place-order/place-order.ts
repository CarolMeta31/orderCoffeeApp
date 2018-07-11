import { Component, AnimationStyles } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlaceOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-order',
  templateUrl: 'place-order.html',
})
export class PlaceOrderPage {
coffee=15;
username:string;

  whipcream=false;
  chocolate=false;
  foam=false;
  total:number;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.username=navParams.get('data');//passing parameters
  }

  countNumber=0;

  countQuantity(value:number):void{
    this.countNumber+=value;
    
  
  }
 placeOrder():number{

 if (this.whipcream && this.chocolate && this.foam){
    this.total=(this.coffee +10+20+5)*this.countNumber
 }
 
   else if  (this.whipcream && this.chocolate){
    this.total=(this.coffee +10+20)*this.countNumber
  }
  else if  (this.whipcream && this.foam){
    this.total=(this.coffee +10+5)*this.countNumber
  }
  else if  (this.chocolate && this.foam){
    this.total=(this.coffee+20+5)*this.countNumber
  }

  else if  (this.whipcream){
    this.total=(this.coffee +10)*this.countNumber
  }
  
  else if  (this.chocolate){
    this.total=(this.coffee+20)*this.countNumber
  }
  else if  (this.foam){
    this.total=(this.coffee +5)*this.countNumber
  
}
else if (this.countNumber){
  this.total=this.coffee*this.countNumber}
return this.total;
 }

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad PlaceOrderPage');
  }

  reset(value:number):void{
 this.countNumber=value;
 this.total=0;
 this.countNumber=0;
  }

}
