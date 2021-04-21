export interface Ball {
    color: string;
}

export interface Bucket {
    balls: Ball[];
}

export interface  Layout {
    ball_size: number;
    bucket_height: number;
    spacer_height: number;
    spacer_width: number;
}
