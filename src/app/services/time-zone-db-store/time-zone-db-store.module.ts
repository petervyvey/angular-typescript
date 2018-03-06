import { NgModule } from '@angular/core';
import { TimeZoneDbStoreService } from '@services/time-zone-db-store/time-zone-db-store.service';

@NgModule({
    providers: [
        TimeZoneDbStoreService
    ]
})
class TimeZoneDbStoreModule {}

export {
    TimeZoneDbStoreModule,
    TimeZoneDbStoreService
};
