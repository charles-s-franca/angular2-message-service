import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMessageService } from './message.service';
import { MessageButton } from './message_button';
export { UiMessageService } from './message.service';
export { MessageButton } from './message_button';
var UiMessageServiceModule = (function () {
    function UiMessageServiceModule() {
    }
    /**
     * @return {?}
     */
    UiMessageServiceModule.forRoot = function () {
        return {
            ngModule: UiMessageServiceModule,
            providers: [
                {
                    provide: UiMessageService,
                    useFactory: function (injector) {
                        return new UiMessageService(injector);
                    },
                    deps: [Injector]
                }
            ]
        };
    };
    return UiMessageServiceModule;
}());
export { UiMessageServiceModule };
UiMessageServiceModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [],
                exports: [
                    MessageButton
                ]
            },] },
];
/**
 * @nocollapse
 */
UiMessageServiceModule.ctorParameters = function () { return []; };
function UiMessageServiceModule_tsickle_Closure_declarations() {
    /** @type {?} */
    UiMessageServiceModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    UiMessageServiceModule.ctorParameters;
}
