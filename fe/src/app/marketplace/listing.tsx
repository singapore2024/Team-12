import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Listing } from "@/types/listing";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

type P = {
  listing: Listing;
  show: boolean;
};

export default function ListingCard({ listing, show }: P) {
  const { image, name, price, quantity, description, authorName } = listing;
  const router = useRouter();

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
        <div className="flex items-center space-x-4 justify-between">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>{" "}
            <p>{authorName}</p>
          </div>
          <div className="flex gap-5">
            <Button variant="outline" className="bg-green-700 text-white">
              Purchase
            </Button>
            {show && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-blue-700 text-white">
                    Barter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white text-black">
                  <DialogHeader>
                    <DialogTitle>Your offer</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-left">
                        Produce Name
                      </Label>
                      <Input id="name" defaultValue="" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="quantity" className="text-left">
                        Quantity
                      </Label>
                      <Input
                        id="quantity"
                        defaultValue=""
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-left">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        defaultValue=""
                        rows={10}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      onClick={() => router.push("/barter")}
                    >
                      Request
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
        <div className="italic">Last posted: 2 days ago</div>
      </CardContent>
    </Card>
  );
}
