import { Component } from '@angular/core';
import { Bucket, Ball } from './bucket/bucket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColorSort';
  bucket1: Ball[] = [
      { id: 0, color: 'red' },
      { id: 0, color: 'blue' },
      { id: 0, color: 'green' },
      { id: 0, color: 'black' },
  ]
  bucket2: Ball[] = [
      { id: 0, color: 'pink' },
      { id: 0, color: 'purple' },
      { id: 0, color: 'olive' },
      { id: 0, color: 'gray' },
  ]
  bucket3: Ball[] = [
      { id: 0, color: 'red' },
      { id: 0, color: 'green' },
  ]
  buckets: Bucket[] = [
      { balls: this.bucket1 },
      { balls: this.bucket2 },
      { balls: this.bucket3 },
      { balls: [] },
  ]
}
