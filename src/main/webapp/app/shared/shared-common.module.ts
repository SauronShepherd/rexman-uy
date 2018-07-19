import { NgModule } from '@angular/core';

import { RexManUySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RexManUySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RexManUySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RexManUySharedCommonModule {}
