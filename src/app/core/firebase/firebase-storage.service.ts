import { inject, Injectable } from '@angular/core';
import { listAll, ref, Storage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
// @ts-ignore
import { ListResult } from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  private readonly storage: Storage = inject(Storage);

  constructor() { }

  getRootList(): Observable<ListResult> {
    const listRef = ref(this.storage);

    return from(listAll(listRef))
  }

  getFolderList(path: string): Observable<ListResult> {
    const listRef = ref(this.storage, path);

    return from(listAll(listRef))
  }
}
