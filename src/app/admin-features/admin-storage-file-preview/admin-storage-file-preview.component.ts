import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// @ts-ignore
import { Reference } from '@angular/fire/compat/storage/interfaces';
import { NgOptimizedImage } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'oms-admin-storage-file-preview',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './admin-storage-file-preview.component.html',
  styleUrl: './admin-storage-file-preview.component.scss'
})
export class AdminStorageFilePreviewComponent implements OnChanges {
  @Input() item: Reference;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'].currentValue && this.item) {
      console.log(this.item);
      console.log(this.item.getDownloadURL);
      // from(this.item?.getDownloadURL).subscribe((data: { "": any; }) => console.log(data))
    }
  }


}
