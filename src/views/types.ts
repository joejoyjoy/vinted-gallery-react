interface PhotoArr {
  id: number;
  url: string;
  photographer: string;
  photographer_url: string;
  avg_color: string;
  src: {
    original: string;
  };
}

interface LikedPhoto {
  id: number;
  url: string;
  photographer: string;
  photographer_url: string;
  avg_color: string;
  src: {
    original: string;
  };
}

export type { PhotoArr, LikedPhoto };
