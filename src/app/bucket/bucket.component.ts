import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { Bucket, Ball, Layout } from './bucket';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent {
  @Input() bucket: Bucket = { balls: [] };
  @Input() index: number = 0;
  @Output() checkCompleteEvent = new EventEmitter<any>();

  layout: Layout = {
    ballSize: 3,
    bucketHeight: 143,
    spacerHeight: 20,
    spacerWidth: 45,
  }

  constructor(private observer: BreakpointObserver) {

      this.observer.observe(Breakpoints.XSmall).subscribe(result => {

	  if ( result.matches ) {
	      this.layout = {
                  ballSize: 3,
                  bucketHeight: 143,
                  spacerHeight: 20,
                  spacerWidth: 45,
	      }
	  }
	  else {
	      this.layout = {
                  ballSize: 30,
                  bucketHeight: 251,
                  spacerHeight: 50,
                  spacerWidth: 72,
	      }
	  }
      });

  }

  drop(event: CdkDragDrop<Ball[]>) {
    if (event.previousContainer !== event.container 
	&& event.container.data.length < 4 
        && event.currentIndex === 0
        && (event.container.data.length === 0 || event.container.data[0].color === event.previousContainer.data[0].color)) {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.checkCompleteEvent.emit(null);
    }
  }

  topPredicate(index: number, item: CdkDrag<number>) {
    return index === 0;
  }
}
