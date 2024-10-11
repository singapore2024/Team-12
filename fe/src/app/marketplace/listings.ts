import { Listing } from "@/types/listing";

export const marketplaceListings: Listing[] = [
  {
    name: "Apples",
    description: "Premium apples from Fukushima, Japan",
    price: 10,
    quantity: 5,
    category: "Fruits",
    userId: 1,
    image:
      "https://res.cloudinary.com/dkzckcpzf/image/upload/v1728624343/apples_ryvyuf.jpg",
    authorName: "Bella",
  },
  {
    name: "Oranges",
    description: "Juicy oranges from South Korea",
    price: 10,
    quantity: 4,
    category: "Fruits",
    userId: 2,
    image:
      "https://res.cloudinary.com/dkzckcpzf/image/upload/v1728624343/apples_ryvyuf.jpg",
    authorName: "Rag",
  },
];
