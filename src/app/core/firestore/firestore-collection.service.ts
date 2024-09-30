import { Inject, inject, Injectable, InjectionToken } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Breadcrumb } from '../../core-ui/breadcrumb/breadcrumb';
import { DocumentSnapshot } from '@firebase/firestore';

export const FIRESTORE_COLLECTION_PATH_TOKEN =
  new InjectionToken<string>('FirestoreCollectionPathToken');

@Injectable()
export class FirestoreCollectionService<T> {
  private readonly firestore: Firestore = inject(Firestore);
  private readonly data$: Observable<T[]>;
  path;

  constructor(@Inject(FIRESTORE_COLLECTION_PATH_TOKEN) path: string) {
    this.path = path;
    const dataCollection = collection(this.firestore, path);
    this.data$ = collectionData(dataCollection, { idField: 'id'}) as Observable<T[]>;
  }

  getAllData(): Observable<T[]> {
    return this.data$;
  }

  getById(id: string): Observable<DocumentSnapshot> {
    const docRef = doc(this.firestore, this.path, id);
    return from(getDoc(docRef));
  }
}
