import { Bucket, Ball } from '../bucket/bucket';
import shuffle from 'shuffle-array';

export class Game {
  colors: Ball[] = [
      { color: "red", colorHex: "#F44336" },
      { color: "pink", colorHex: "#FF4081" },
      { color: "purple", colorHex: "#9C27B0" },
      { color: "deep-purple", colorHex: "#7C4DFF" },
      { color: "indigo", colorHex: "#3F51B5" },
      { color: "blue", colorHex: "#448AFF" },
      { color: "light-blue", colorHex: "#03A9F4" },
      { color: "cyan", colorHex: "#18FFFF" },
      { color: "teal", colorHex: "#009688" },
      { color: "green", colorHex: "#69F0AE" },
      { color: "light-green", colorHex: "#8BC34A" },
      { color: "lime", colorHex: "#EEFF41" },
      { color: "yellow", colorHex: "#FFEB3B" },
      { color: "amber", colorHex: "#FFD740" },
      { color: "orange", colorHex: "#FF9800" },
      { color: "deep-orange", colorHex: "#FF5722" },
      { color: "brown", colorHex: "#BCAAA4" },
      { color: "grey", colorHex: "#9E9E9E" },
      { color: "blue-grey", colorHex: "#B0BEC5" }
  ];

  buckets: Bucket[] = [];

  constructor(level: number) {
      let numberBins = 3 + level;
      let numberBallsPerBin = 4;
      let empty=2;
      let colorArray: Ball[]=[];
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
	      balls.push(colorArray[k]);
	      k++;
          }
	  this.buckets.push({ balls: balls });
      }
      this.buckets.push({ balls: [] });
      this.buckets.push({ balls: [] });
  }
}
