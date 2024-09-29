import { Inject, inject, Injectable, InjectionToken } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export const FIRESTORE_COLLECTION_PATH_TOKEN =
  new InjectionToken<string>('FirestoreCollectionPathToken');

@Injectable()
export class FirestoreCollectionService<T> {
  private readonly firestore: Firestore = inject(Firestore);
  private readonly data$: Observable<T[]>;

  constructor(@Inject(FIRESTORE_COLLECTION_PATH_TOKEN) path: string) {
    const dataCollection = collection(this.firestore, path);
    this.data$ = collectionData(dataCollection, { idField: 'id'}) as Observable<T[]>;
  }

  getAllData(): Observable<T[]> {
    return this.data$;
  }
}
