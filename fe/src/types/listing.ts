export type Listing = {
    id?: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    userId: number;
    image: string;
    authorName: string;
    createdAt?: Date
}