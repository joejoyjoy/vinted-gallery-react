interface PhotoArr {
  id: number;
  url: string;
  photographer: string;
  avg_color: string;
  src: {
    original: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
}

export type { PhotoArr };
