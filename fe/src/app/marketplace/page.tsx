"use client";

import { useGetListings } from "@/api/hooks/useListings";
import Loading from "@/components/ui/loading";
import ListingCard from "./listing";
import { marketplaceListings } from "./listings";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Link } from "lucide-react";
import { Button } from "react-day-picker";

export default function MarketplacePage() {
  // const {data: listings, isPending} = useGetListings()
  const isPending = false;

  return (
    <div className="bg-white p-12">
      <h1 className="text-2xl leading-loose text-black">Marketplace</h1>
      <Separator className="my-4" />
      <div className="flex justify-between items-end space-x-4 mb-4">
        <div className="w-full text-black">
          <Label className="mb-2 text-italic">Search</Label>
          <Input placeholder="Search for your listings" />
        </div>
      </div>
      {isPending && <Loading />}
      {marketplaceListings && (
        <div className="mx-auto space-y-5 w-[480px]">
          {marketplaceListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} show={true} />
          ))}
        </div>
      )}
    </div>
  );
}
