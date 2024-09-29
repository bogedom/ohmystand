import { InjectionToken } from '@angular/core';
import { FirestoreCollectionService } from '../../firestore/firestore-collection.service';
import { Stand } from './stand';

export const STAND_SERVICE_TOKEN = new InjectionToken<FirestoreCollectionService<Stand>>(
  'StandServiceToken',
  {
    providedIn: 'root',
    factory: () => new FirestoreCollectionService<Stand>('stands'),
  }
)
