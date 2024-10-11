"use client";

import { useGetListings } from "@/api/hooks/useListings";
import Loading from "@/components/ui/loading";
import ListingCard from "./listing";
import { marketplaceListings } from "./listings";

export default function MarketplacePage() {
  // const {data: listings, isPending} = useGetListings()
  const isPending = false;

  return (
    <div>
      <h1 className="text-2xl leading-loose">Marketplace</h1>
      {isPending && <Loading />}
      {marketplaceListings && (
        <div className="mx-auto w-[480px] space-y-5">
          {marketplaceListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} show={true} />
          ))}
        </div>
      )}
    </div>
  );
}
