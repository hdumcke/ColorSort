import { Component } from '@angular/core';
import { Game } from './bucket/game';
import { MatDialog } from '@angular/material/dialog';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faGithub = faGithub;
  title = 'ColorSort';
  level: number = 1;
  buckets = new Game(1).buckets;
  save_buckets = JSON.parse(JSON.stringify(this.buckets));

  constructor(public dialog: MatDialog) {}

  openHelp() {
    this.dialog.open(HelpDialog);
  }

  setLevel(level: number) {
      this.level = level;
      this.buckets = new Game(level).buckets;
      this.save_buckets = JSON.parse(JSON.stringify(this.buckets));
  };

  reshuffleLevel() {
      this.buckets = new Game(this.level).buckets;
      this.save_buckets = JSON.parse(JSON.stringify(this.buckets));
  }

  resetleLevel() {
      this.buckets = JSON.parse(JSON.stringify(this.save_buckets));
  }

  checkCompletion(event: any): void {
      for (let i = 0; i < this.buckets.length; i++) {
	  // inore empty buckets
	  if ( this.buckets[i].balls.length === 0)
	      continue;
	  // you are not done if a bucket is not full
	  if ( this.buckets[i].balls.length !== 4)
	      return;
	  // you are not done if a bucket does not have all balls with same color
          for (let j = 1; j < 4; j++) {
	      if ( this.buckets[i].balls[j-1].color !== this.buckets[i].balls[j].color )
		  return;
	  }
      }
      this.setLevel(this.level + 1);
  }

}

@Component({
  selector: 'help-dialog',
  templateUrl: 'help.html',
})
export class HelpDialog {}
