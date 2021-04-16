import { Bucket, Ball } from '../bucket/bucket';
import shuffle from 'shuffle-array';

export class Game {
  colors: string[] = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"];

  buckets: Bucket[] = [];

  constructor(level: number) {
      let numberBins = 3 + level;
      let numberBallsPerBin = 4;
      let empty=2;
      let colorArray: string[]=[];
      //generate complete 'won' game state, then shuffle and distribute to state
      for(let i=0;i<numberBins;i++){
          for(let j=0;j<numberBallsPerBin;j++){
              colorArray.push(this.colors[i]);
          }
      }

      shuffle(colorArray)

      let k = 0;
      for(let i=0;i<numberBins;i++){
	  let balls: Ball[] = [];
          for(let j=0;j<numberBallsPerBin;j++){
	      balls.push({ color: colorArray[k]});
	      k++;
          }
	  this.buckets.push({ balls: balls });
      }
      this.buckets.push({ balls: [] });
      this.buckets.push({ balls: [] });
  }
}
