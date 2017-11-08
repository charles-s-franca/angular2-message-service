import { Injector } from '@angular/core';
import { LoadingController, Loading } from "ionic-angular";
import { MessageButton } from 'message_button';
export declare class UiMessageService {
    loadingCtrl: LoadingController;
    loader: Loading;
    showingLoading: boolean;
    alertCtrl: any;
    alert: any;
    constructor(injector: Injector);
    showLoading(message: string): void;
    hideLoading(): void;
    showAlert(title: string, subtitle: string): void;
    showConfirm(title: string, message: string, buttons: Array<MessageButton>): void;
}
