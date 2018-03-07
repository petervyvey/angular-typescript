import { NgModule } from '@angular/core';
import { TimeZoneModule } from '@store/time-zone/time-zone.module';

@NgModule({
    imports: [
        TimeZoneModule
    ],
    exports: [
        TimeZoneModule
    ]
})
class StoreModule {}

export {
    StoreModule
};
