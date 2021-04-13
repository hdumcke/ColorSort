import { Component, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { Bucket, Ball } from './bucket';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {
  @Input() bucket: Bucket = { balls: [] };
  @Input() index: number = 0;

  drop(event: CdkDragDrop<Ball[]>) {
    if (event.previousContainer !== event.container 
	&& event.container.data.length < 4 
        && event.currentIndex === 0
        && (event.container.data.length === 0 || event.container.data[0].color === event.previousContainer.data[0].color)) {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
