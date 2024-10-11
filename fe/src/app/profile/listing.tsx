import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Listing } from "@/types/listing";
import Image from "next/image";

type P = {
  listing: Listing;
};

export default function ListingCard({ listing }: P) {
  const { image, name, price, quantity, description, authorName } = listing;
  return (
    <Card>
      <CardHeader>
        <Image src={image} width={480} height={480} alt={name} />
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="text-2xl">{name}</div>
        <div className="font-bold">
          ${price}/{quantity}pc
        </div>
        <div>{description}</div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
          <p>{authorName}</p>
        </div>
        <div className="italic">Listing ID: 1</div>
      </CardContent>
    </Card>
  );
}
