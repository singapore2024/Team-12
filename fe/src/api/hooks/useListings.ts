import { useQuery } from "@tanstack/react-query";
import { getListings } from "../listing";
import { Listing } from "@/types/listing";

export function useGetListings() {
    return useQuery({
        queryKey: ["listings"],
        queryFn: async (): Promise<Listing[]> => {
            const res = await getListings();
            return res.data;
        },
    })
}