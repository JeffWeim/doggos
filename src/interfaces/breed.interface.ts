export type TBreed = {
  name: string;
  image: {
    url: string;
  };
  description: {
    raw: string;
    references: [];
  };
  slug?: string;
};
