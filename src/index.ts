import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiMessageService } from './message.service';

export * from './message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    
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
