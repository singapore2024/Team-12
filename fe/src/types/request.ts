export type Request = {
  listingId: number;
  description: string;
  quantity: number;
  userId: number;
  image: string;
  authorName: string;
  createdAt?: Date;
};
