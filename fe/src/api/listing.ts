import { clientGet } from "./base";

export const LISTING_URL = "/listings";

export async function getListings() {
  return await clientGet(LISTING_URL);
}

export async function getListing(id: number) {
  return await clientGet(`${LISTING_URL}/${id}`);
}