import { Inject, Injectable,InjectionToken } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
 
const STORAGE_KEY = 'pure-awesomeness';
export const SERVICE_STORAGE =new InjectionToken<StorageService>('MY_AWESOME_SERVICE_STORAGE');
@Injectable()
export class MyStorageService {
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}
 
    public doSomethingAwesome(): number {
        const awesomenessLevel: number = this.storage.get(STORAGE_KEY) || 1337;
        this.storage.set(STORAGE_KEY, awesomenessLevel + 1);
        return awesomenessLevel;
    }
}