import NavBar from "@/components/navbar/navbar";
import ListingCard from "./listing";
import RequestCard from "./request";
import { marketplaceListings } from "./listings";
import { requests } from "./requests";

export default function ProfilePage() {
  return (
    <div className="bg-white">
      <div className="p-10 bg-emerald-700">
        <NavBar></NavBar>
      </div>
      {/* page content */}
      <div className="flex flex-row">
        {/* my own listings */}
        <div className="w-2/3 mt-10">
          {marketplaceListings && (
            <div className="mx-auto w-[480px]">
              {marketplaceListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
        {/* requests to me */}
        <div className="w-1/3 mr-10 mt-10">
          {requests && (
            <div className="mx-auto w-[480px] flex flex-col gap-4">
              {requests.map((request: { listingId: any }) => (
                <RequestCard key={request.listingId} request={request} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
