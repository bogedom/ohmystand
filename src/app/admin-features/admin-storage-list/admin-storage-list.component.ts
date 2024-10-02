import { Component, EventEmitter, Output } from '@angular/core';
import { FirebaseStorageService } from '../../core/firebase/firebase-storage.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { map } from 'rxjs';
// @ts-ignore
import { ListResult, Reference } from '@angular/fire/compat/storage/interfaces';

@Component({
  selector: 'oms-admin-storage-list',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './admin-storage-list.component.html',
  styleUrl: './admin-storage-list.component.scss'
})
export class AdminStorageListComponent {
  @Output() selectedItemChange = new EventEmitter<Reference>();

  prefixes$;

  items: { [p: string]: ListResult } = {};
  selectedItem: Reference;

  constructor(private readonly firebaseStorageService: FirebaseStorageService) {
    this.prefixes$ = this.firebaseStorageService.getRootList().pipe(
      map((value) => value)
    );

    this.prefixes$.subscribe(data => {
      console.log(data);
      this.items['root'] = data;
    })
  }

  onLoadItems(path: string): void {
    this.firebaseStorageService.getFolderList(path).pipe().subscribe(data => {
      console.log(data);
      this.items[path] = data;
    });
  }

  onSelectItem(item: Reference): void {
    this.selectedItem = item;
    this.selectedItemChange.emit(this.selectedItem);
  }

}
