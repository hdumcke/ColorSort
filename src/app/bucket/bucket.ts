export interface Ball {
    color: string;
    colorHex: string;
}

export interface Bucket {
    balls: Ball[];
}

export interface  Layout {
    ballSize: number;
    bucketHeight: number;
    spacerHeight: number;
    spacerWidth: number;
}
