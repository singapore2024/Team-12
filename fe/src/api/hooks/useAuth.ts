import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { getCurrentUser, login, signIn, signOut, signUp } from "../auth";
import { useToast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ACCESS_TOKEN_KEY } from "../base";

export function useGetCurrentUser() {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useQuery({
        queryFn: getCurrentUser,
        queryKey: ["me"],
        retry: false,
        throwOnError: (err) => {
            // Set the current user to null
            console.error(err)
            queryClient.setQueryData(["me"], null);
            router.replace("/login");
            return false;
        },
    });
}

export function useSignin() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { toast } = useToast();
  
    return useMutation({
      mutationFn: signIn,
      onError: (err) => {
        toast({
          description: `${err.message}`,
          title: "Error",
          variant: "destructive",
        });
  
        return true;
      },
      onSuccess: (accessToken) => {
        toast({
          title: "Login successful",
          variant: "success",
        });
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        queryClient.invalidateQueries({ queryKey: ["me"] });
      },
    });
  }

export function useSignup() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { toast } = useToast();
  
    return useMutation({
      mutationFn: signUp,
      onError: (err) => {
        toast({
          description: `${err.message}`,
          title: "Error",
          variant: "destructive",
        });
      },
      onSuccess: (user) => {
        router.push("/account/login");
        queryClient.invalidateQueries({ queryKey: ["me"] });
        toast({
          description:
            "A new verification link has been sent to your email! " +
            "Please check your Inbox/Spam folder for the link, " +
            "and use it to verify your email. It will expire in 30 minutes.",
          title: "Welcome " + user.email + "!",
          variant: "success",
        });
      },
    });
  }

export function useSignout() {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: signOut,
    onSuccess: async () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      await queryClient.invalidateQueries({ queryKey: ["me"] });
    //   Cookies.remove(ACCESS_TOKEN_KEY);
      toast({
        title: "Logout successful",
        variant: "success",
      });
    },
  });
}