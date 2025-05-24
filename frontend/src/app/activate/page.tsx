"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ActivationForm from "@/components/auth/ActivationForm";
import { useAuth } from "@/hooks/useAuth";

export default function ActivatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, isLoading } = useAuth();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push("/portfolio");
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-16rem)]">
      <ActivationForm email={email} />
    </div>
  );
}