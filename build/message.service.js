import { Injectable, Injector } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';
var UiMessageService = (function () {
    /**
     * @param {?} injector
     */
    function UiMessageService(injector) {
        this.showingLoading = false;
        this.loadingCtrl = injector.get(LoadingController);
        this.alertCtrl = injector.get(AlertController);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    UiMessageService.prototype.showLoading = function (message) {
        if (!this.showingLoading) {
            this.showingLoading = true;
            this.loader = this.loadingCtrl.create({
                content: message
            });
            this.loader.present();
        }
    };
    /**
     * @return {?}
     */
    UiMessageService.prototype.hideLoading = function () {
        if (this.showingLoading) {
            this.loader.dismiss();
            this.showingLoading = false;
        }
    };
    /**
     * @param {?} title
     * @param {?} subtitle
     * @return {?}
     */
    UiMessageService.prototype.showAlert = function (title, subtitle) {
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        this.alert.present();
    };
    /**
     * @param {?} title
     * @param {?} message
     * @param {?} buttons
     * @return {?}
     */
    UiMessageService.prototype.showConfirm = function (title, message, buttons) {
        var /** @type {?} */ alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Do you want to buy this book?',
            buttons: buttons
        });
        alert.present();
    };
    return UiMessageService;
}());
export { UiMessageService };
UiMessageService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
UiMessageService.ctorParameters = function () { return [
    { type: Injector, },
]; };
function UiMessageService_tsickle_Closure_declarations() {
    /** @type {?} */
    UiMessageService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    UiMessageService.ctorParameters;
    /** @type {?} */
    UiMessageService.prototype.loadingCtrl;
    /** @type {?} */
    UiMessageService.prototype.loader;
    /** @type {?} */
    UiMessageService.prototype.showingLoading;
    /** @type {?} */
    UiMessageService.prototype.alertCtrl;
    /** @type {?} */
    UiMessageService.prototype.alert;
}
