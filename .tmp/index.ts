import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMessageService } from './message.service';
import { MessageButton } from './message_button';

export * from './message.service';
export * from './message_button';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    MessageButton
  ]
})
export class UiMessageServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UiMessageServiceModule,
      providers: [
        {
          provide: UiMessageService,
          useFactory: (injector: Injector) => {
            return new UiMessageService(injector);
          },
          deps: [Injector]
        }
      ]
    };
  }
}
