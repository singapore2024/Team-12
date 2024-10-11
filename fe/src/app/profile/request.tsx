import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RequestCard({ request }: any) {
  const { listingId, quantity, description, authorName } = request;
  return (
    <Card>
      <CardContent className="flex flex-col space-y-2">
        <div className="text-2xl mt-5">
          Barter Request to Your Listing No: {listingId}
        </div>
        <div className="font-bold">{description}</div>
        <div>{quantity}pc</div>
        <div className="flex justify-center gap-10">
          <Button className="bg-green-700">Accept</Button>
          <Button variant="outline">Decline</Button>
        </div>
      </CardContent>
    </Card>
  );
}
