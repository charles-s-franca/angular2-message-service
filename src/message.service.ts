import { Injectable, Injector } from '@angular/core';
import { LoadingController, Loading, AlertController } from "ionic-angular";

@Injectable()
export class UiMessageService {
    public loadingCtrl: LoadingController;
    public loader:Loading;
    public showingLoading = false;
    public alertCtrl: any;
    public alert:any;

    constructor(injector: Injector) {
        this.loadingCtrl = injector.get(LoadingController);
        this.alertCtrl = injector.get(AlertController);
    }

    showLoading(message: string) {
        if(!this.showingLoading){
            this.showingLoading = true;
            this.loader = this.loadingCtrl.create({
                content: message
            });
            this.loader.present();   
        }
    }

    hideLoading(){
        if(this.showingLoading){
            this.loader.dismiss();
            this.showingLoading = false;
        }
    }

    showAlert(title:string, subtitle:string) {
        this.alert = this.alertCtrl.create({
        title: title,
        subTitle: subtitle,
            buttons: ['OK']
        });
        this.alert.present();
    }

}
