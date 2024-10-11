import axios from "axios";

import { clientDelete, clientGet, clientPost } from "./base";

import type { User } from "@/types/user";

// leaving this in auth.ts for now because function of auth and users are so closely linked
export const BASE_USERS_URL = `/users`;

export const BASE_AUTH_URL = `/auth`;

export async function getCurrentUser(): Promise<User | null> {
  try {
    const res = await clientGet(`${BASE_USERS_URL}/me`);

    return res.data;
  } catch (err: any) {
    // Special error catch clause. If it's unauthorised, we just return null as the current user
    if (err.response?.status === 401) {
      return null;
    }

    throw err;
  }
}

export async function signIn(data: any) {
  try {
    const res = await clientPost(`${BASE_AUTH_URL}/login`, data);

    return res.data.backendTokens.accessToken;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data.message);
    } else {
      throw new Error(
        `${err.message}. Unable to login at this time. Please try again later.`,
      );
    }
  }
}

export async function signUp(data: { email: string; password: string }) {
  try {
    const response = await clientPost(`${BASE_AUTH_URL}/register`, data);

    return response.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      throw new Error(err.response?.data.message);
    } else {
      throw new Error(
        "Unable to register at this time. Please try again later.",
      );
    }
  }
}

export const signOut = async () => {
//   return await clientDelete(BASE_AUTH_URL);
};

export async function resetPassword({
  newPassword,
  token,
}: {
  newPassword: string;
  token: string;
}) {
  await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, {
    password: newPassword,
    token,
  });
}
