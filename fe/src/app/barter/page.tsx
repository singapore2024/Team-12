"use client";

import { useGetListings } from "@/api/hooks/useListings";
import Loading from "@/components/ui/loading";
import ListingCard from "../marketplace/listing";
import { marketplaceListings } from "../marketplace/listings";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MarketplacePage() {
  // const {data: listings, isPending} = useGetListings()
  const isPending = false;
  const want = marketplaceListings[0];
  const offer = marketplaceListings[1];

  return (
    <div className="bg-white text-black">
      <h1 className="text-2xl leading-loose text-center font-bold">
        Barter request
      </h1>
      {isPending && <Loading />}
      {
        <div className="flex items-center">
          <div className="mx-auto w-[480px]">
            <p className="text-xl p-2">You are offering</p>
            <ListingCard key={offer.id} listing={offer} show={false} />
          </div>
          <div className="flex flex-col">
            <ArrowRightLeft size={100} />
            <Button className="mt-20">Confirm</Button>
          </div>
          <div className="mx-auto w-[480px]">
            <p className="text-xl p-2">You are getting</p>
            <ListingCard key={want.id} listing={want} show={false} />
          </div>
        </div>
      }
    </div>
  );
}
