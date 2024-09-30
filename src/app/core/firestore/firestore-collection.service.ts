import { Inject, inject, Injectable, InjectionToken } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, getDoc, updateDoc } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { DocumentReference, DocumentSnapshot } from '@firebase/firestore';

export const FIRESTORE_COLLECTION_PATH_TOKEN =
  new InjectionToken<string>('FirestoreCollectionPathToken');

@Injectable()
export class FirestoreCollectionService<T> {
  private readonly firestore: Firestore = inject(Firestore);
  private readonly data$: Observable<T[]>;
  path;
  dataCollection;

  constructor(@Inject(FIRESTORE_COLLECTION_PATH_TOKEN) path: string) {
    this.path = path;
    this.dataCollection = collection(this.firestore, path);
    this.data$ = collectionData(this.dataCollection, { idField: 'id'}) as Observable<T[]>;
  }

  getAllData(): Observable<T[]> {
    return this.data$;
  }

  getDocumentReference(id: string): DocumentReference {
    return doc(this.firestore, this.path, id);
  }

  getDocument(id: string): Observable<DocumentSnapshot> {
    return from(getDoc(this.getDocumentReference(id)));
  }

  add(data: { [x: string]: any }): Observable<DocumentReference> {
    return from(addDoc(collection(this.firestore, this.path), data));
  }

  update(id: string, data: { [x: string]: any }): Observable<void> {
    return from(updateDoc(this.getDocumentReference(id), data));
  }
}
